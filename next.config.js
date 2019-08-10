require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    if (process.env.NODE_ENV === "production") {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        if (
          entries["main.js"] &&
          !entries["main.js"].includes("./client/polyfills.js")
        ) {
          entries["main.js"].unshift("./client/polyfills.js");
        }

        return entries;
      };
    }

    return config;
  }
};
