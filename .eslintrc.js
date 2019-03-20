module.exports = {
    // 解析器
    parser: 'babel-eslint',
    // 继承配置
    extends: ['airbnb', 'prettier'],
    // 解析器选项
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module',
      allowImportExportEverywhere: false,
      codeFrame: true,
      ecmaFeatures: {
        jsx: true,
      },
    },
    // 插件
    plugins: [
      //eslint: https://cn.eslint.org/docs/rules/
      //rules: https://github.com/evcohen/eslint-plugin-jsx-a11y/
      'jsx-a11y',
      //rules: https://github.com/benmosher/eslint-plugin-import/
      'import',
    ],
    // 环境
    env: {
      browser: true,
      node: true,
      commonjs: true,
      es6: true,
    },
    // 不允许自定义
    root: false,
    // 规则
    rules: {
      // 0=off,1=warn,2=error; 可酌情添加和修改
      camelcase: 0,
      'no-empty-function': 0,
      'func-names': 0,
      'no-underscore-dangle': 0,
      'arrow-body-style': 0,
  
      'import/no-unresolved': 0,
      'import/no-extraneous-dependencies': 0,
      'import/prefer-default-export': 0,
  
      'jsx-a11y/anchor-is-valid': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
    },
  };
  