



const mode = 'development',
  base_config = {
    api_url: 'http://studu.jsplusplus.com/Xiaomi/',
    source_url: mode === 'development' ? 'http://localhost:3000/' : '/'
  };

const BASE_URL = '//localhost:3000/';

module.exports = {
  page_config: {
    index: {
      head: {
        title: '小米官网 - Xiaomi MIX Fold 3，Xiaomi 13系列，小米徕卡影像大赛',
        keywords: '小米，小米官网，Xiaomi，Redmi，Xiaomi 13系列，Xiaomi Mix Fold 2，MIUI14',
        description: '让全球每个人都能享受科技带来的美好生活'
      },
      stylesheet: [
        base_config.source_url + 'css/index.css'
      ],
      script: [
        base_config.source_url + 'js/jquery.js',
        base_config.source_url + 'js/index.js'
      ]
    }
  },
  api: {
    getXiaomoDatas: base_config.api_url + 'getXiaomiDatas'
  }
}
