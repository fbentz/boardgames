module.exports = function(grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var DEST_DIR = 'build/';
  var SRC_DIR = 'src/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dest: DEST_DIR,
    src: SRC_DIR,

    jshint: {
      options: {
        jshintrc: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },

    browserify: {
      options: {
        transform: ['hbsfy'],
        debug:true
      },
      vendor: {
        src: [],
        dest: '<%= dest %>static/js/vendor/vendor.js',
        options: {
          require: ['backbone', 'jquery'],
          alias: ['backbone:backbone', 'jquery:jquery']
        }
      },
      app: {
        src: ['<%= src %>client/**/*.js'],
        dest: '<%= dest %>static/js/app.js',
        options: {
          external: ['backbone', 'jquery'],
          alias: ['<%= src %>client/lib/base/index.js:base'],
          watch: true
        }
      }
    },

    uglify: {
      options: {
        sourceMap: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      files: {
        cwd: '<%= dest %>',
        src: '**/*.js',
        dest: '<%= dest %>',
        expand: true,
        flatten: false
      }
    },

    clean: {
      build: ['<%= dest %>']
    },

    copy: {
      main: {
        expand: true,
        cwd:'src/client/public',
        src:'**',
        dest: '<%= dest %>/static'
      }
    },

    mochaTest: {
      client: {
        options: {
          reporter: 'spec'
        },
        src: ['tests/client/**/*_test.js']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'browserify', 'uglify']);
  grunt.registerTask('test', ['jshint', 'clean', 'copy', 'browserify', 'uglify', 'mochaTest']);
  grunt.registerTask('dev', ['jshint', 'clean', 'copy', 'browserify']);
};
