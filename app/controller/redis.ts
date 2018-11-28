import { Controller } from 'egg';

export default class RedisController extends Controller {
  public async index() {
    // await this.app.redis.set('foo', 'bar');
    await this.app.redis.get('one').set('foo', '1');
    await this.app.redis.get('two').hmset('hash', { name: 'zheng', deacription: 'hash set', number: 1 });
    this.ctx.body = await this.app.redis.get('two').hget('hash', 'deacription');
  }
  public async testPv() {
    await this.app.redis.get('one').incr('foo');
    this.ctx.body = { msg: 'ok' };
  }
}
