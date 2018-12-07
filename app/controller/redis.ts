import { Controller } from 'egg';

export default class RedisController extends Controller {
  public async index() {
    await this.app.redis
      .set('bar')
      .then(result => console.log(result, '0'))
      .catch(err => console.log(err, '9'));
    this.ctx.body = {
      msg: await this.app.redis
        .set('bar')
        .then(result => console.log(result, '0'))
        .catch(err => console.log(err, '9')),
    };
  }

  public callback<T>(err: any, result: T) {
    if (err) {
      throw err;
    }
    return result;
  }

  public async delRedis() {
    await this.app.redis.set('bar', 'foo');
    this.ctx.body = {
      msg: await this.app.redis.del('bar').then(result => {
        if (result === 1) {
          return true;
        }
        return false;
      }),
    };
  }
  public async ttlRedis() {
    this.ctx.body = {
      msg: await this.app.redis.ttl('zheng'),
    };
  }
  public async expireRedis() {
    await this.app.redis.set('zheng', 'bar');
    this.ctx.body = {
      msg: await this.app.redis.expire('zheng', 60 * 5).then(result => {
        return result + '1';
      }),
    };
  }
  public async setString() {
    this.ctx.body = {
      msg: await this.app.redis.set('zheng', 'fei').then(result => {
        let flag = false;
        if (result === 'OK') {
          flag = true;
        }
        return flag;
      }),
    };
  }

  public async setex() {
    this.ctx.body = {
      msg: await this.app.redis
        .set('zheng', 'hahha', 'EX', 1.2)
        .then(result => {
          return result;
        })
        .catch(err => console.log(err)),
    };
  }

  public async getString() {
    await this.app.redis.set('123:hong', '', 'EX', 300).then(result => console.log(result, '1'));
    this.ctx.body = {
      msg: await this.app.redis.get('zheng:hong').then(result => {
        console.log(result.length);
        return result;
      }),
    };
  }
  public async incr() {
    await this.app.redis.set('zheng:hong', 'sad', 'EX', 300).then(result => console.log(result, '1'));
    this.ctx.body = {
      msg: await this.app.redis.incr('zheng:hong').then(result => {
        return typeof result;
      }),
    };
  }
  public async subscribe() {
    // 订阅消息 chanel channel
    const a = await this.app.redis.subscribe('news', 'music').then(() => {
      this.app.redis.publish('news', 'zhenghongfei');
      this.app.redis.publish('music', 'liuzhehong');
    });
    console.log(a);
    await this.app.redis.on('message', (channel, message) => {
      return [channel, message];
    });
  }

  public async publish() {
    // await this.app.redis.get('client1').subscribe('news', 'music');
    await this.app.redis.get('client2').publish('news', 'hong', (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result, 'client2 news');
    });
    await this.app.redis.get('client2').publish('it', 'zheng', (err, result) => {
      if (err) {
        throw err;
      }
      console.log(result, 'client2 it');
    });
    // const a = this.app.redis.get('client1').on('message', (channel, message) => {
    //   return [channel, message];
    // });
    // console.log(a);
    await this.app.redis.get('client2').set('zheng', 'bar');
    this.ctx.body = {
      msg: 'ok',
    };
  }

  public async testPv() {
    // await this.app.redis.get('one').incr('foo');
    this.ctx.logger.info(new Error('hah'));
    this.app.getLogger('commonLogger').info(new Error('zheng'));
    throw new Error('zheng');
    // this.ctx.body = { msg: 'ok' };
  }
}
