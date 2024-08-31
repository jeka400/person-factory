module.exports = {
    entry: "./index.tsx",
    output: {
        filename: "./dist/bundle.js",
    },
    resolve: {
        extensions: ["", ".webpaack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [ 
            { 
                test: /\.tsx?$/,
                lodaer: "ts-loader"
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }
};