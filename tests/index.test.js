var expect = require('chai').expect
var proxyquire = require('proxyquire');

describe('makeLicense', function () {
  var makeLicense; 
  var result;
  var stub = {
    'inquirer' :{
      prompt: function() {
        return new Promise(function(resolve, reject) {
          
          return resolve({years: 'foo',name: 'bar'});
        });
      },
     
    },
    './print': function(license) {} 
  };
  it('should raise error when no match for license', function (done) {
    var args = {license: 'blahblahblah'};
    makeLicense = proxyquire('../dist/make-license.js', stub).default
    expect(makeLicense.bind(makeLicense,args)).to.throw(Error);
    done();
  });

  it('should exist', function (done) {
    expect(makeLicense).to.exist;
    done();
  });
  const tests = [
    {
      license: "MIT",
      text: 'Permission is hereby granted, free of charge, to any person obtaining a copy'
    },
    {
      license: "ISC",
      text: 'Permission to use, copy, modify, and/or distribute this software for any'
    },
    {
      license: "BSD 2",
      text: 'Redistribution and use in source and binary forms, with or without'
    },
    {
      license: "BSD 3",
      text: 'this software without specific prior written permission.'
    },
    {
      license: "Apache 2.0",
      text: 'Licensed under the Apache License'
    },
    {
      license: "GPL-3.0",
      text: 'GNU GENERAL PUBLIC LICENSE'
    },
  ].forEach(function(test) {
    it('should print license when given license name: ' + test.license, function(done) {
      var args = {license: test.license};
      stub['./print'] = function(license) {
        expect(license).to.contain(test.text)
        done();
      }
      makeLicense = proxyquire('../dist/make-license.js', stub).default
      expect(makeLicense.bind(makeLicense, args)).not.to.throw(Error);
    })
  })
  
});
