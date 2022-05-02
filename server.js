const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const Axios = require('axios');


    const Cash = () => {
        const ID = "47146607a7604bcd9a95be5eade208bb"
const MARCHAND = '2adb0f418dc84219b1ab77a7f35740b4'

        console.log("eeeeeee");
        var PmtID = "";
    var a = new Object();
    a.Amount = 1000; //please note that the amounts must be sent in Cents
    a.Currency = 'maxiDollar'; //values can be “maxiDollar” or “maxiRand”
    a.Telephone = '+243852282012';
    a.MerchantID = ID;
    a.MerchantPassword = MARCHAND;
    a.Language = 'fr'; //en or fr
    a.Reference = '123';

    var payloadString = "";
    payloadString = JSON.stringify(a);
    payloadString = payloadString.replace(/\"/g, '\\"');
    var vURL = "https://api-testbed.maxicashapp.com/Merchant/api.asmx/PayLaterSynch";
    
    const data = 'strData:' + payloadString + " ";

    console.log(data);


    Axios({
      method: "POST",
      url: `${vURL}/user/login`,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
    //   dispatch({ type: CLOSE_LOADER });
      console.log("response: ", response.data);
  
    }).catch(err=>{
      console.log("erreur : ", err);
    });
    }

app.get('/', (req, res) => {
    Cash()
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});