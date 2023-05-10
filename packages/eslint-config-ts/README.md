
# ESlint Config Typescript

Resuable eslint config for typescript

Notibly uses the Airbnb style guide rules - https://github.com/airbnb/javascript + many more

Plugins used

- eslint:recommended
- airbnb-base
- airbnb-typescript/base
- plugin:prettier/recommended
- prettier
- plugin:@typescript-eslint/eslint-recommended
- plugin:@typescript-eslint/recommended
- plugin:import/recommended
- plugin:import/typescript

## Usage

Install the package as a dev dependency

```
pnpm add --save-dev @dec-land/eslint-config-ts
```

Modify your `.eslintrc` file so that it now extends this config package


```
extends: [
    '@dec-land/eslint-config-ts'
]
```

Override rules as you would for any other extended package/plugin.