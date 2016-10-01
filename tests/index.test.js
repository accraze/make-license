var expect = require('chai').expect
var makeLicense = require('../dist/make-license.js')

describe('makeLicense', function () {
  it('should raise error when no match for license', function (done) {
    var args = {license: 'blahblahblah'};
    expect(makeLicense.bind(makeLicense,args)).to.throw(Error);
    done();
  });
  it('should exist', function (done) {
    expect(makeLicense).to.exist;
    done();
  });

});
