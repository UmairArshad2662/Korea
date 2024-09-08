const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensure unique email for each merchant
    },
    password: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
});

const MerchantModel = mongoose.model('merchants', MerchantSchema);
module.exports = MerchantModel;
