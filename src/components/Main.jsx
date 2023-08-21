import React from "react";
import paperPlane from "../assets/svg_images/paper-plane.svg";
import mainImage from "../assets/images/main-image.png";
import menelusuri from "../assets/svg_images/telusur-perjalanan.svg";
import rencana from "../assets/svg_images/rencana-perjalanan.svg";
import terhubung from "../assets/svg_images/terhubung-dengan-ahli.svg";
import perjalanan from "../assets/svg_images/perjalanan-lebih-baik.svg";
import menemukan from "../assets/svg_images/menemukan-tujuan.svg";
import memesan from "../assets/svg_images/memesan-tiket.svg";
import bayar from "../assets/svg_images/bayar-dan-jelajah.svg";
import line from "../assets/svg_images/line.svg";
const Swiper = React.lazy(() => import("./Swiper"));

const Main = () => {
  return (
    <div className="bg-[#FEEBEB] -mt-[2px] relative pb-14">
      <main className="mx-auto pt-16 container px-5 lg:px-14">
        <div className="flex justify-center md:mb-10 lg:mb-14">
          <div className="text-center relative w-2/3">
            <h2 className="text-red-800 font-bold text-xl sm:text-2xl lg:text-4xl relative z-10">
              Merekomendasikan Tujuan Travel Populer
            </h2>
            <p className="text-base font-medium mt-2 sm:text-base lg:text-lg">
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
        <div className="mt-20 flex flex-wrap lg:mt-40 gap-5">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={mainImage}
              alt="main image"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="text-red-800 font-bold text-xl sm:text-2xl lg:text-4xl mt-6">
              Perjalanan bersama Loompace untuk perjalanan modern
            </h2>
            <p className="text-base font-medium mt-3 mb-5 sm:text-base lg:text-lg lg:mt-6">
              Kemajuan dalam transportasi adalah tonggak penting perjalanan
              modern. Penerbangan cepat dan nyaman, kereta berkecepatan tinggi
              yang menghubungkan kota-kota besar
            </p>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img src={menelusuri} alt="Menelusuri" />
                  <p className="font-bold text-red-800 sm:text-base lg:text-lg">
                    Menelusuri perjalanan kami
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={rencana} alt="Rencana" />
                  <p className="font-bold text-red-800 sm:text-base lg:text-lg">
                    Rencana perjalanan anda
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img src={terhubung} alt="Terhubung" />
                  <p className="font-bold text-red-800 sm:text-base lg:text-lg">
                    Terhubung dengan seorang ahli
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={perjalanan} alt="Perjalanan" />
                  <p className="font-bold text-red-800 sm:text-base lg:text-lg">
                    Perjalanan lebih baik
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-red-800 text-white py-2 px-6 rounded-full">
              Explore all trips
            </button>
          </div>
        </div>
        <div className="mt-20 lg:mt-40">
          <h2 className="text-red-800 font-bold text-xl sm:text-2xl lg:text-4xl mt-6">
            Bagaimana kami dapat membantu perjalanan Anda
          </h2>
          <p className="text-base font-medium mt-3 mb-5 sm:text-base lg:text-lg lg:mt-6">
            Layanan kami yang sangat nyaman dan dapat membuat Anda bahagia
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap relative w-full justify-center">
            <img
              src={line}
              alt="line"
              className="hidden lg:block absolute w-4/6 top-12 z-0"
            />
            <div className="w-full text-center mb-6 lg:py-6 lg:pr-5 lg:w-1/3 lg:box-border">
              <div className="bg-white rounded-3xl px-5 py-10">
                <img
                  src={menemukan}
                  alt="Menemukan"
                  className="mx-auto relative z-10"
                />
                <h5 className="text-lg mt-5 font-bold text-red-800 sm:text-base lg:text-lg">
                  Menemukan tujuan anda
                </h5>
                <p className="text-base font-medium mt-3 sm:text-base lg:text-lg lg:mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  commodi voluptatibus distinctio voluptas quos, itaque qui
                  dignissimos alias. Quod, nulla?
                </p>
              </div>
            </div>
            <div className="w-full text-center mb-6 lg:py-6 lg:px-5 lg:w-1/3 lg:box-border">
              <div className="bg-white rounded-3xl px-5 py-10">
                <img
                  src={memesan}
                  alt="memesan"
                  className="mx-auto relative z-10"
                />
                <h5 className="text-lg mt-5 font-bold text-red-800 sm:text-base lg:text-lg">
                  Memesan tiket
                </h5>
                <p className="text-base font-medium mt-3 sm:text-base lg:text-lg lg:mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  commodi voluptatibus distinctio voluptas quos, itaque qui
                  dignissimos alias. Quod, nulla?
                </p>
              </div>
            </div>
            <div className="w-full text-center mb-6 lg:py-6 lg:pl-5 lg:w-1/3 lg:box-border">
              <div className="bg-white rounded-3xl px-5 py-10">
                <img
                  src={bayar}
                  alt="bayar"
                  className="mx-auto relative z-10"
                />
                <h5 className="text-lg mt-5 font-bold text-red-800 sm:text-base lg:text-lg">
                  Bayar dan jelajahi tujuan
                </h5>
                <p className="text-base font-medium mt-3 sm:text-base lg:text-lg lg:mt-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                  commodi voluptatibus distinctio voluptas quos, itaque qui
                  dignissimos alias. Quod, nulla?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
