{
  "rules": {
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "color-hex-case": "upper",
    "comment-empty-line-before": [ "always", {
      "ignore": ["stylelint-commands", "between-comments"],
    } ],
    "declaration-colon-space-after": "always",
    "indentation": [ 2, {
      "except": ["value"]
    }],
    "max-empty-lines": 1,
    "rule-nested-empty-line-before": [ "always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"],
    } ],
    "unit-whitelist": ["px", "vh", "vw", "%", "s"]
  }
}