import { Controller } from 'egg';

export default class UploadController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log('1233');
    const stream = await ctx.getFileStream();
    console.log(stream);
    ctx.body = {
      files: stream.filename,
    };
  }
}
