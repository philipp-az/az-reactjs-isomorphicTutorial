var path = require("path");

module.exports = [{
    context: path.join(__dirname, "public", "javascripts"),
    entry: "app",
    output: {
        path: path.join(__dirname, "public", "javascripts"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony"}
        ]
    },
    resolve: {
        // You can now require('file') instead of require('file.coffee')
        extensions: ["", ".js", ".jsx"],
        root: [path.join(__dirname, "public", "javascripts")],
        modulesDirectories: ["node_modules"]
    }
}];