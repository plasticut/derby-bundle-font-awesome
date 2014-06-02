module.exports = function(app, options) {
    if (app.loadStatic) { app.loadStatic({ route: '/fonts',  dir: __dirname + '/bower_components/font-awesome/fonts' }); }
};