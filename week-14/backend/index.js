const express = require("express");
const { userModel } = require("./model");
const { Keypair, PublicKey } = require("@solana/web3.js");
const jwt = require("jsonwebtoken");

const app = express();
const JWT_SECRET = "12345";

app,use(express.json())
app.post("api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const Keypair = new Keypair();

  await userModel.createOne({
    username,
    password,
    publicKey: Keypair.publicKey.toString(),
    privateKey: Keypair.secretKey.toString(),
  });

  res.json({
    msg: Keypair.publicKey.toString(),
  });
});

app.post("api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await userModel.findOne({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ id: user },JWT_SECRET);
    res.json({
      token
    })
  } else {
    res.json({
      msg: "signin",
    });
  }
});

app.post("api/v1/txn/sign", (req, res) => {
  res.json({
    msg: "sign",
  });
});

app.post("api/v1/txn", (req, res) => {
  res.json({
    msg: "sign",
  });
});

app.listen(3000);
