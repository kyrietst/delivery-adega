module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }], // <--- O SEGREDO DA V4 ESTÁ AQUI
            "nativewind/babel",
        ],
        plugins: [
            "react-native-reanimated/plugin", // Reanimated sempre por último
        ],
    };
};
