// const mongoose = require('mongoose');
// const{ObjectId} = mongoose.Schema;

// const roomShema = new mongoose.Schema({
//     title:{
//         type:String,
//         trim: true,
//         required: true,
//     },
//     description:{
//         type:String,
//         trim: true,
//         required: true,
//     },
//     condition:{
//         type:String,
//         required: true,
//         trim: true
//     },
//     rooms:{
//         type: Number
//     },
//     price:{
//         type: Number,
//         required: true
//     },
//     status:{
//         type:String,
//         default:"available"
//     },
//     photo:{
//         data: Buffer,
//         contentType: String
//     }
// },{timestamps: true});

// module.exports = mongoose.model("RoomTypes", roomShema);

const mongoose = require('mongoose');
const{ObjectId} = mongoose.Schema;

const venueSchema = new mongoose.Schema({
    venueName:{
        type:String,
        trim: true,
        required: true,
    },
    venueType:{
        type:String,
        trim: true,
        required: true,
    },
    venueDescription:{
        type:String,
        required: true,
        trim: true
    },
    venueLocation:{
        type: String
    },
    occupacy:{
        type: String,
        required: true
    },
    area:{
        type:String,
        required: true,
    },
    features:{
        type:String,
        required: true,
    },
    photo:{
        data: Buffer,
        contentType: String
    }
},{timestamps: true});

module.exports = mongoose.model("VenueTypes", venueSchema);