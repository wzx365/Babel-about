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
    "@babel/react"
]

module.exports = {
    presets
}