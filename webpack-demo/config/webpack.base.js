const path = require("path");



module.exports = {
    entry:{
        app:"./src/index.js",
    },
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,"../dist")
    },
    module:{
        rules:[
            {
                test:/.css$/,
                use:["style-loader",{
                    loader:"css-loader",
                    options:{
                        // minimize:true,
                    }
                }]
            }
        ]
    }
}