const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "11",
                firefox: "30",
                chrome: "40",
                safari: "9.1",
            },
            useBuiltIns: "usage"
        }
    ],
    "@babel/react",
    "@babel/flow",
    "@babel/typescript"
]

const plugins = [
    "@babel/plugin-transform-runtime"
]

// module.exports = {
//     presets,
//     plugins
// }

module.exports = function(api){
    console.log('api', api)
    api.cache(true)
    return {
        presets,
        plugins
    }
}