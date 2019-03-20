// 主js文件
import * as C from './constant'

class Demo {
  constructor(name = undefined) {
    this.name = name || C.DEMO_NAME
  }
  /**
   *  init
   *  * a Demo init function
   *  @param void
   *  @returns {string}
   */
  init() {
    return this.name
  }
}

export default Demo
