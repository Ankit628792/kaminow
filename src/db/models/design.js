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
    star: {
        type: Boolean,
        default: false
    },
    tag: {
        type: Boolean,
        default: false
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Collection'
    }
}, { timestamps: true })

const Design = mongoose.models.Design || mongoose.model("Design", design);

export default Design;