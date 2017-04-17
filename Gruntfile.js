module.exports = function(grunt) {
    require('load-grunt-tasks', 'move', 'grunt-contrib-copy')(grunt);
    var config = grunt.file.readYAML('Gruntconfig.yml');
    grunt.initConfig({
        responsive_images: {
            fix_project_pictures: {
                options: {

                    sizes: [{
                        width: 360,
                        height: 195,
                        quality: 60
                    }, {
                        name: 'small',
                        width: 293,
                        quality: 30
                    }, {
                        name: 'xsmall',
                        width: 170,
                        quality: 30
                    }]
                },
                files: [{
                    expand: true,
                    src: [config.projectImgSrc + '**.{jpg,gif,png}'],
                    cwd: '',
                    custom_dest: config.projectImgDir + '{%= width %}/'
                }]
            },
            fix_site_pictures: {
                options: {

                    sizes: [{
                        width: 1140,
                        quality: 60
                    }, {
                        name: 'small',
                        width: 570,
                        quality: 30
                    }, {
                        name: 'xsmall',
                        width: 360,
                        quality: 30
                    }]
                },
                files: [{
                    expand: true,
                    src: [config.siteImgSrc + '**.{jpg,gif,png}'],
                    cwd: '',
                    custom_dest: config.siteImgDir + '{%= width %}/'
                }]
            },
        }

    });

    grunt.registerTask('default', [
        'responsive_images',
    ]);
};