module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-ng-constant');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngconstant: {
      // Options for all targets
      options: {
        space: '  ',
        wrap: '"use strict";\n\n {\%= __ngModule %}',
        name: 'config',
      },
      development: {
        options: {
          dest: 'app/app.config.js'
        },
        constants: {
          ENV: {
            name: 'development',
            apiEndpoint: 'http://localhost:3000'
          }
        }
      },
      production: {
        options: {
          dest: 'app/app.config.js'
        },
        constants: {
          ENV: {
            name: 'production',
            apiEndpoint: 'https://adn-news.herokuapp.com'
          }
        }
      }
    }
  });

  grunt.registerTask('dev', function(target){
    grunt.task.run([
      'ngconstant:development'
    ]);
  });

  grunt.registerTask('prod', function(target){
    grunt.task.run([
      'ngconstant:production'
    ]);
  });
}
