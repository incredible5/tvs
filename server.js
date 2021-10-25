const express = require("express");
const request = require("request");

const app = express();

app.get("/api/data", (req, res) => {
  request(
    "https://tvsfit.mytvs.in/reporting/vrm/api/test_new/int/gettabledata.php",
    {
      method: "POST",
      body: {
        username: "test",
        password: "123456",
      },
      json: true,
    },
    (err, response, body) => {
      if (err) {
        res
          .status(response.statusCode)
          .send(JSON.stringify({ data: response, Error: err }));
      } else {
        res.setHeader("Content-Type", "application/json");
        res.send(body);
      }
    }
  );
});

app.listen(4000, () =>
  console.log("Express server is running on localhost:4000")
);
