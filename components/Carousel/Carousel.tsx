"use client";

import React from "react";
import Image from "next/image";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import cx from "clsx";

import { usePrevNextButtons } from "@/utils/hooks/usePrevNextButton";
import { useDotButton } from "@/utils/hooks/useDotButton";
import NextButton from "@/components/Carousel/ArrowButtons/NextButton";
import PrevButton from "@/components/Carousel/ArrowButtons/PrevButton";
import DotButton from "@/components/Carousel/DotButton";
import { Image as ImageType } from "@/types/image";

import styles from "./Carousel.module.scss";

type PropType = {
  slides: ImageType[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const single = slides.length > 2;

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((item, index) => (
            <div className={styles.slide} key={index}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {single && (
          <div className={styles.controls}>
            <div className={styles.buttons}>
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
              />
            </div>

            <div className={styles.dots}>
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={cx(styles.dot, {
                    [styles.dotSelected]: index === selectedIndex,
                  })}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
