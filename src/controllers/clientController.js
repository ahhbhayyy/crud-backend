// controllers/clientController.js
import * as clientService from '../services/clientServices.js'; // corrected path and import [attached_file:1]

export const getClients = async (req, res) => { // added proper async signature [attached_file:1]
  try {
    const clients = await clientService.getClients(); // await service call [attached_file:1]
    res.status(200).json(clients); // send data directly [attached_file:1]
  } catch (err) {
    console.error('Error fetching clients:', err); // clearer logging [attached_file:1]
    res.status(500).json({ message: 'Internal Server Error' }); // consistent error shape [attached_file:1]
  }
};


export const createClient = async(req,res)=>{
  try {
    const clientData=req.body;
    const newClient=await clientService.createClient(clientData);
    res.status(200).json(newClient);
  } catch (err) {
    console.error('error adding client',err);
    res.status(500).json({message:'Internal Server Error'});
  }
};


export const updateClient = async(req,res)=>{
  try {
    const clientId=req.params.id;
    const clientData=req.body;
    const updatedClient=await clientService.updateClient(clientData,clientId);
    if(!updatedClient){
      return res.status(404).json({message:'Client not found'})
    }
    res.status(200).json(updatedClient);
  } catch (err) {
    console.error('error updating clients',err);
    res.status(500).json({message:'Internal Server Error'});
  }
};


export const deleteClient = async(req,res)=>{
  try {
    const clientId=req.params.id;
    const deletedClient=await clientService.deleteClient(clientId);
    if(!deletedClient){
      return res.status(404).json({message:'Client not found'})
    }
    res.status(200).send();
  } catch (err) {
    console.error('error deleting clients',err);
    res.status(500).json({message:'Internal Server Error'});
  }
};


export const searchClient = async(req,res)=>{
  try {
    const searchTerm=req.params.q;
    const searchedClient=await clientService.searchClient(searchTerm);
   res.status(200).json(searchedClient);
  } catch (err) {
    console.error('error searching clients',err);
    res.status(500).json({message:'Internal Server Error'});
  }
};