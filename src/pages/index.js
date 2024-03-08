import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Katrin from "@/components/Katrin";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Studio from "@/components/Studio";
import Transformations from "@/components/Transformations";
import Head from "next/head";
import getMedia from "../../utils/cloudinary";

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
    const studioAssets = await getMedia("image", "studio");
    const servicesAssets = await getMedia("image", "services");
    const transformationsAssets = await getMedia("image", "transformations");
    const reviewsAssets = await getMedia("image", "reviews");
    const katrinAssests = await getMedia("image", "katrin");

    return {
      props: {
        studioAssets,
        servicesAssets,
        transformationsAssets,
        reviewsAssets,
        katrinAssests,
      },
      revalidate: 10,
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
