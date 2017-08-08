const {expect} = require('chai')
const {month,
  reverseSentence,
  nameProps,
  filterBetween} = require('./functions.js')

describe('month()', function(){
  it('should return a function', function(){
    expect(month).to.be.a('function')
  })
  it('should return the month of a given date', function(){
    let date = new Date(2017, 5, 19)
    expect(month(date)).to.equal("June")
  })
})

describe('reverseSentence()', function(){
  it('should return a function', function(){
    expect(reverseSentence).to.be.a('function')
  })
  it('should return a string with the words in reverse order', function(){
    expect(reverseSentence('Hello World')).to.equal('World Hello')
  })
})

describe('nameProps()', function(){
  it('should return a function', function(){
    expect(nameProps).to.be.a('function')
  })
  it('should return the name of the properties in an object', function(){
    let friend = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    expect(nameProps(friend)).to.eql(['age', 'name', 'phone'])
  })
})

describe('filterBetween()', function(){
  it('should return a function', function(){
    expect(filterBetween).to.be.a('function')
  })
  it('filter an array of words that fit alphabetically between two words', function(){
    let arr = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    expect(filterBetween(arr, 'deer', 'giraffe')).to.eql(['dog'])
  })
  // it('throws an error if an object is not passed through', function(){
  //   expect(filterBetween("An array")).to.throw("Pass in an array")
  // })
})