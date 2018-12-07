import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/redis', controller.redis.index);
  router.get('/pv', controller.redis.testPv);
  //测试redis的使用
  router.get('/redis/del', controller.redis.delRedis);
  router.get('/redis/ttl', controller.redis.ttlRedis);
  router.get('/redis/expire', controller.redis.expireRedis);
  router.get('/redis/setString', controller.redis.setString);
  router.get('/redis/setex', controller.redis.setex);
  router.get('/redis/getString', controller.redis.getString);
  router.get('/redis/incr', controller.redis.incr);
  router.get('/redis/subscribe', controller.redis.subscribe);
  router.get('/redis/publish', controller.redis.publish);
  // 测试文件上传
  router.post('/formData', controller.upload.index);
};
