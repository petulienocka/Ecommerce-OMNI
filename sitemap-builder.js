require('babel-register');

const router = require('./src/helpers/router').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router).build('http://theomnified.com').save('./sitemap.xml');
