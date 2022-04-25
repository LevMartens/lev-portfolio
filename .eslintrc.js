const tsconfig = require("./tsconfig.json");

// Import path aliases from tsconfig
const aliases = Object.entries(tsconfig.compilerOptions.paths).map(
    ([key, path]) => [
        key.replace("/*", ""),
        `./${path[0].substr(0, path[0].length - 2)}`,
    ],
);

const config = {
    env: {
        browser: true,
        es6: true,
    },
    parser: "@babel/eslint-parser",
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        React: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "prettier", "prefer-arrow", "import"],
    rules: {
        quotes: [2, "single", { avoidEscape: true }],
        "no-undef": "off",
        "no-unsed-vars": "off",
        "no-underscore-dangle": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": ["warn", { ignore: ["navigation"] }],
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                trailingComma: "es5",
                singleQuote: true,
            },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            { js: "never", jsx: "never", ts: "never", tsx: "never" },
        ],
        "react/function-component-definition": [
            2,
            { namedComponents: "arrow-function" },
        ],
        "react/no-array-index-key": "warn",
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "react/state-in-constructor": "off",
        "react-hooks/exhaustive-deps": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-arrow/prefer-arrow-functions": ["warn"],
        camelcase: "off",
        "import/order": [
            "error",
            {
                pathGroups: [
                    {
                        pattern: "@contexts/**",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "@hooks/**",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "@services/**",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "@helpers/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@styles/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@layout/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@components/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@assets/**",
                        group: "internal",
                        position: "after",
                    },
                ],
                groups: [
                    "external",
                    "internal",
                    "builtin",
                    "object",
                    "type",
                    "index",
                    "sibling",
                    "parent",
                ],
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
                "newlines-between": "always-and-inside-groups",
            },
        ],
    },
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        "import/resolver": {
            alias: {
                map: [...aliases],
                extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
            },
        },
        jest: {
            version: 26,
        },
    },
    overrides: [
        // Typescript
        {
            files: ["*.ts", "*.tsx"],
            extends: [
                "eslint:recommended",
                "plugin:react/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
            ],
            globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 2018,
                sourceType: "module",
            },
            plugins: ["react", "react-hooks", "@typescript-eslint"],
            rules: {
                "no-shadow": "off",
                "@typescript-eslint/no-shadow": ["error"],
                "no-use-before-define": [0],
                "@typescript-eslint/no-explicit-any": 0,
                "@typescript-eslint/no-use-before-define": [1],
                camelcase: "off",
            },
        },
    ],
};

console.log("---- ESLINT CONFIG ----", JSON.stringify(config, null, 2));

module.exports = config;
