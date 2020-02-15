import regeneratorRuntime from 'bestime-runtime'



function getNowTimeStamp () {
  return +new Date()
}

function easyTween (t, b, c, d) {
  return c * ((t = t/d - 1) * t * t * t * t + 1) + b;
}

function getAnimate (startValue, changeValue, fx, duration, callback) {
  var startTime = 0; // 开始时间
  var goneTime = 0; // 相对于duratoin的运行时间		
  var runTime = 0; // 本次动画运行时间，用来多次stop和start累计计算goneTime。
  var isFinish = false; //本次计算是否完毕
  var isStop = true; // 初始化true,是否暂停状态，如果连续执行start或出现bug，所以设置一个状态来判断
  
  var timer = null;
  function start () {	
    if(!isStop) return;
    isStop = false;
    
    if(isFinish) return;
    startTime = getNowTimeStamp();
    clearInterval(timer);
    timer = setInterval(function () {
      goneTime = getNowTimeStamp() - startTime  + runTime;
      if(goneTime >= duration) {
        goneTime = duration;
        isFinish = true;
        stop();
      }
      var result = fx(goneTime, startValue, changeValue, duration);
      callback && callback(result, isFinish);
    }, 17);
  }
  
  function stop () {
    isStop = true;
    runTime = goneTime;
    clearInterval(timer);
  }
  
  // 初始化自动运行
  start();
  
  // 可停止，并断点续接
  return {
    stop: stop,
    start: start
  }
};



function getTouchPos (ev) {
  const data = ev.touches[0]
  return {
    x: data.pageX,
    y: data.pageY
  }
}

Component({
  externalClasses: ['my-class'],
  options: {
    multipleSlots: true,
  },
  properties: {
    index:{
      type: [String,Number],
      value: ''
    },

    // 外层 wrapper 样式
    css: {
      type: String,
      value: 'background:#f1615f;'
    },

    // 背面的样式
    backStyle: {
      type: String,
      value: ''
    }

  },
  data: {
    bw: 0, // 背面的实时宽度
    x0: 0, // 按下的位置
    xm: 0, // 移动的距离
    active: false,//是否展开
    flag: true, // 需要获取宽度
  },
  methods: {
    doNothing (e) {
      console.log(e)
    },
    // 手指按下
    async start (e) {
      this.triggerEvent('_ontouch', { index: this.data.index })     
      const pos = getTouchPos(e)
      this.setData({ x0: pos.x - this.data.xm})
      if(this.data.xm==0) {
        await this.getBackWidth().then(width => width)
      }
    },

    // 手指移动
    async move(e) {
      const pos = getTouchPos(e)
      let nowx = pos.x - this.data.x0
      nowx = nowx > 0 ? 0 : nowx
      this.setData({ xm: nowx })
    },

    // 手指抬起
    async end (e) {
      this.checkPos()
    },

    // 判断位置
    checkPos () {
      const dis = this.data.xm
      if(dis>0) {
        this.close()
      }else if(!this.data.active) {
        Math.abs(dis) > 20 ? this.open() : this.close()
      }else {
        Math.abs(dis) < this.data.bw-20 ? this.close() : this.open()
      }
    },

    open () {      
      this.setData({active: true}, () => {
        this.bounceTo(-this.data.bw)
      })
      
    },

    close () {      
      this.setData({active: false}, () => {
        this.bounceTo(0)
      })      
    },
    
    // 回弹至
    async bounceTo (target) {
      getAnimate(this.data.xm, target-this.data.xm, easyTween, 300, (xm) => {
        this.setData({xm})
      })
    },

    // 获取背面的宽度
    getBackWidth () {
      return new Promise(resolve => {
        this.setData({flag: true}, () => {
          this.getDom('back').then(res => {
            const bw = res.width
            this.setData({ flag: false, bw }, () => resolve(bw))
          })
        })
      })
    },

    // 获取节点
    getDom (id) {
      return new Promise(resolve => {
				const query = this.createSelectorQuery();
				query.select(`#${id}`).boundingClientRect()
				query.exec(res=>{
          resolve(res[0])
				})
			})
    },

    click (e) {
      const name = e.currentTarget.dataset.name
      this.triggerEvent('_onclick', { name })      
    }
  }
})