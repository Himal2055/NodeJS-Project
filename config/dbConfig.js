//For LOCAL ENVIROMENT
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "sepcms",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// for orodution
// module.exports = {
//     HOST: "containers-us-west-205.railway.app",
//     USER: "root",
//     PASSWORD: "gRYyVzSDtbR6AifJWTbf",
//     DB: "railway",
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   };