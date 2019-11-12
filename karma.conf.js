// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function(config) {
	config.set({
		basePath : '',
		frameworks : [ 'jasmine', '@angular-devkit/build-angular' ],
		plugins : [ 
			require('karma-jasmine'),
			require('karma-chrome-launcher'),
			require('karma-jasmine-html-reporter'),
			require('karma-coverage-istanbul-reporter'),
			require('@angular-devkit/build-angular/plugins/karma')	  
		],
		client : {
			clearContext: false
		} ,
		files : [ {
			pattern : './src/test.ts',
			watched : false
		} ],
		preprocessors : {
			'./src/test.ts' : [ '@angular-devkit/build-angular' ]
		},
		mime: {
			'text/x-typescript': ['ts','tsx']
		},
		coverageIstanbulReporter: {
			dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly', 'text-summary' ],
			fixWebpackSourcePaths: true
		},	  
		angularCli : {
			config : './angular-cli.json',
			environment : 'dev'
		},
		reporters: config.angularCli && config.angularCli.codeCoverage
		? ['progress', 'coverage-istanbul']
		: ['progress', 'kjhtml'],
		port : 9876,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : true,
		browsers : [ 'Chrome' ],
		singleRun : false,
		customLaunchers: {
		Chrome_ci: {
			base: 'Chrome',
			flags: [
				'--headless',
				'--disable-gpu',
				// Without a remote debugging port, Google Chrome exits immediately.
				'--remote-debugging-port=9222',
				// See https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
				'--no-sandbox'
			]
		}
		}

	});

	if (process.env.TRAVIS || process.env.CIRCLECI || process.env.GITLAB_CI ) {
		config.browsers = ['Chrome_ci'];
		config.singleRun = true;
	}

};
