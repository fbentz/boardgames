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
      vendor: {
        src: [],
        dest: '<%= dest %>static/js/vendor/vendor.js',
        options: {
          require: ['backbone'],
          alias: ['backbone:backbone']
        }
      },
      app: {
        src: ['<%= src %>client/**/*.js'],
        dest: '<%= dest %>static/js/app.js',
        options: {
          external: ['backbone']
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

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      test: {
        src: ['test/**/*_test.js']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'clean', 'browserify', 'uglify']);
};
