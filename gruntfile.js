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
        expand: true,
        cwd: 'client/app/',
        src: '**/*.js',
        dest: 'client/app/',
        ext: '.min.js' } },
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
        dest: 'client/app/',
        ext: '.js' },
      js: {
        expand: true,
        cwd: 'node_modules/app/',
        src: '**/*.js',
        dest: 'node_modules/app-transpiled/' } },
    browserify: {
      options: {
        sourceMap: true },
      files: {
        expand: true,
        cwd: 'client/app/',
        src: ['**/*.js', '!**/*.min.js'],
        dest: 'client/app/' } },
    watch: {
      react: {
        files: 'src/**/*.jsx',
        tasks: ['env:dev', 'compile'] },
      js: {
        files: 'src/**/*.js',
        tasks: ['env:dev', 'compile'] },
      css: {
        files: 'src/**/*.css',
        tasks: ['minify:css'] } } });

  grunt.registerTask('compile', (target) => {
    const tasks = {
      react: ['babel:jsx', 'browserify'],
      all: ['babel:js', 'babel:jsx', 'browserify'] };

    grunt.task.run(tasks[target]);
  });

  grunt.registerTask('minify', (target) => {
    const tasks = {
      react: ['compile:all', 'uglify'],
      css: ['cssmin'] };

    grunt.task.run(tasks[target]);
  });

  grunt.registerTask('make', (target) => {
    const tasks = {
      dev: ['env:dev', 'compile:react', 'minify:css'],
      pro: ['env:pro', 'minify:react', 'minify:css'] };

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

