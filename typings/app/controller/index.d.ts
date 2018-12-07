// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Home from '../../../app/controller/home';
import Redis from '../../../app/controller/redis';
import Upload from '../../../app/controller/upload';

declare module 'egg' {
  interface IController {
    home: Home;
    redis: Redis;
    upload: Upload;
  }
}
