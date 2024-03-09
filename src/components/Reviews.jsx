import Carousel from "./Carousel/Carousel";

const text = {
  title: "הכי גאה בהן!",
  subtitle: "מתאמנות משוויצות בתוצאות",
};

export default function Reviews({ media }) {
  return (
    <>
      <section className="w-full bg-black py-10" id="reviews">
        <div className="container">
          <div className="flex w-full flex-col items-center justify-center gap-4 text-white lg:flex-row lg:justify-between lg:gap-12">
            <div
              style={{ direction: "rtl" }}
              className="flex flex-col items-center justify-center text-center text-2xl font-thin lg:items-start lg:gap-4 lg:text-right lg:text-5xl"
            >
              <h2 className=" font-normal text-primary ">{text.title}</h2>
              <p className="leading-10 lg:text-4xl">{text.subtitle}</p>
            </div>

            <Carousel
              mediaType="image"
              slides={media}
              options={{
                loop: true,
                align: "center",
                duration: "5",
                breakpoints: {
                  "(min-width: 1024px)": {
                    align: "start",
                  },
                },
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
