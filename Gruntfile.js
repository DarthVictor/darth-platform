module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        ts: {
          default : {
            options: {
                  module: 'commonjs',
                  fast: 'watch'
            },
            files: [{ src: ['src/ts/*.ts'], dest: 'build/_typescript.js' }],

            watch: ['src/ts']
          }
        },
        bower_concat: {
            all: {
                dest: 'build/_bower.js',  // ��������� ����
                exclude: [  // ������, ������� ����� ��������� �� ������
                  'modernizr'  // ���� ���������� ������� � ����� ��������; Modernizr ����� ���������� � <head>
                ]
            }
        },
        concat: {
            main: {
                src: [
                    'build/_bower.js', // ����������� ���������� �� ����������� Bower
                    'build/_typescript.js',  // ���������������� typescript
                    'src/js/*.js'  // JS-������� �����
                ],
                dest: 'build/scripts.js'
            }
        },
        watch: {
          concat: {
              files: '<%= concat.main.src %>',
              tasks: ['bower_concat', 'concat']
          }
        }
    });
    grunt.registerTask('default', ['ts', 'bower_concat', 'concat', 'watch']);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');

};
