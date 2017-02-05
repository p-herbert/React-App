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
    concat: {
      css: {
        src: 'src/**/*.css',
        dest: 'client/app/assets/css/styles.concat.css' } },
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
      files: {
        expand: true,
        cwd: 'src/',
        src: '**/*.jsx',
        dest: 'client/app/',
        ext: '.js' } },
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

  grunt.registerTask('compile', ['babel', 'browserify']);

  grunt.registerTask('minify', (target) => {
    const tasks = {
      react: ['compile', 'uglify'],
      css: ['concat:css', 'cssmin'] };

    grunt.task.run(tasks[target]);
  });

  grunt.registerTask('make', (target) => {
    const tasks = {
      dev: ['env:dev', 'compile', 'minify:css'],
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

