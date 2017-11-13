module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module"
  },
  "rules": {
    "no-unused-vars": ["warn"],
    "no-var": ["warn"],
    "quotes": ["error", "single"],
    "semi": 2,
    "array-bracket-spacing": [2, "always"],
    "brace-style": [2, "1tbs"],
    "camelcase": 2,
    "comma-dangle": [2, "always-multiline"],
    "comma-spacing": 2,
    "comma-style": 2,
    "computed-property-spacing": [2, "always"],
    "constructor-super": 2,
    "consistent-return": 0,
    curly: 2,
    "dot-notation": 2,
    eqeqeq: [2, "allow-null"],
    "eol-last": 2,
    "func-call-spacing": 2,
    indent: [2, "tab", {
      SwitchCase: 1
    }],
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": 2,
    "keyword-spacing": 2,
    "max-len": [2, {
      code: 100
    }],
    "new-cap": [2, {
      capIsNew: false,
      newIsCap: true
    }],
    "no-cond-assign": 2,
    "no-const-assign": 2,
    "no-console": [2, {
      allow: ["warn", "error"]
    }],
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty": [2, {
      allowEmptyCatch: true
    }],
    "no-extra-semi": 2,
    "no-fallthrough": 0,
    "no-lonely-if": 2,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {
      max: 1
    }],
    "no-multi-spaces": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-process-exit": 2,
    "no-redeclare": 2,
    "no-shadow": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-underscore-dangle": 0,
    "no-unreachable": 2,
    "no-unused-vars": 2,
    "no-use-before-define": [2, "nofunc"],
    "no-var": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": 0,
    "operator-linebreak": [2, "after", {
      overrides: {
        "?": "before",
        ":": "before"
      }
    }],
    "padded-blocks": [2, "never"],
    "prefer-const": 2,
    "quote-props": [2, "as-needed"],
    quotes: [2, "single", "avoid-escape"],
    semi: 2,
    "semi-spacing": 2,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "never"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": [2, {
      int32Hint: false
    }],
    "space-unary-ops": [2, {
      overrides: {
        "!": true
      }
    }],
    strict: [2, "never"],
    "template-curly-spacing": [2, "always"],
    "valid-jsdoc": 0,
    yoda: 0
  }
};
