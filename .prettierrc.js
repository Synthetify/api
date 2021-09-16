const modifiedConfig = {
  // ...prettierConfigStandard,
  singleQuote: true,
  jsxSingleQuote: true,
  spaceBeforeFunctionParen: true,
  printWidth: 100,
  parser: 'typescript',
  arrowParens: 'always',
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxBracketSameLine: true,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  // ... other modified settings here
};

module.exports = modifiedConfig;
