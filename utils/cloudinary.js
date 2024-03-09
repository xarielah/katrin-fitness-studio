import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * @param {*} mediaType - "image" or "video"
 * @param {*} folderName - the name of the folder in Cloudinary
 * @param {*} width - the width of the image - default is 500
 * @param {*} publicId - the public ID of the media - optional
 * @returns
 */

export default async function fetchCloudinaryResources(
  mediaType,
  folderName,
  width = 500,
  publicId,
) {
  let expressionString =
    (mediaType ? `resource_type:${mediaType}` : "") +
    (mediaType && folderName ? " AND " : "") +
    (mediaType && folderName ? `folder=${folderName}` : "") +
    (mediaType && folderName && publicId ? " AND " : "") +
    (mediaType && folderName && publicId ? `public_id=${publicId}` : "");

  try {
    const result = await cloudinary.search
      .expression(expressionString)
      .sort_by("public_id", "asc")
      .execute();

    // Modify the URL of each media object to use Cloudinary's auto quality and format
    if (mediaType === "image") {
      result.resources.forEach((mediaObj) => {
        mediaObj.url = cloudinary.url(mediaObj.public_id, {
          transformation: [
            {
              quality: "auto",
              fetch_format: "auto",
              crop: "scale",
              width,
            },
          ],
        });
      });
    }

    if (mediaType === "video") {
      result.resources.forEach((mediaObj) => {
        mediaObj.url = cloudinary.url(mediaObj.public_id, {
          resource_type: "video",
          transformation: [
            {
              quality: "auto",
              fetch_format: "auto:video",
              video_codec: "auto",
              crop: "scale",
              width,
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
