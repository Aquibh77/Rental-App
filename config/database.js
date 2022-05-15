const mongoose = require('mongoose');

const { Schema, model } = mongoose

mongoose.connect('mongodb+srv://aquibelectrical:Shockingeee@cluster0.atlrn.mongodb.net/');

const productSchema = new Schema({
    id : String,
    name: String,
    duration: String,
    cost: String,
    imageUrl: String,
    category: String
});

const purchaseSchema = new Schema({
    id : String,
    productId: String,
    quantity: Number,
    from : String,
    to: String,
});

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

const productModel = model('Product', productSchema);
const purchaseModel = model('Order', purchaseSchema);
const userModel = model('User', userSchema);

module.exports = {
    productModel,
    productSchema,
    purchaseModel,
    purchaseSchema,
    userModel,
    userSchema,
    mongoose
}