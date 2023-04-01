
const PORT = 3001;
const app = require("./app");
const { sequelize } = require("./DB_connection");

sequelize.sync({ force: true }).then(() => {
   console.log("DB connected")
   app.listen(PORT, () => {
      console.log('Server raised in port ' + PORT);
   })
});
