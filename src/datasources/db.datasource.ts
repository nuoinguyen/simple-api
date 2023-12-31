// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'mongodb',
  url: '',
  host: '127.0.0.1',
  port: 27017,
  user: '',
  password: '',
  database: 'simple_api',
  useNewUrlParser: true,
};

export class DbDataSource extends juggler.DataSource {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
