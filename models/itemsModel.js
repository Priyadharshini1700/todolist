const mongoose = require("mongoose");


const itemSchema = new mongoose.Schema(
    {
        name:String
    },
    {timeStamps:true}
)



module.exports= mongoose.model("Item", itemSchema)







