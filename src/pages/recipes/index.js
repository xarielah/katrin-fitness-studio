import Button from "@/components/Button";
import Carousel from "@/components/Carousel/Carousel";
import Head from "next/head";
import Link from "next/link";
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

const link = {
  whatsapp: "https://chat.whatsapp.com/LNe0EqWlJStCAtybKVw3Rm",
};

const text = {
  title: "מעוניינת לראות עוד? הצטרפי לקבוצת המתכונים שלנו!",
  button: "לחצי כאן",
};

export default function Gallery({ recipesAssets }) {
  return (
    <>
      <Head>
        <title>הסטודיו של קאתרין - מתכונים</title>
      </Head>
      <section className="w-full bg-black pb-10 pt-24 lg:pt-28">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="container flex flex-col items-center justify-center gap-4">
            <h3 className="text-3xl text-primary lg:text-4xl">מתכונים</h3>
            <Carousel
              slideStyle="lg:w-1/3"
              className="lg:w-full"
              mediaType="video"
              slides={recipesAssets}
              options={carouselOptions}
            />
          </div>

          <div className="w-full bg-primary py-4 lg:py-6">
            <div
              className="container flex w-full flex-col items-center justify-center gap-4 text-center text-2xl font-thin leading-10 lg:flex-row lg:gap-12 lg:text-right lg:text-3xl"
              style={{ direction: "rtl" }}
            >
              <h3>{text.title}</h3>
              <Link href={link.whatsapp}>
                <Button
                  type="button"
                  className="bg-black text-white hover:bg-white hover:text-black"
                >
                  {text.button}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const recipesAssets = await getMedia("video", "recipes");

    return {
      props: {
        recipesAssets,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return {
      props: {
        recipesAssets: [],
      },
    };
  }
}
