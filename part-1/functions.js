const month = function(date){
  if(typeof date !== "object"){
    throw new Error("Pass a date object")
  }
  const months = [
  "January", "Feburary", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"
  ]

  let final = date.getMonth()
  return months[final]
}

const reverseSentence = function(string){
  if(typeof string === 'string'){
    return string.split(' ').reverse().join(' ')
  } else {
    throw new Error('Pass a string please')
  }
}

const nameProps = function(object){
  if(typeof object !== "object"){
    throw new Error("Pass an object")
  }
  return Object.keys(object).sort()
}

const filterBetween = function(arr, min, max){
  if(typeof(min) === 'string' && typeof(max) === 'string'){
    return arr.filter(function(word){
      return word > min && word < max
    })
  } else {
    throw new Error("Pass an array")
  }
}

module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween}