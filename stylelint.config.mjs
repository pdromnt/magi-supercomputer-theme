export default {
  extends: ['stylelint-config-standard'],
  ignoreFiles: ['node_modules/**', 'test-results/**', 'playwright-report/**'],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['theme', 'plugin'] }],
    'color-function-notation': 'modern',
    'color-hex-length': 'long',
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'selector-class-pattern': null,
    'selector-not-notation': 'simple',
  },
}
