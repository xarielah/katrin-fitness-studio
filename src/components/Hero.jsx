import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../utils/sanity/imageUrlBuilder";
import Button from "./Button";

const text = {
  button: "לפרטים נוספים",
};

const link = {
  services: "/#services",
};

export default function Hero({ content }) {
  return (
    <section className="relative flex h-[100svh] w-full items-center" id="hero">
      <div
        id="hero-img-wrapper"
        className="absolute left-0 top-0 h-full w-full bg-black"
      >
        <Image
          src={urlFor(content?.mainImage).url()}
          fill
          sizes="100vw"
          alt="Hero Background Image"
          loading="lazy"
          className="h-full w-full object-cover object-center brightness-[45%]"
        />
      </div>

      <div className="container">
        <div
          id="hero-text-wrapper"
          className="flex w-full flex-col items-center justify-between gap-10 text-center text-white drop-shadow-md lg:items-end lg:gap-14 lg:text-right"
        >
          <h1 id="hero-header" className="text-4xl lg:text-6xl">
            {content?.title}
          </h1>
          <p id="hero-text" className="text-2xl font-thin lg:text-3xl">
            {content?.subtitle}
          </p>
          <Button type="button" id="more-info-button" className="lg:ml-auto">
            <Link scroll={false} href={link.services}>
              {text.button}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
