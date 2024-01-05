const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://user_goit:10y4rlyn4XqJy2uu@cluster0.hb4g0oz.mongodb.net/contacts_reader?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
