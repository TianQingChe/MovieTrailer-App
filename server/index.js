const Koa = require('koa')
const views = require('koa-views')
const { resolve } = require('path')

const app = new Koa()

app.use(views(resolve(__dirname,'./views'), {
	extension: 'pug'//指定扩展名，只要是后缀名为pug的文件就会被识别成模板文件
}))

app.use(async (ctx, next) => {
	await ctx.render('index', {//index不用加后缀，因为上一段代码指定了模板extension
		you: 'Luke',
		me: 'Eric'
	})
})
app.listen(4455)