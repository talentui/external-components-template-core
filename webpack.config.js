const path = require("path");
const fs = require("fs");
const appRoot = fs.realpathSync(process.cwd());
module.exports = require("@talentui/webpack-config")({
    entry: "_/src/app.js",
    port: 3000,
    hostPage: path.resolve(fs.realpathSync(process.cwd()), "index.html"),
    dllList: ["@talentui/dll-react"],
    moduleScope: path.resolve(appRoot, "src"),
    language: "mixed", //可选，default 'js' 可选 'ts', 'mixed',
    alias: {
        "&": path.resolve(appRoot, "src"),
        _: "@talentui/external-components-bootstrap"
    }
});
