SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  transpiler: "plugin-typescript",

  map: {
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.1"
  },

  packages: {
    "app": {},
    "github:frankwallis/plugin-typescript@4.0.1": {
      "map": {
        "typescript": "npm:typescript@1.8.2"
      }
    }
  }
});
