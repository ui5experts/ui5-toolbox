// Karma configuration
// Generated on Thu Jun 23 2016 14:05:57 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit', 'openui5'],

    plugins: [
      'karma-qunit',
      'karma-openui5',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ],


    openui5: {
      path: 'https://openui5.hana.ondemand.com/resources/sap-ui-core.js',
      useMockServer: false
    },

    client: {
      openui5: {
        config: {
          theme: 'sap_bluecrystal',
          resourceRoots: {
            'ui5experts.toolbox': '/base/src',
            'ui5experts.toolbox.test.unit': '/base/test/unit'
          }
        }
//        mockserver: {
//          config: {
//            autoRespond: true
//          },
//          rootUri: '/my/service/',
//          metadataURL: '/base/test/mock.xml',
//          mockdataSettings: {
//
//          }
//        }
      }
    },


    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'src/**/*.js',
        watched: true,
        included: false,
        served: true
      },
      {
        pattern: 'test/unit/**/*.js',
        watched: true,
        included: true,
        served: true
      }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
