// exports.auth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     if (token) {
//       decodedData = jwt.verify(token, process.env.SECRETKEY);
//       req.userId = decodedData?.id;
//     }
//     next();
//   } catch (err) {
//     console.log(err);
//     res.status(403).json({
//       message: "you need to sign in",
//     });
//   }
// };

// exports.restrictTo = (...role) => {
//   return (req, res, next) => {
//     // role user should be inside the array of role
//     if (!role.includes(req.user.role)) {
//       return next(
//         res.status(403).json({
//           message: "you need to sign in",
//         })
//       );
//     }
//     next();
//   };
// };