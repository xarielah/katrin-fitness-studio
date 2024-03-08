import Carousel from "@/components/Carousel/Carousel";
import Head from "next/head";
import getMedia from "../../../utils/cloudinary";

const carouselOptions = {
  loop: true,
  align: "center",
  duration: "10",
  breakpoints: {
    "(min-width: 1024px)": {
      align: "start",
    },
  },
};

export default function Gallery({
  pilatesAssets,
  strengthTrainingAssets,
  galleryAssets,
}) {
  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - גלריה</title>
      </Head>
      <section className="w-full bg-black pb-10 pt-24 lg:pt-28">
        <div className="container flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">גלריה</h3>
            <Carousel
              slideStyle="lg:w-1/4"
              className="lg:w-full"
              mediaType="image"
              slides={galleryAssets}
              options={carouselOptions}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">פילאטיס</h3>
            <Carousel
              slideStyle="lg:w-1/3"
              className="lg:w-full"
              mediaType="video"
              slides={pilatesAssets}
              options={carouselOptions}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">אימוני כוח</h3>
            <Carousel
              slideStyle="lg:w-1/3"
              className="lg:w-full"
              mediaType="video"
              slides={strengthTrainingAssets}
              options={carouselOptions}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const galleryAssets = await getMedia("image", "studio");
    const pilatesAssets = await getMedia("video", "pilates");
    const strengthTrainingAssets = await getMedia("video", "strength-training");

    return {
      props: {
        galleryAssets,
        pilatesAssets,
        strengthTrainingAssets,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        galleryAssets: [],
        pilatesAssets: [],
        strengthTrainingAssets: [],
      },
    };
  }
}
