const express = require('express');
const router = express.Router();
const User = require("../../../models/User.js");

router.post("/", async (req, res) => {
  try {
    //Se realizara la comprobaciones de los tokens, el token1 es true o false, el token2 es el ID almacenado
    const { token, token2 } = req.body;
    const user = await User.findOne({ emailToken: token2 });
    //Se encuentra una coincidencia
    console.log(user)
    if (user) {
      user.emailToken = null;
      user.isVerified = true;
      await user.save();
     console.log("Se ha verificado la cuenta satisfactoriamente")
    } else {
     console.log("Error dentro del sistema")
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
