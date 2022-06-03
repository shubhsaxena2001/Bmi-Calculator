const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  let n1 = Number(req.body.num1);
  let n2 = Number(req.body.num2);
  let n3 = n1 + n2;
  res.send("Thank you for your response. The sum is " + n3);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = weight / (height * height);
  res.send("Thank you for your response. Your calculated bmi is " + bmi);
});

app.listen(3000, () => {
  console.log("Server Started at Port 3000");
});
