module.exports = function(grunt){
  // Load all grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long grunt tasks take
  require('time-grunt')(grunt);

  // Config grunt
  grunt.initConfig({

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost', // Change this to '0.0.0.0' to access the server from outside.
        // keepalive: true // keep the server alive, so the grunt task won't stop.
        livereload: 35729 // This does not perform live reloading. This port is used by watch task to trigger a live reloading action.
      },
      all: {
        options: {
          open: true,
          base:['.']
        }
      }
    },

    // Watch files for changes, and run tasks base on the changed files.
    watch: {
      liverreload: {
        options: {
          livereload: '<%= connect.options.livereload %>' // this port must be same with the connect livereload port
        },
        // Watch whatever files you needed.
        files: [
          'assets/js/*.js',
          'assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          'styles/{,*/}*.css',
          './*.html'
        ]
      }
    }
  });

  // Creates the 'serve' task
  grunt.registerTask('serve', [
    'connect:all',
    'watch'
  ]);
};
