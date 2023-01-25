const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe1sa",

  exposes: {
    // Preferred way: expose corse-grained routes
    "./HomeRoutes": "./src/app/app-routing.module.ts",

    // Technically possible, but not preferred for Micro Frontends:
    // Exposing fine-grained components
    "./HomeComponent": "./src/app/home2/home.page.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  }

});
