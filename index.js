module.exports = function(app, options) {
    var styleMap = {
        'css': 'css/font-awesome.css',
        'less': 'less/font-awesome.less',
        'scss': 'scss/font-awesome.scss'
    };
    app.loadStyles(__dirname + '/bower_components/font-awesome/' + styleMap[options && options.styles || 'css']);

    var derby = require('derby');
    var bundle = derby.util.serverRequire(module, './bundle-font-awesome');
    if (bundle) { bundle(app, options); }
};