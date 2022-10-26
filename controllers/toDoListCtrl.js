const Item = require('../models/itemsModel')


const todolistCtrl = {
    getItem: async (req, res) =>{
        try{
            const items = await Item.find()
            res.send(items)
                }
                catch(err){
                    res.status(500).send(err)
                }
    },
    createItem: async (req, res)=>{
        try{
           const {name} = req.body
           const newItem = new Item({name})
           await newItem.save()
           res.send("Successfully added a  item")
        }
        catch(err){
            res.status(500).send(err)
        }
    },
    deleteItem:async (req, res)=>{
    try{
        await Item.findByIdAndDelete(req.params.id)
        res.send("deleted an item")
    }
    catch(err){
        res.status(500).send(err)

    }
    },
    updateItem: async (req, res)=>{
        try{
            const {name} = req.body;
            await Item.findByIdAndUpdate({_id:req.params.id}, {name})
            res.send('successfully updated an item')

        }
        catch(err){
            res.status(500).send(err)
        }
    }
}


module.exports = todolistCtrl;