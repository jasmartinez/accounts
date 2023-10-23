import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
   const { watchOptions } = config || {};
   config.watchOptions = {
     ...watchOptions,
     ignored: [
      '**/node_modules',
      '**/.git'
    ]
   };

  return config;
};