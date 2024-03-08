import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Button from "./Button";

const links = {
  whatsapp: "https://wa.me/972556620441",
};

export default function Whatsapp() {
  return (
    <div className="fixed bottom-3 left-3 z-50 lg:bottom-6 lg:left-6">
      <Link href={links.whatsapp} target="_blank" rel="noopener noreferrer">
        <Button
          type="button"
          className="rounded-full bg-primary p-3 drop-shadow-xl transition-transform duration-150 ease-linear hover:scale-110"
        >
          <FaWhatsapp className="text-3xl text-black" />
        </Button>
      </Link>
    </div>
  );
}
