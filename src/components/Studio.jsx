import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "../../utils/sanity/imageUrlBuilder";

export default function Studio({ content }) {
  return (
    <section className="relative flex w-full items-center py-10 lg:py-20">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black">
        <Image
          src={urlFor(content?.mainImage).url()}
          fill
          sizes="100vw"
          alt="Studio Background Image"
          className="h-full w-full object-cover object-center brightness-[15%] grayscale lg:brightness-100 lg:grayscale-0"
          loading="lazy"
        />
      </div>

      <div className=" absolute left-0 top-0 z-20 h-full w-full lg:bg-black-transparent-90deg" />

      <div className="container z-30 flex h-full flex-col items-center justify-center lg:flex-row-reverse lg:justify-between">
        <div
          style={{ direction: "rtl" }}
          className="flex h-full flex-col items-center justify-between gap-4 text-center text-lg text-white drop-shadow-md lg:w-1/2 lg:text-right lg:text-2xl"
        >
          <h1 className="text-2xl text-primary lg:self-start lg:text-4xl">
            {content?.title}
          </h1>

          <div className="font-thin">
            <PortableText value={content?.body} />
          </div>
        </div>
      </div>
    </section>
  );
}
