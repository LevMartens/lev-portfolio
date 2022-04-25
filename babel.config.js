const tsconfig = require('./tsconfig.json');

// Import path aliases from tsconfig
const aliases = Object.entries(tsconfig.compilerOptions.paths).reduce(
    (acc, [key, path]) => ({
        ...acc,
        [key.replace('/*', '')]: `./${path[0].substr(0, path[0].length - 2)}`,
    }),
    {}
);

const plugins = [
    '@babel/plugin-syntax-jsx',
    [
        'react-directives',
        {
            prefix: 'x',
            pragmaType: 'react',
        },
    ],
    [
        'module-resolver',
        {
            alias: aliases,
        },
    ],
    'inline-react-svg',
    ['styled-components', { displayName: true, ssr: true, preprocess: false }],
    [
        '@simbathesailor/babel-plugin-use-what-changed',
        {
            active: process.env.NODE_ENV === 'development', // boolean
        },
    ],
];

module.exports = (api) => {
    api.cache(true);

    const presets = ['next/babel', '@babel/preset-typescript'];

    return {
        presets,
        plugins,
    };
};
