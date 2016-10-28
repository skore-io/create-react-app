module.exports = {
  rules: {
    'block-no-empty': true,
    'block-no-single-line': true,
    'color-named': [ 'never', {
      ignore: ['inside-function']
    }]
    'color-no-invalid-hex': true,
    'color-hex-case': 'upper',
    'color-hex-length': 'short',
    'comment-empty-line-before': [ 'always', {
      ignore: ['stylelint-commands', 'between-comments']
    }],
    'declaration-bang-space-after': 'never',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-properties-order': 'alphabetical',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': [ true, {
      severity: 'warning'
    }]
    indentation: [ 2, {
      except: ['value']
    }],
    'length-zero-no-unit': true,
    'max-empty-lines': 1,
    'no-missing-end-of-source-newline': true,
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'rule-non-nested-empty-line-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': '[a-z-]+',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-no-id': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'unit-whitelist': ['px', 'vh', 'vw', 's', 'deg'],
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true
  }
}