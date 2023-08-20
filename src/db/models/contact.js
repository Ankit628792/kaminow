import mongoose from 'mongoose';

const userContact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Contact = mongoose.models.Contact || mongoose.model("Contact", userContact);

export default Contact;