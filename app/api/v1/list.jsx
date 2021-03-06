/***Importing Axios Lib for Async Method For Getting Data From Api***/
var axios = require('axios');

/***Api Url***/
//var rootElement = document.getElementsByClassName('Listings');
//var url = rootElement.getAttribute('api-url');
//const Api_Url = "http://192.168.0.106:1003/";



module.exports = {
   getLists: function (Url) {
      const Api_Url = Url;
      var requestUrl = `${Api_Url}`;
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