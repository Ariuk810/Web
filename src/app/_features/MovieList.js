"use client";
import { MovieCard } from "../_components/MovieCard";
import { Sumicons } from "../_icons/Sum";
export const MovieList = (props) => {
  const { order } = props;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mt-10 ">
        <h1 className="text-3xl ml-10">{order} </h1>
        <div className="flex items-center mr-10">
          <p>See more</p>
          <Sumicons />
        </div>
      </div>
      <div className="flex justify-center gap-[20px]">
        <MovieCard imgSrc={"Santa.png"} title={"Dear Santa"} rating={8} />
        <MovieCard
          imgSrc={"Dragon.png"}
          title={"How To Train Your Dragon Live Action"}
          rating={2}
        />
        <MovieCard imgSrc={"Alien.png"} title={"Alien Formulus"} rating={2} />
        <MovieCard imgSrc={"Ashes.png"} title={"From the Ashes"} rating={2} />
        <MovieCard imgSrc={"Space.png"} title={"Space Dogg"} rating={2} />
      </div>
      <div className="flex justify-center gap-[20px]">
        <MovieCard imgSrc={"Order.png"} title={"The Order"} rating={2} />
        <MovieCard imgSrc={"Y2K.png"} title={"Y2K"} rating={2} />
        <MovieCard
          imgSrc={"Solo.png"}
          title={"Solo Leveling: ReAwakening"}
          rating={2}
        />
        <MovieCard imgSrc={"Get.png"} title={"Get Away"} rating={2} />
        <MovieCard
          imgSrc={"Sonic.png"}
          title={"Sonic the Hedgehog 3"}
          rating={2}
        />
      </div>
    </div>
  );
};
