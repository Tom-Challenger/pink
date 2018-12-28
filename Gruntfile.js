'use strict'

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    //Delete catalog './build'
    clean: {
      build: ['build']
    },

    //Create catalog './build' and copy into files from './source/**'
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: 'source/',
          src: [
            'img/**',
            'js/**',
            'css/**',
            'index.html',
            'form.html',
            'photo.html'
          ],
          dest: 'build/'
        }]
      }
    },

    // Conver files '*.less' to '*.css'
    less: {
      source: {
        files: {
          'source/css/style.css':'source/less/style.less'
        }
      },
      build: {
        files: {
          'build/css/style.css':'source/less/style.less'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    // Tracks changes in files and run predefined tasks
    watch: {
      build: {
        files: ['source/less/**/*.less'],
        tasks: ['less:source'],
        options: {
          spawn: false,
          livereload: false
        }
      }
    },

    // Run static server and reload site when change srcFiles
    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'source/css/*.css',
            'source/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: './source'
          }
        }
      }
    }
  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).
  grunt.registerTask('server', ['browserSync', 'watch']);
  // Custom task(s).
  grunt.registerTask('compile', [
    'less:source'
  ]);
  grunt.registerTask('build', [
    'clean:build',
    'copy:build',
    'less:build',
    'cssmin'
  ]);
};
