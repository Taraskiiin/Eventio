module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-order', 'stylelint-config-idiomatic-order'],
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
  ignoreFiles: [],
}
