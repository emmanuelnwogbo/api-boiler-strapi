module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  //url: "https://8b9dd50b52eb.ngrok.io",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '976450683d7a665a5903818cb21e4ada'),
    },
  },
});
