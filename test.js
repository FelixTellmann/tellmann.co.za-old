var axios = require('axios');
fs = require('fs');

let counter = 1;
let after = 1

function getData(counter, after, data = []) {
  axios({
    method: 'get',
    url: `https://kidsliving.vendhq.com/api/2.0/products?after=${after}`,
    headers: {
      'Authorization': 'Bearer 5OtjwgBqfHJZh1Ed36qBb_JUDDKnjwlAJ7l8fBmg',
      'Content-Type': 'application/json',
      'Cookie': 'rguserid=b2b95383-16dd-4132-a3d2-f53bdec946bb; rguuid=true; rgisanonymous=true'
    }
  })
      .then(function (response) {
        let updateData = response.data.data.filter(({ active }) => active === true).map(({ id, source_id, source_variant_id, source, name, active, handle  }) => { return { id, source_id, source_variant_id, source, name, active, handle  } })
        let totalData = [...data,...updateData]
        fs.writeFile(`${counter}.json`, JSON.stringify({totalData}), function (err) {
          if (err) return console.log(err);
          console.log('Hello World > helloworld.txt');
        });
        console.log(response.data.version.max);
        if (after !== response.data.version.max) {
            getData(counter + 1, response.data.version.max, totalData)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}

getData(counter, after, [])