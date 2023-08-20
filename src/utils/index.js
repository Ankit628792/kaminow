

export const uploadImage = async (image) => {
    let data = new FormData();
    data.append("file", image)
    data.append("upload_preset", `${process.env.preset_name}`)
    data.append("cloud_name", `${process.env.cloud_name}`)
    const resp = await fetch(`https://api.cloudinary.com/v1_1/${process.env.cloud_name}/image/upload`, {
        method: "post",
        body: data
    })
    let res = await resp.json();
    if (res.secure_url)
        console.log("Image Uploaded successfully", { id: 'success' })
    else
        console.log("Unable to Upload Image", { id: 'error' })
    return res.secure_url
}