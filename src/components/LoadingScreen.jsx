import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const loadingScreenVariants = {
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { ease: "linear", duration: 0.5 } },
};

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      ease: "linear",
      repeat: Infinity,
      duration: 0.6,
    },
  },
};

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            variants={loadingScreenVariants}
            animate="visible"
            exit="exit"
            className="fixed left-0 top-0 z-[60] flex h-full w-full items-center justify-center bg-[#bba187]"
          >
            <div className="relative w-3/5 rounded-full lg:w-1/6">
              <Image
                src={"/LoadingScreen/circleLogo.webp"}
                width={250}
                height={250}
                alt="Loading Screen"
                priority={true}
                className="aspect-square w-full rounded-full object-cover object-center drop-shadow-lg"
              />
              <motion.div
                variants={spinnerVariants}
                animate="animate"
                className="absolute left-[-2.5%] top-[-2.5%] h-[105%] w-[105%] rounded-full border-[3px] border-r-[6px] border-[#ebebeb3b] border-r-white"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
