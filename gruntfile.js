"use strict";

module.exports = function (grunt) {
	//	grunt.loadNpmTasks("grunt-contrib-less");
	//	grunt.loadNpmTasks("grunt-browser-sync");
	//	grunt.loadNpmTasks("grunt-contrib-watch");
	//	grunt.loadNpmTasks("grunt-postcss");

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files: {
					"css/style.css": "less/style.less"
				}
			}
		},

		//		postcss: {
		//			style: {
		//				options: {
		//					processors: [
		//						require("autoprefixer")()
		//					]
		//				},
		//				src: "css/*.css"
		//			}
		//		},

		watch: {
			style: {
				files: ["less/**/*.less"],
				tasks: ["less"]
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
	});

	grunt.registerTask("serve", ["browserSync", "watch"]);
};
