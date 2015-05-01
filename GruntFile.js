module.exports = function(grunt) {

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
