import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/redis', controller.redis.index);
  router.get('/pv', controller.redis.testPv);
};
