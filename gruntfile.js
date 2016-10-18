module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    // Add a 'global' opts object that we can access in each task...
    opts: {
      date: grunt.template.today('yyyymmddHMss')
    },
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      site: {
        files: ['_site/*'],
        options: {
          livereload: {
            host: 'localhost',
            port: 35729
          }
        }
      }
    },
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            name: 'large',
            width: 750,
            quality: 75,
            aspectRatio: true,
            gravity: 'Center'
          },{
            name: 'medium',
            width: 350,
            quality: 75,
            aspectRatio: true,
            gravity: 'Center'
          },{
            name: 'small',
            width: 250,
            quality: 75,
            aspectRatio: true,
            gravity: 'Center'
          }]
        },
        files: [{
          expand: true,
          src: ['images/portfolio/**.{JPG,jpg,gif,png,jpeg}'],
          cwd: '/home/adam/public_html/static.kcs/',
          dest: 'images/portfolio/resp'
        }]
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  // Task definition
  grunt.registerTask('cleancss', ['uncss']);

  // Get the critical path CSS
  grunt.registerTask('critical', ['penthouse']);


  // Watch _site folder for changes
  grunt.registerTask('init', ['watch']);

  grunt.registerTask('minify', ['htmlmin']);

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
