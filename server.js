var koa = require('koa'),
	app = koa(),
	logger = require('koa-logger'),
	route = require('koa-route'),
	staticDir = require('koa-static'),
	port = process.env.PORT || 3000,
	dns = require('dns');

app.use(logger());

app.use(staticDir('./'));

app.listen(port, function() {
	console.log("Koa server listening on port %s", port);
});
