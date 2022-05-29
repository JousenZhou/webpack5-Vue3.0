module.exports = {
  extends: ["stylelint-config-standard", "css-properties-sorting"],
  plugins: ["stylelint-order"], // stylelint-order是CSS属性排序插件
  rules: {
    "no-duplicate-selectors": null,
    "declaration-block-no-shorthand-property-overrides": null,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["mixin", "include","extend"]
      }
    ],
  }
};
