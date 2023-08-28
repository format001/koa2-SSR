
const pageConfig = require('../config/config.js').page_config,
      indexModel = require('../models/index.js');

class IndexControllers {
  async index (ctx, next) {
    const data = await  indexModel.getXiaomiDatas();
    console.log(data, 11)
    await ctx.render('index', {
      pageConfig: pageConfig.index
    });
  }
}

module.exports = new IndexControllers();
