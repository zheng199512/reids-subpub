import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

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

  config.redis = {
    clients: {
      one: { port: 6380, host: '94.191.5.88', password: 'zheng', db: 0 },
      two: { port: 6381, host: '94.191.5.88', password: null, db: 1 },
    },
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
