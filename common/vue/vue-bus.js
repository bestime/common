import CreateEventBus from '../js/split/CreateEventBus'
import isObject from '../js/split/isObject'
import getConfig from '../js/split/getConfig'
import setConfig from '../js/split/setConfig'
const BUS_NAME = 'vue-bus'

/**
 * 仅限工具内部使用 => 【订阅发布】
 */
function vueBus () {
  let bus = getConfig(BUS_NAME);
  if(!isObject(bus)) {
    bus = new CreateEventBus()
    setConfig(BUS_NAME, bus)
  }
  return bus
}

export default vueBus