import Featured from "../models/featured";

export async function getFeaturedById(_id) {
    return await Featured.find({ _id });
}

export async function getFeatureds() {
    return await Featured.find().sort({ createdAt: -1 }).populate('category', 'title');
}

export async function createFeatured(input) {
    return await Featured.create(input)
}

export async function updateFeatured(input) {
    return await Featured.findOneAndUpdate({ _id: input._id }, input, { new: true })
}

export async function removeFeatured(_id) {
    return await Featured.findByIdAndDelete({ _id: _id })
}