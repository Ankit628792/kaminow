import mongoose, { Schema } from 'mongoose';

const design = new mongoose.Schema({
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
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    }
}, { timestamps: true })

const Featured = mongoose.models.Featured || mongoose.model("Featured", design);

export default Featured;