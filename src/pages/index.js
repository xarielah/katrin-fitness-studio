import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Katrin from "@/components/Katrin";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Studio from "@/components/Studio";
import Transformations from "@/components/Transformations";
import Head from "next/head";
import fetchCloudinaryResources from "../../utils/cloudinary";

export default function Home({
  studioAssets,
  servicesAssets,
  transformationsAssets,
  reviewsAssets,
  katrinAssests,
}) {
  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - דף הבית</title>
      </Head>
      <Hero media={studioAssets[0]} />
      <Services media={servicesAssets} />
      <Studio media={studioAssets[1]} />
      <Transformations media={transformationsAssets} />
      <Reviews media={reviewsAssets} />
      <Katrin background={studioAssets[2]} katrin={katrinAssests} />
      <Faq />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  try {
    const studioAssets = await fetchCloudinaryResources(
      "image",
      "studio",
      1280,
    );
    const servicesAssets = await fetchCloudinaryResources("image", "services");
    const transformationsAssets = await fetchCloudinaryResources(
      "image",
      "transformations",
    );
    const reviewsAssets = await fetchCloudinaryResources("image", "reviews");
    const katrinAssests = await fetchCloudinaryResources("image", "katrin");

    return {
      props: {
        studioAssets,
        servicesAssets,
        transformationsAssets,
        reviewsAssets,
        katrinAssests,
      },
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        studioAssets: [],
        servicesAssets: [],
        transformationsAssets: [],
        reviewsAssets: [],
        katrinAssests: [],
      },
    };
  }
}
