// const request = require('request');
// module.exports = {
   
//     getPostData : function(url){
//         return new Promise((resolve, reject) => {
//             request(url, { json: true }, (err, res, body) => {
//               if (err) reject(err)
//               resolve(body)
//             });
//         })
//     }
// }

const axios = require('axios');
module.exports = {
   
    getPostData : async function(url){
        try {
            // with destructuring 
          
            // without destructuring 
             const res = await axios.get(url);
          
              return res.data;
            } catch (err) {
                return err;
            }
    }
}