
//获取元素相对窗口的距离
function getRelativePos(el) {
	const bound = el.getBoundingClientRect()
	return {
		x: bound.left,
		y: bound.top,
		height: el.offsetHeight,
		width: el.offsetWidth,
		clientWidth: el.clientWidth,
		clientHeight: el.clientHeight
	};
}

export default getRelativePos