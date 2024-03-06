import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// TODO: example text, will be updated soon
const text = {
  title: "הסטודיו של קאתרין",
  subtitle: "הדרך להצלחה שלך, הדרך להצלחה שלך",
  button: "לפרטים נוספים",
};

const link = {
  services: "/#services",
};

export default function Hero({ media }) {
  return (
    <section className="relative flex h-screen w-full items-center" id="hero">
      <div
        id="hero-img-wrapper"
        className="absolute left-0 top-0 h-full w-full bg-black"
      >
        <Image
          // TODO: example media, will be updated soon
          src={media[3]?.url}
          width={media[3]?.width}
          height={media[3]?.height}
          alt="Hero Background Image"
          className="h-full w-full object-cover object-center brightness-[45%]"
          loading="eager"
        />
      </div>

      <div className="container">
        <div
          id="hero-text-wrapper"
          className="flex w-full flex-col items-center justify-between gap-10 text-center text-white drop-shadow-md lg:items-end lg:gap-14 lg:text-right"
        >
          <h1 id="hero-header" className="text-4.5xl lg:text-6xl">
            {text.title}
          </h1>
          <p id="hero-text" className="text-2xl font-thin lg:text-3xl">
            {text.subtitle}
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
