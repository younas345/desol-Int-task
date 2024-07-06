import CarModel from '../model/car/car_model.js';
import { carSchema } from '../validation/car_validation.js';


export const createCar = async (req, res) => {
    try {
        const { error, value } = carSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const imageUrls = req.files.map(file => `${req.protocol}://${req.get('host')}/uploads/${file.filename}`);

        const { model, price, phoneNumber,city } = value;
        const car = new CarModel({
            model,
            price,
            phoneNumber,
            images: imageUrls,
            city
            // userReference 
        });

        await car.save();

        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};