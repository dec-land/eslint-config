
# Eslint Config

Resuable eslint config. Uses pnpm workspaces to make deploying multiple packages at once much easier.

Currently only has a package for typescript eslint configuration and an extended one that is more strict. These are currently used on all my serverless projects.

Notibly uses the Airbnb style guide rules - https://github.com/airbnb/javascript + many more

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

```
extends: [
    '@dec-land/eslint-config-ts-extended'
]

Override rules as you would for any other extended package/plugin.

## Deployment

### Manual

Run the following command to bump the package versions and push the new packages to the registry

```
pnpm release
```

### Pipeline

This monorepo uses semantic release within the pipeline to deploy the packages when a commit is made on main, whether this is a PR or a normal commit.

It does this by using the commit analyser, this follows the conventional commits standard - https://www.conventionalcommits.org/en/v1.0.0/

When you need to commit you can run the following command for a nicer helper cli tool for choosing the best commit message

```
pnpm commit
```