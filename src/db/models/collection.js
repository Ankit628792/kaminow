import mongoose from 'mongoose';

const collection = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Collection = mongoose.models.Collection || mongoose.model("Collection", collection);

export default Collection;