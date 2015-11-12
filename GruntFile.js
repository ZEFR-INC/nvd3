module.exports = function(grunt) {
    var _pkg = grunt.file.readJSON('package.json');

  //Project configuration.
  grunt.initConfig({
    uglify: {
      js: {
        files: {
          'build/nv.d3.min.js': ['build/nv.d3.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);
};
