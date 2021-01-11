export const enviroment = {
  production: false,
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    urlDev: process.env.MONGODBURL || "mongodb://localhost:27017/wondercook",
    urlProd: process.env.MONGODBURL || "mongodb://localhost:27017/wondercook",
  },
  token: {
    seed: process.env.TOKENSEED || "a strong seed",
    expireIn: process.env.TOKENEXPIREIN || "10d",
  },
};
