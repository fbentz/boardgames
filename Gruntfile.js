module.exports = function(grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var DEST_DIR = 'build/';
  var SRC_DIR = 'src/';
  var TEST_DIR = 'tests/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dest: DEST_DIR,
    src: SRC_DIR,
    test: TEST_DIR,

    jshint: {
      options: {
        jshintrc: true
      },
      files: ['Gruntfile.js', 'src/**/*.js', '!src/client/layout/**/*.js']
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
        src: ['<%= src %>client/lib/*.js'],
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
        src: ['**/*.js','!app.js', '!lib/**/*.*', '!route/**/*.*'],
        dest: '<%= dest %>',
        expand: true,
        flatten: false
      }
    },

    clean: {
      build: ['<%= dest %>']
    },

    copy: {
      client: {
        expand: true,
        cwd:'src/client/layout',
        src:'**',
        dest: '<%= dest %>/static'
      },
      server: {
        expand: true,
        cwd:'src/server',
        src:'**',
        dest: '<%= dest %>'
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      client: {
        src: ['<%= test %>/client/**/*_test.js']
      },
      server: {
        src: ['<%= test %>/server/**/*_test.js']
      }
    }
  });

  grunt.registerTask('default', ['jshint', 'clean', 'copy', 'browserify', 'uglify']);
  grunt.registerTask('test', ['jshint', 'clean', 'copy', 'browserify', 'uglify', 'mochaTest']);
  grunt.registerTask('dev', ['jshint', 'clean', 'copy', 'browserify']);
};
