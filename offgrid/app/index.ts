const app = require("./app");
import initializeDatabase from "./initialize";

const runApp = async () => {
  setTimeout(async () => {
    await initializeDatabase();

    app.listen(1234, () => {
      console.log(`Offgrid runnning on port ${1234}.`);
    });
  }, 5000)
  
};

runApp();
