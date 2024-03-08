import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../utils/cn";

// TODO: example text, will be updated soon
const text = {
  strength: {
    title: "אימוני כוח",
    description:
      "אימוני כוח מגבירים את יכולת פיתוח הכוח של השרירים, הגידים והרצועות. כמו כן אימונים מסוג זה עשויים לשפר את צפיפות העצם וחילוף החומרים; לשפר את תפקוד המפרקים והלב.",
  },
  pilates: {
    title: "פילאטיס מכשירים",
    description:
      "אימון בשיטת פילאטיס כולל שילוב של כ-50 תרגילים חוזרים. כל תרגיל נובע מחמשת היסודות: נשימה, יישור צוואר, ייצוב הצלעות והשכמות, תנועתיות האגן והשרירים הרוחביים בבטן.",
  },
  functional: {
    title: "אימונים פונקציונאלים",
    description:
      "אימון פונקציונלי נועד לשפר את יכולת הכושר התפקודית של המתאמנת. אימון פונקציונלי עובד על מספר יעדי כושר בו זמנית – סיבולת אירובית ואנאירובית, כוח, קואורדינציה, מהירות וזריזות.",
  },
};

export default function Services({ media }) {
  return (
    <>
      <section className="relative bg-black py-10">
        {/* offset for scroll link */}
        <div className="absolute -top-16 left-0 bg-transparent" id="services" />
        <div
          style={{ direction: "rtl" }}
          className="container flex w-full flex-col items-center justify-between gap-6 text-center text-white lg:flex-row lg:gap-14"
        >
          <Service
            image={media[2]}
            title={text.strength.title}
            description={text.strength.description}
          />
          <Service
            image={media[1]}
            title={text.pilates.title}
            description={text.pilates.description}
            className="lg:aspect-[1/1.5]"
          />
          <Service
            image={media[0]}
            title={text.functional.title}
            description={text.functional.description}
          />
        </div>
      </section>
    </>
  );
}

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

function Service(props) {
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
