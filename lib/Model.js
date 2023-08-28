const axios = require('axios');

class Index {
  get (url, options) {
    return axios(url).then(res => {
      console.log(res)
      // return res.json();
    }).then(res => {
      // options.success(res);
    }).catch(err => {
      options.error(err);
    })
  }

  post (url, options) {
    return axios(url, {
      method: 'post',
      body: JOSN.stringify(options.data),
      head: {
        'Content-type': 'application/json'
      }
    }).then(res => {
      return res.json();
    }).then(res => {
      options.success(res);
    }).catch(err => {
      options.error(err);
    })
  }
}

module.exports = Index;
