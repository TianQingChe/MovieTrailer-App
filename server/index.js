const Koa = require('koa')
const app = new Koa()
const { htmlTemplate, ejsTemplate,pugTemplate } = require('./template')
// const ejs = require('ejs')
const pug = require('pug')

app.use(async (ctx, next) => {
	ctx.type = 'text/html; charset=utf-8'
	ctx.body = pug.render(pugTemplate, {
		you: 'Luke',
		me: 'Eric'
	})
})
app.listen(4455)