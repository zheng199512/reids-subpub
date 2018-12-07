import 'egg';
import { Application } from 'egg';
import * as redis from 'redis';

declare module 'egg' {
  interface Application {
    redis: redis;
  }
}
