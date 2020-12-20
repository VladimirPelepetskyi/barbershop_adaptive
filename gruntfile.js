module.exports = function (grunt) {

	require("load-grunt-tasks")(grunt);
	require('time-grunt')(grunt);


	grunt.initConfig({
		less: {
			style: {
				files: {
					'css/style.css': 'less/style.less'
				}
			}
		},
		postcss: {
			style: {
				options: {
					processors: [
						require('autoprefixer')()
					]
				},
				src: "css/*.css"

			}
		},
		csso: {
			style: {
				options: {
					report: "gzip"
				},
				files: {
					"css/style.min.css": ["css/style.css"],
					"css/normalize.min.css": ["css/normalize.css"]
				}
			}
		},
		imagemin: {
			images: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{
						removeViewBox: false
					}],
					progressive: true
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg,svg}"]
				}]
			}
		},
		cwebp: {
			images: {
				options: {
					q: 90
				},
				files: [{
					expand: true,
					src: ["img/**/*.{png,jpg}"]
				}]
			}
		},
		browserSync: {
			server: {
				bsFiles: {
					src: ["*.html", "css/*.css"]
				},
				options: {
					server: ".",
					watchTask: true,
					notify: false,
					open: true,
					cors: true,
					ui: false
				}
			}
		},
		watch: {
			style: {
				files: ["less/**/*.less"],
				tasks: ["less", "postcss", "csso"]
			}
		}
	});

	grunt.registerTask("serve", ["browserSync", "watch"]);

	grunt.registerTask("build", [
		"less",
		"postcss",
		"csso"
	]);
};
