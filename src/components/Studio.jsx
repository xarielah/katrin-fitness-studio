import Image from "next/image";

const text = {
  label: "הסטודיו",
  part1:
    "בסטודיו מאוד חשוב לי ליצור אווירה תומכת ומקבלת שתרגיש לכן כמו הבית השני שלכן. כמאמנת אני מחויבת לעזור לכן להגיע ליעדים שהצבנו, בין אם אתן בכושר שיא או בתחילת התהליך אנחנו ניצור תוכנית שמותאם לך אישית שנוכל למקסם את הפוטנציאל שלך ולהגיע לגוף חלומותיך.",
  part2:
    "אני מאמינה שכשיש לך מקום, חזון וליווי תוכלי להגשים כל דבר שרק תרצי. אני מזמינה אותך לקחת את הצעד הראשון לחיים בריאים ושמחים יותר.",
};

export default function Studio({ media }) {
  return (
    <section className="relative flex w-full items-center py-10 lg:py-20">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black">
        <Image
          src={media?.url}
          width={media?.width}
          height={media?.height}
          alt="Studio Background Image"
          className="h-full w-full object-cover object-center brightness-[15%] grayscale lg:brightness-100 lg:grayscale-0"
        />
      </div>

      <div className=" absolute left-0 top-0 z-20 h-full w-full lg:bg-black-transparent-90deg" />

      <div className="container z-30 flex h-full flex-col items-center justify-center lg:flex-row-reverse lg:justify-between">
        <div
          style={{ direction: "rtl" }}
          className="flex h-full flex-col items-center justify-between gap-4 text-center text-lg text-white drop-shadow-md lg:w-1/2 lg:text-right lg:text-2xl"
        >
          <h1 className="text-2xl text-primary lg:self-start lg:text-4xl">
            {text.label}
          </h1>
          <p className="font-thin">{text.part1}</p>
          <p className="font-thin">{text.part2}</p>
        </div>
      </div>
    </section>
  );
}
