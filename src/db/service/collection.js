import Collection from "../models/collection";

export async function getCollectionById(_id) {
    return await Collection.find({ _id });
}
export async function getCollectionByName(title) {
    return await Collection.find({ title });
}

export async function getCollections() {
    return await Collection.find().sort({ createdAt: -1 });
}

export async function createCollection(input) {
    return await Collection.create(input)
}

export async function updateCollection(input) {
    return await Collection.findOneAndUpdate({ _id: input._id }, input, { new: true })
}

export async function removeCollection(_id) {
    return await Collection.findByIdAndDelete({ _id: _id })
}