// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
const sass = require('node-sass');

module.exports = function (grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    // configure jshint to validate js files -----------------------------------
    // jshint: {
    //   options: {
    //     reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
    // },

    // when this task is run, lint the Gruntfile and all js files in src
    // build: ['Gruntfile.js', 'src/**/*.js']
    // },


    // // configure uglify to minify js files -------------------------------------
    // uglify: {
    //   options: {
    //     banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    //   },
    //   build: {
    //     files: {
    //       'dist/js/magic.min.js': 'src/js/magic.js'
    //     }
    //   }
    // },


    // // compile less stylesheets to css -----------------------------------------
    // less: {
    //   build: {
    //     files: {
    //       'dist/css/pretty.css': 'src/css/pretty.less'
    //     }
    //   }
    // },

    // // configure cssmin to minify css files ------------------------------------
    // cssmin: {
    //   options: {
    //     banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
    //   },
    //   build: {
    //     files: {
    //       'dist/css/style.min.css': 'src/css/style.css'
    //     }
    //   }
    // },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dest: {
        files: {
          // 'dest/css/anasayfa.css': 'src/css/anasayfa.scss',
          // 'dest/css/blog-liste.css': 'src/css/blog-liste.scss',
          // 'dest/css/blog-detay.css': 'src/css/blog-detay.scss',
          // 'dest/css/hizmetler-detay.css': 'src/css/hizmetler-detay.scss',
          // 'dest/css/hizmetler.css': 'src/css/hizmetler.scss',
          // 'dest/css/iletisim.css': 'src/css/iletisim.scss',
          // 'dest/css/isler.css': 'src/css/isler.scss',
          // 'dest/css/proje-detay.css': 'src/css/proje-detay.scss',
          // 'dest/css/referans.css': 'src/css/referans.scss',
          'dest/css/main.css': 'src/css/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        // We need to `freeze` browsers versions for testing purposes.
        browsers: ['opera 12', 'ff 15', 'chrome 25']
      },

      dist: {
        files: {
          // 'dest/css/anasayfa.css': 'dest/css/anasayfa.css',
          // 'dest/css/blog-liste.css': 'dest/css/blog-liste.css',
          // 'dest/css/blog-detay.css': 'dest/css/blog-detay.css',
          // 'dest/css/hizmetler-detay.css': 'dest/css/hizmetler-detay.css',
          // 'dest/css/hizmetler.css': 'dest/css/hizmetler.css',
          // 'dest/css/iletisim.css': 'dest/css/iletisim.css',
          // 'dest/css/isler.css': 'dest/css/isler.css',
          // 'dest/css/proje-detay.css': 'dest/css/proje-detay.css',
          // 'dest/css/referans.css': 'dest/css/referans.css',
          'dest/css/main.css': 'dest/css/main.css'
        }
      }
    },

    // configure watch to auto update ----------------
    watch: {
      // for stylesheets, watch css and less files 
      // only run less and cssmin stylesheets: 
      stylesheets: {
        files: ['src/**/*.css', 'src/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      },

      // // for scripts, run jshint and uglify 
      // js: { 
      //   files: ['src/**/*.js'], 
      //   tasks: ['jshint', 'uglify'],
      // },

    }

  });


  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  // grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less', 'sass']);
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-less');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

}