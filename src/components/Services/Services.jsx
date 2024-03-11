import ServiceCard from "./ServiceCard";

export default function Services({ content }) {
  return (
    <>
      <section className="relative bg-black py-10">
        {/* offset for scroll link */}
        <div className="absolute -top-16 left-0 bg-transparent" id="services" />
        <div
          style={{ direction: "rtl" }}
          className="container flex w-full flex-col items-center justify-between gap-6 text-center text-white lg:flex-row lg:gap-14"
        >
          <ServiceCard content={content?.strengthTraining[0]} />
          <ServiceCard
            content={content?.pilates[0]}
            className="lg:aspect-[1/1.5]"
          />
          <ServiceCard content={content?.functionalTraining[0]} />
        </div>
      </section>
    </>
  );
}
