/***Importing Axios Lib for Async Method For Getting Data From Api***/
var axios = require('axios');

/***Api Url***/
//var rootElement = document.getElementsByClassName('Listings');
//var url = rootElement.getAttribute('api-url');
const Api_Url = "http://192.168.0.106:1003/";


module.exports = {
   userLogin: function (username, password) {
     
      var requestUrl = `${Api_Url}api/user/login`;
      var authOptions = {
            method: 'POST',
            url: requestUrl,
            data: {'email':username,'password':password},
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            json: true
      };
      return axios(authOptions)
      .then(function (response) {
         console.log(response);
         return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error.data;
      });
  }

}