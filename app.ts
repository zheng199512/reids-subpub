import { Application } from 'egg';

module.exports = (app: Application) => {
  app.beforeStart(async () => {
    if (app.config.redis.app) {
      await app.redis
        .get('client1')
        .subscribe('news', 'it', (err, result) => {
          if (err) {
            throw err;
          }
          console.log(result, 'psubscribe');
        })
        .then(result => result);

      app.redis.get('client1').on('message', (channel, message) => {
        console.log(message, channel);
        // console.log(message, 'music');
      });
    }
  });
};
