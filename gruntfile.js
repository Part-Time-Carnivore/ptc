module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass task
		 */
		sass: {
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'style-expanded.css': 'sass/style.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'style.css': 'sass/style.scss'
				}
			}
		},

		/**
		 * Autoprefixer task
		 */
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			// prefix all files
			multiple_files: {
				expanded: true,
				flatten: true,
				src: '*.css',
				dest: ''
			}
		},

		/**
		 * Watch task
		 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['sass', 'autoprefixer', 'watch']);

}
