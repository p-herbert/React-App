module.exports = (grunt) => {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
      dev: {
        NODE_ENV: 'development' },
      pro: {
        NODE_ENV: 'production' } },
    mocha: {
      test: {
        options: {
          timeout: 1000 },
        src: 'test/unit/*.js' } },
    uglify: {
      files: {
        src: 'client/app/index.js',
        dest: 'client/app/index.min.js' } },
    cssmin: {
      files: {
        src: 'src/**/*.css',
        dest: 'client/app/assets/css/styles.min.css' } },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015', 'react'] },
      jsx: {
        expand: true,
        cwd: 'src/',
        src: '**/*.jsx',
        dest: 'node_modules/app-transpiled/',
        ext: '.js' },
      js: {
        expand: true,
        cwd: 'src/',
        src: '**/*.js',
        dest: 'node_modules/app-transpiled/' } },
    browserify: {
      options: {
        sourceMap: true },
      files: {
        src: 'node_modules/app-transpiled/index.js',
        dest: 'client/app/index.js' } },
    watch: {
      jsx: {
        files: 'src/**/*.jsx',
        tasks: ['env:dev', 'transpile:jsx', 'browserify'] },
      js: {
        files: 'src/**/*.js',
        tasks: ['env:dev', 'browserify'] },
      css: {
        files: 'src/**/*.css',
        tasks: ['minify:css'] } } });

  grunt.registerTask('transpile', (target) => {
    const tasks = {
      jsx: ['babel:jsx'],
      js: ['babel:js'],
      all: ['babel:js', 'babel:jsx'] };

    grunt.task.run(tasks[target] || tasks.all);
  });

  grunt.registerTask('minify', (target) => {
    const tasks = {
      jsx: ['uglify'],
      css: ['cssmin'],
      all: ['uglify', 'cssmin'] };

    grunt.task.run(tasks[target] || tasks.all);
  });

  grunt.registerTask('make', (target) => {
    const tasks = {
      dev: ['env:dev', 'transpile:jsx', 'browserify', 'minify:css'],
      pro: ['env:pro', 'transpile:all', 'browserify', 'minify:all'] };

    grunt.task.run(tasks[target] || tasks.dev);
  });

  grunt.registerTask('test', (target) => {
    const tasks = {
      unit: ['mocha'],
      integration: [],
      converage: [],
      endToEnd: [],
      default: [] };

    grunt.task.run(tasks[target] || tasks.default);
  });
};

