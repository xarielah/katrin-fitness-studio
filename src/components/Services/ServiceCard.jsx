import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../utils/cn";

const serviceVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25,
    },
  },
};

export default function ServiceCard(props) {
  return (
    <motion.div
      variants={serviceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full w-full"
    >
      <Image
        src={props.image?.url}
        width={props.image?.width}
        height={props.image?.height}
        alt="Services Image"
        className={cn(
          "mb-2 aspect-[1/1.15] h-full w-full rounded-lg object-cover object-center drop-shadow-md",
          props.className,
        )}
        loading="lazy"
      />
      <h2 className="text-xl text-primary lg:text-2xl">{props.title}</h2>
      <p className="text-lg font-thin lg:text-xl">{props.description}</p>
    </motion.div>
  );
}
