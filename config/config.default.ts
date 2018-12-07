import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';
export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543397393747_4107';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  config.logger = {
    appLogName: `${appInfo.name}.log`,
    coreLogName: 'webrail.log',
    agentLogName: 'agent.log',
    errorLogName: 'error.log',
    encoding: 'utf-8',
    level: 'INFO',
    consoleLevel: 'INFO',
    disableConsoleAfterReady: true,
  };

  config.customLogger = {
    commonLogger: {
      file: path.join(appInfo.root, 'logs', 'zheng.log'),
      formatter: message => {
        return `### ${JSON.stringify(message)}`;
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.redis = {
    clients: {
      client1: {
        cluster: true,
        nodes: [
          {
            host: '94.191.5.88',
            port: '7001',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7002',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7003',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7004',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7005',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7006',
            family: 'user',
            password: null,
            db: 'db0',
          },
        ],
      },
      client2: {
        cluster: true,
        nodes: [
          {
            host: '94.191.5.88',
            port: '7001',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7002',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7003',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7004',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7005',
            family: 'user',
            password: null,
            db: 'db0',
          },
          {
            host: '94.191.5.88',
            port: '7006',
            family: 'user',
            password: null,
            db: 'db0',
          },
        ],
      },
    },
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
