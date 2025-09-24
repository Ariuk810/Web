"use client";
import { Staricons } from "../_icons/Star";
import { Sumicons } from "../_icons/Sum";
import { Trailer } from "../_icons/Trailer";
import { MovieSlide } from "../_components/MovieSlide";
export const HeroSection = (props) => {
  return (
    <MovieSlide
      image={"Wicked.png"}
      title={"Wicked"}
      exp={
        "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads."
      }
      rate={6.9}
    />
  );
};
