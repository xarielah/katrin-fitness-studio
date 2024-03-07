import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { cn } from "../../../utils/cn";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarouselButtons";

export default function Carousel(props) {
  const { slides, options, className, mediaType, slideStyle } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className={cn("relative w-full px-10 lg:w-3/5", className)}>
      <div
        className="z-20 m-auto w-full overflow-hidden rounded-lg lg:px-1"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y">
          {slides.map((mediaObj) => (
            <div
              className={cn(
                "mx-1 w-full flex-auto flex-shrink-0 flex-grow-0 lg:w-1/2",
                slideStyle,
              )}
              key={mediaObj.asset_id}
            >
              {mediaType === "image" && (
                <Image
                  src={mediaObj?.url}
                  width={mediaObj?.width}
                  height={mediaObj?.height}
                  alt={`Image ${mediaObj?.asset_id}`}
                  className="h-full w-full rounded-lg object-cover object-center drop-shadow-md"
                  loading="lazy"
                />
              )}

              {mediaType === "video" && (
                <video
                  src={mediaObj?.url}
                  alt={`Video ${mediaObj?.asset_id}`}
                  className="h-full w-full rounded-lg drop-shadow-md"
                  controls
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  );
}
