const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ivr', (req, res) => {
  const dtmf = req.body.DtmfDigits;
  let response = '<?xml version="1.0" encoding="UTF-8"?>\n<Response>';

  if (!dtmf) {
    response += `<GetDigits timeout="10" numDigits="1" callbackUrl="/ivr">
      <Say>Welcome to KilimoX. Press 1 to request a loan. Press 2 for crop disease help.</Say>
    </GetDigits>`;
  } else {
    if (dtmf === '1') {
      response += '<Say>You have selected loan request. Please visit our site to proceed.</Say>';
    } else if (dtmf === '2') {
      response += '<Say>You can upload a crop image on KilimoX website for diagnosis.</Say>';
    } else {
      response += '<Say>Invalid choice. Try again later.</Say>';
    }
  }

  response += '</Response>';
  res.set('Content-Type', 'text/xml');
  res.send(response);
});

app.listen(port, () => {
  console.log(`KilimoX IVR running at http://localhost:${port}`);
});
