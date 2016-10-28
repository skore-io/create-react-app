module.exports = {
  rules: {
    'block-no-empty': [ null, {
      severity: 'warning'
    } ],
    'color-no-invalid-hex': true,
    'color-hex-case': 'upper',
    'comment-empty-line-before': [ 'always', {
      ignore: ['stylelint-commands', 'between-comments']
    } ],
    'declaration-colon-space-after': 'always',
    'declaration-block-properties-order': 'alphabetical',
    indentation: [ 2, {
      except: ['value']
    }],
    'max-empty-lines': 1,
    'unit-whitelist': ['px', 'vh', 'vw', 's', 'deg']
  }
}