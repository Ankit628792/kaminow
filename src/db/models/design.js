import mongoose from 'mongoose';

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
}, { timestamps: true })

const Design = mongoose.models.Design || mongoose.model("Design", design);

export default Design;