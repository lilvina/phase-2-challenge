const month = function(date){
  if(typeof date !== "object"){
    throw new Error("Pass a date object")
  }
  const months = [
  "January", "Feburary", "March", "April",
  "May", "June", "July", "August", "September",
  "October", "November", "December"
  ]

  let month = date.getMonth()
  return months[month]
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
  if(!Array.isArray(arr)){
    throw new Error("Pass in an array")
  }
  return arr.filter(function(word){
    return word > min && word < max
  })
}

module.exports = {
  month,
  reverseSentence,
  nameProps,
  filterBetween
}