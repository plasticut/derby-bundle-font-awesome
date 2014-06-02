derby-bundle-font-awesome
=========================
Application
```javascript
var options = {
    styles: 'less' // 'less' or 'scss' or 'css' - default
};
app.serverUse(module, require('derby-static'));
app.use(require('derby-bundle-font-awesome'), options);
```
Server:
```javascript
...
expressApp.use(app.static(options));
...
```
or
```javascript
var server = require('derby-starter');
var app = require('./app');
server.run(app, { 'static': app.getStaticRoutes() });
```

Bower and derby-static is requried.