import Link from "next/link";
import { FaLocationDot, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import SocialLinks from "./SocialLinks";

const text = {
  address: "רחוב המלאכה 25, עפולה - קומה 2",
  email: "katrinyair@gmail.com",
  phoneNumber: "055-6620441",
};

const link = {
  address: "https://maps.app.goo.gl/RwgiUnZhJ4KR9czz6",
};

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-black">
        <div className="container">
          <hr className="rounded-full border-gray-700" />

          <div className="flex w-full flex-col items-center justify-center gap-4 py-8 font-thin text-white lg:flex-row lg:justify-between">
            <SocialLinks
              className="gap-2 lg:gap-4"
              iconStyle="text-base lg:text-lg text-white"
              buttonStyle="bg-gray-700 drop-shadow-md hover:bg-gray-500"
            />

            <div
              className="text-center text-lg lg:space-y-1 lg:text-right lg:text-xl"
              style={{ direction: "rtl" }}
            >
              <Link
                className="flex items-center justify-center gap-2 lg:justify-start"
                href={link.address}
              >
                <FaLocationDot className="text-primary" />
                <p>{text.address}</p>
              </Link>

              <Link
                className="flex items-center justify-center gap-2 lg:justify-start"
                href={`mailto:${text.email}`}
              >
                <FaRegEnvelope className="text-primary" />
                <p>{text.email}</p>
              </Link>

              <Link
                className="flex items-center justify-center gap-2 lg:justify-start"
                href={`tel:${text.phoneNumber}`}
              >
                <FaPhone className="text-primary" />
                <p>{text.phoneNumber}</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
