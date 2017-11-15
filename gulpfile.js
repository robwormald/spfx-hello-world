'use strict';

const gulp = require('gulp');
const path = require('path');
const build = require('@microsoft/sp-build-web');
const merge = require('webpack-merge');
const {AngularCompilerPlugin} = require('@ngtools/webpack');

build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    Object.assign(generatedConfiguration.resolve, {extensions: ['.ts', '.js']});
    generatedConfiguration.module.rules = [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      {
        test: /\.scss$/,
        use: ['raw-loader', 'sass-loader']
      },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
    generatedConfiguration.plugins.push(new AngularCompilerPlugin({
      tsConfigPath: path.resolve('./tsconfig.json'),
      entryModule: path.resolve('src/webparts/ngHelloWorld/app/hello-world') + '#HelloWorldModule'
    }))
    return generatedConfiguration;
  }
});

build.typescript.enabled = false;
build.typescript.enabled = false;

build.initialize(gulp);
