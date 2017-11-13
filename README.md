# eslint-config-infield

An ESLint configuration following Infield Digital's JavaScript Coding Guidelines.

## Usage

You should install this configuration and peer dependencies as `devDependencies` in your project:

```
npm install --save-dev eslint-config-infield eslint
```

Next, simply extend the configuration from your project's `.eslintrc` file:

```
"extends": "eslint-config-infield"
```

## Development

If you clone this repository to your local machine and modify it, you can test changes without having to push and publish them to the NPM repository. Do this by linking your module globally – type:

```
npm link
```

Then, in your project where you want to test the updated config, type:

```
npm link eslint-config-infield
```

Refer to the [ESLint documentation on Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) for more information.
