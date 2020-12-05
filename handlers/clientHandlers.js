const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');

// write your handlers here...


const getClients = (req, res) =>{
        res.status(200).json({
            status: 200,
            data: clients
        })
    
}

const getClientWithID = (req, res) =>{

    const idClient = req.params.id;

    const client = clients.filter(clientID => (clientID.id == idClient));


    if(client.length == 0){

        res.status(404).json({
            status: 404,
            message: "Client with given ID not found"
        })
    }else{

        res.status(200).json({
            status: 200,
            data: client
        })
    }
}


const addNewClient = (req, res) =>{

    const newClient = {
        id: uuidv4(),
        isActive: req.body.isActive,
        age: req.body.age,
        name: req.body.name,
        gender: req.body.gender,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address

    }

    const clientInBase = clients.filter(client => (client.email === newClient.email));
    
    
    if (clientInBase.length === 0){
        clients.push(newClient);
        //res.send(newClient);
        res.status(200).json({
            status: 200,
            data: newClient
        })
    } else{
        res.status(404).json({
            status: 404,
            message: "The client with the given email exist in the database"
        })  
    }

}

const deleteClient = (req, res)=>{
    const client = clients.find( c => c.id === (req.params.id))

    if(!client) {
        res.status(404).json({
            status: 404,
            message: "The client with the given ID does't exist in the database"
        }) 
    } else{
        const index = clients.indexOf(client);
        clients.splice(index, 1);

        res.status(200).json({
            status: 200,
            data: client
        })
    }

}


module.exports= { getClients, getClientWithID, addNewClient, deleteClient }