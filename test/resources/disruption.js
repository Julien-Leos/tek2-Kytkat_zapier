/* globals describe it */
const should = require('should');

const zapier = require('zapier-platform-core');

// Use this to make test calls into your app:
const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('My App', () => {
  it('should run resources.disruption', done => {
    const bundle = { inputData: {
      name: 'tam'
    } };

    appTester(App.resources.disruption.list.operation.perform, bundle)
      .then(results => {
        console.log(results)
        should.exist(results);
        done();
      })
      .catch(done);
  });
});
