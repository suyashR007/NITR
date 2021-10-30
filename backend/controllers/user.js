const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `NO user was found in DB ${err}`,
      });
    }
    req.profile = user;
    next();
  });
};
exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.resetLink = undefined;
  req.profile.confirmationCode = undefined;
  return res.json(req.profile);
};
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true, useFindAndModify: false }
  )
    .then((user) => {
      if (user) {
        res.status(400).json({
          error: "You are not Authorised to update this information",
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user);
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.changePassword = (req, res) => {
  const { currentPassword, pass1, pass2 } = req.body;
  var password;
  if (pass1 === pass2) {
    password = pass1;
  } else return res.json({ error: "Passwords must be same" });

  if (password.length < 5) {
    return res.json({ error: "Password must be atleast 5 char long" });
  }
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).json({
        error: "User with such id not found",
      });
    }
    if (!user.authenticate(currentPassword)) {
      return res.status(400).json({
        error: "Current password entered incoorectly",
      });
    } else {
      if (currentPassword === password) {
        return res.status(401).json({
          error: "New password must be different fron existing password",
        });
      }
      user.password = password;
      user
        .save()
        .then((user) => {
          user.salt = undefined;
          user.encry_password = undefined;
          res.json(user);
        })
        .catch((err) =>
          res.status(400).json({ error: "Coulndt update your password" })
        );
    }
  });
};
