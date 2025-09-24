import { Staricons } from "../_icons/Star";
import { Sumicons } from "../_icons/Sum";
import { Trailer } from "../_icons/Trailer";

export const MovieSlide = (props) => {
  const { title, exp, image, rate } = props;

  return (
    <div className="relative">
      <img src={image} className="mt-[20px] w-[100vw] overflow-scroll"></img>
      <div className="absolute top-[20%] left-[10%]">
        <h1 className="text-white text-[40px]">Now Playing:</h1>
        <h2 className="text-white text-[80px] font-bold">{title}</h2>
        <div className=" flex items-center">
          <Staricons />
          <span className="text-white">{rate}</span>
          <span className="text-gray-400">/10</span>
        </div>
        <p className="  w-[302px] text-[white] ">{exp}</p>
        <div className="flex justify-center items-center w-[145px] h-[40px] border bg-white rounded-lg">
          <Trailer />
          <button>Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};
