import { motion } from "framer-motion";
import Image from "next/image";

const text = {
  title: "לפני ואחרי",
  subtitle: "מההתחלה עד הסוף - סיפורי הצלחה של מתאמנות",
};

const transformationVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.25,
    },
  },
};

export default function Transformations({ media }) {
  return (
    <section className="w-full bg-black py-10" id="before-and-after">
      <div className="container flex flex-col items-center justify-center gap-4 lg:gap-8">
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-2 text-center text-xl font-thin text-white lg:gap-4 lg:text-3xl">
          <h1 className="text-2xl font-normal text-primary lg:text-4xl">
            {text.title}
          </h1>
          <h2>{text.subtitle}</h2>
        </div>

        {/* gallery */}
        <div className=" grid grid-cols-2 place-items-center gap-2 gap-y-4 lg:grid-cols-4 lg:gap-4 lg:gap-y-8">
          {media.map((mediaObj, index) => (
            <motion.div
              variants={transformationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${index % 2 === 1 ? "lg:mr-2" : "lg:ml-2"} aspect-[1/1.15] w-full overflow-hidden rounded-lg border-[.5px] border-primary`}
              key={mediaObj?.asset_id}
            >
              <Image
                src={mediaObj?.url}
                width={mediaObj?.width}
                height={mediaObj?.height}
                alt={`Image ${mediaObj?.asset_id}`}
                className="h-full w-full object-cover object-center drop-shadow-md"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
