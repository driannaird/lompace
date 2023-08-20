import paperPlane from "../assets/svg_images/paper-plane.svg";
import Swiper from "./Swiper";

const Main = () => {
  return (
    <div className="bg-[#FEEBEB] -mt-[2px] relative pb-96">
      <main className="mx-auto pt-10 container px-5 lg:px-14">
        <div className="flex justify-center md:mb-10 lg:mb-14">
          <div className="text-center relative w-2/3">
            <h2 className="text-red-800 font-bold text-xl sm:text-2xl lg:text-4xl relative z-10">
              Merekomendasikan Tujuan Travel Populer
            </h2>
            <p className="text-sm mt-2 sm:text-base lg:text-lg">
              Melihat keindahan dunia dengan mudah dan aman dengan LomPace
            </p>
            <img
              src={paperPlane}
              alt="paper plane"
              className="absolute -top-5 z-0 right-0 w-20 h-full"
            />
          </div>
        </div>
        <div className="mt-5">
          <Swiper />
        </div>
      </main>
    </div>
  );
};

export default Main;
