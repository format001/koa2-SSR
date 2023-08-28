

const api = require('../config/config').api;
const Model = require('../lib/Model.js');

class IndexModel extends Model{
  async getXiaomiDatas (options) {
    console.log(options)
    // const swiper = options.swiper,
    //       phone = options.phone,
    //       field = options.field,
    //       url = `${api.getXiaomoDatas}?swiper=${swiper}&phone=${phone}&field=${field}`;

    return this.get('http://fast.huangdeqin.com/api/demo/test', {
      success (res) {
        return res;
      },
      error (error) {
        throw  new Error('Error:' + error);
      }
    });
  }
}

module.exports = new IndexModel();


