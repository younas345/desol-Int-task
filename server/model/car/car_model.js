import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    images: {
        type: [String], 
        required: true,
    },
    userReference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
});

const Car = mongoose.model('Car', carSchema);

export default Car;
