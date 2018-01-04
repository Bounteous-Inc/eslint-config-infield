module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-expressions": ["error", {
      // This allows us to use hyperHTML (https://www.npmjs.com/package/hyperhtml)
      allowTaggedTemplates: true,
    }],

    "no-param-reassign": [2, {
      "props": false,
    }],
  },
};
