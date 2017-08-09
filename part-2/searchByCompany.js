const clients = require('./clients')
console.log("Finding clients in each Company \"" + process.argv[2] + "\"...")

const searchByCompany = function(str){
  const regex = new RegExp(str.toUpperCase())

  const matchClients = clients.filter(function(client){
    return regex.test(client.company.toUpperCase())
  })

  const clientContainer = []

  matchClients.forEach(function(client){
    const clientCompany = {}
    clientCompany.id = client.id
    clientCompany.company = client.company
    clientCompany.phone = client.phone
    clientContainer.push(clientCompany)
  })

  console.log(JSON.stringify(clientContainer, null, 2))
}

searchByCompany(process.argv[2])