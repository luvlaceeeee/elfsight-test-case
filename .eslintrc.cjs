module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss'],
    rules: {
        'react-hooks/exhaustive-deps': 0,
        'react/jsx-no-target-blank': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/no-array-index-key': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'import/extensions': 0,
        'react/react-in-jsx-scope': 0,
        'import/prefer-default-export': 0,
        'react/button-has-type': 0,
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
