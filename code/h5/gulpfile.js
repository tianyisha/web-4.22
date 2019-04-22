const gulp = require('gulp');
const server = require('gulp-webserver');
gulp.task('webserver', () => {
    return gulp.src('./src/')
        .pipe(server({
            port: 8087,
            open: true,
            livereload: true,
            proxies: [{
                    "source": "/api/addpay",
                    "target": "http://localhost:3000/api/addpay"
                },
                {
                    "source": "/api/addincome",
                    "target": "http://localhost:3000/api/addincome"
                }, {
                    "source": "/api/getpay",
                    "target": "http://localhost:3000/api/getpay"
                },
                {
                    "source": "/api/getincome",
                    "target": "http://localhost:3000/api/getincome"
                }
            ]
        }))
})