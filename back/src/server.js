
const PORT = 3001;
const app = require("./app")

app.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});