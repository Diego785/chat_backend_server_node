const mongoose = require("mongoose");

require('dotenv').config({ path: '.env'});

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
    });
  } catch (error) {
    throw new Error("Error en la base de datos - Hable con el admin.");
  }
};

module.exports = {
  dbConnection,
};
