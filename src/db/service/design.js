import Design from "../models/design";

export async function getDesignById(_id) {
    return await Design.find({ _id });
}

export async function getDesigns() {
    return await Design.find().sort({ createdAt: -1 }).populate('category', 'title');
}
export async function getDesignsByCollection({ category }) {
    return await Design.find({ category }).sort({ createdAt: -1 });
}

export async function createDesign(input) {
    return await Design.create(input)
}

export async function updateDesign(input) {
    return await Design.findOneAndUpdate({ _id: input._id }, input, { new: true })
}

export async function removeDesign(_id) {
    return await Design.findByIdAndDelete({ _id: _id })
}