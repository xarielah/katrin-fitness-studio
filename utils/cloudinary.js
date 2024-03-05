import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function getMedia(mediaType, folderName) {
  let expressionString =
    (mediaType ? `resource_type:${mediaType}` : "") +
    (mediaType && folderName ? " AND " : "") +
    (folderName ? `folder=${folderName}` : "");

  try {
    const result = await cloudinary.search
      .expression(expressionString)
      .execute();

    // Modify the URL of each media object to use Cloudinary's auto quality and format
    if (mediaType === "image") {
      result.resources.forEach((mediaObj) => {
        mediaObj.url = cloudinary.url(mediaObj.public_id, {
          quality: "auto:low",
          fetch_format: "auto",
        });
      });
    }

    if (mediaType === "video") {
      result.resources.forEach((mediaObj) => {
        mediaObj.url = cloudinary.url(mediaObj.public_id, {
          resource_type: "video",
          transformation: [
            {
              quality: "auto:low",
              fetch_format: "auto:video",
              video_codec: "auto",
            },
          ],
        });
      });
    }

    return result.resources;
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return [];
  }
}
