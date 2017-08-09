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
  it('should throw an error if the date is not passed through', function(){
    expect(month).to.throw(Error)
  })
})

describe('reverseSentence()', function(){
  it('should return a function', function(){
    expect(reverseSentence).to.be.a('function')
  })
  it('should return a string with the words in reverse order', function(){
    expect(reverseSentence('Hello World')).to.equal('World Hello')
  })
  it('should throw an error if the string is not passed through', function(){
    expect(reverseSentence).to.throw(Error)
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
  it('should throw an error if an object is not passed through', function(){
    expect(nameProps).to.throw(Error)
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
  it('throws an error if an object is not passed through', function(){
    expect(filterBetween).to.throw(Error)
  })
})