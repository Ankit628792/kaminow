import connectDB from "@/db/connectDB";
import { createCollection, getCollectionById, getCollectionByName, getCollections, removeCollection, updateCollection } from "@/db/service/collection";
import { getDesignsByCollection } from "@/db/service/design";
import { NextResponse } from "next/server";


export async function GET() {
    await connectDB();

    let collections = await getCollections();

    return NextResponse.json(collections)
}

export async function POST(request) {

    try {
        let data = await request.json();
        await connectDB();
        if (data.type == 'get') {
            let collection = await getCollectionById(data._id);
            if (collection) {
                let designs = await getDesignsByCollection({ category: collection._id })
                return NextResponse.json({ collection, designs })
            }
            else {
                throw "Collection not found"
            }
        }
        else {
            let res = await createCollection(data)
            return NextResponse.json(res)
        }

    } catch (error) {
        return NextResponse.error({ error })
    }
}
export async function PATCH(request) {

    try {
        let data = await request.json();

        await connectDB();
        let res = await updateCollection(data)
        return NextResponse.json(res)

    } catch (error) {
        return NextResponse.error({ error })
    }
}
export async function DELETE(request) {

    try {
        const url = new URL(request.url);
        const searchParams = new URLSearchParams(url.search);
        let id = searchParams.get('_id')

        if (id) {
            await connectDB();
            let res = await removeCollection(id)
            return NextResponse.json(res)
        }
        else {
            return NextResponse.error({ error: 'Invalid request' })
        }

    } catch (error) {
        return NextResponse.error({ error })
    }
}

