var axios = require('axios');
const OPEN_FOODAPP_URL = "http://192.168.0.106:1003/";
module.exports = {
   getLists: function () {
    var requestUrl = `${OPEN_FOODAPP_URL}api/task/lists`;
     var authOptions = {
      method: 'POST',
      url: requestUrl,
      data: {'username':'shlok'},
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      json: true
    };
    return axios(authOptions)
    .then(function (response) {
       console.log(response.data.status);
       return response.data;
    })
    .catch(function (error) {
      console.log(error.data);
      return error.data;
    });
  }

}