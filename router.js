import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'hello Koa2! 1'
  });
});
router.get('/str', async (ctx, next) => {
  await ctx.render('string', {
    title: 'hello Koa2! str'
  });
});

export default router;
