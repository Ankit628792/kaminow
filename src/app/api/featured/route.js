import connectDB from "@/db/connectDB";
import { createDesign, getDesigns, removeDesign, updateDesign } from "@/db/service/design";
import { createFeatured, getFeatureds, removeFeatured, updateFeatured } from "@/db/service/featured";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        await connectDB();

        let designs = await getFeatureds();

        return NextResponse.json(designs)

    } catch (error) {
        console.log(error)
        return NextResponse.error({ error })
    }
}

export async function POST(request) {

    try {
        let data = await request.json();

        await connectDB();
        let res = await createFeatured(data)
        return NextResponse.json(res)

    } catch (error) {
        return NextResponse.error({ error })
    }
}
export async function PATCH(request) {

    try {
        let data = await request.json();

        await connectDB();
        let res = await updateFeatured(data)
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
            let res = await removeFeatured(id)
            return NextResponse.json(res)
        }
        else {
            return NextResponse.error({ error: 'Invalid request' })
        }

    } catch (error) {
        return NextResponse.error({ error })
    }
}

