const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe('e2e search', () => {
  const show = true;
  it('should display google results', function(done) {
    this.timeout('15s')
    const nightmare = Nightmare({ show })
    nightmare
      .goto('http://localhost:4000')
      .type('#query', 'synack')
      .click('#submit')
      .wait('.Result')
      .evaluate(() => Array.from(document.querySelectorAll('.Result')).length)
      .end()
      .then(length => {
        expect(length).to.equal(10)
        done()
      })
  });

  it('should display bing results', function(done) {
    this.timeout('15s')
    const nightmare = Nightmare({ show })
    nightmare
      .goto('http://localhost:4000')
      .select('#engine', 'bing')
      .type('#query', 'synack')
      .click('#submit')
      .wait('.Result')
      .evaluate(() => Array.from(document.querySelectorAll('.Result')).length)
      .end()
      .then(length => {
        expect(length).to.equal(10)
        done()
      })
  })

  it('should display both results', function(done) {
    this.timeout('15s')
    const nightmare = Nightmare({ show })
    nightmare
      .goto('http://localhost:4000')
      .select('#engine', 'both')
      .type('#query', 'synack')
      .click('#submit')
      .wait('.Result')
      .evaluate(() => Array.from(document.querySelectorAll('.Result')).length)
      .end()
      .then(length => {
        expect(length).to.equal(20)
        done()
      })
  })
})