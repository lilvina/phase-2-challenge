const clients = require('./clients')
console.log("Finding clients in each City \"" + process.argv[2] + "\"...")

const searchByCity = function(str){
  const matchClients = clients.filter(function(client){
    return client.city.toUpperCase() === str.toUpperCase()
  })

  const clientContainer = []

  matchClients.forEach(function(client){
    const clientCompanyLocation = {}
    clientCompanyLocation.id = client.id
    clientCompanyLocation.rep_name = client.rep_name
    clientCompanyLocation.company = client.company
    clientCompanyLocation.city = client.city
    clientCompanyLocation.state = client.state
    clientContainer.push(clientCompanyLocation)
  })
  console.log(JSON.stringify(clientContainer, null, 2))
}

searchByCity(process.argv[2])

