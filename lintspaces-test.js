/*https://www.npmjs.com/package/lintspaces*/
var Validator = require('lintspaces');

    var validator = new Validator({/* options */
      newline: true,
      newlineMaximum: 2,
      trailingspaces: true,
      indentation: 'spaces',
      spaces: 2,
      // indentationGuess: true,
      // allowsBOM: true,
      editorconfig: './.editorconfig'
    });
    validator.validate('./source/index.html');
    // validator.validate('/path/to/other/file.ext');

    var results = validator.getInvalidFiles();

    console.log(results);
    //console.log(results[0]);
