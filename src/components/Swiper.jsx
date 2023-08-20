import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import travel1 from "../assets/images/travel1.jpg";
import travel2 from "../assets/images/travel2.jpg";
import travel3 from "../assets/images/travel3.jpg";
import travel4 from "../assets/images/travel4.jpg";

const Swiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      coverflowEffect: {
        rotate: 0,
        depth: 100,
        modifier: 1,
        scale: 1,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
      },
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();
  }, []);

  return (
    <swiper-container
      ref={swiperRef}
      slides-per-view="3"
      loop="true"
      navigation="true"
      pagination="true"
      autoplay="true"
      effect="coverflow">
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel1}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel2}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel3}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel4}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel1}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel2}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel3}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel4}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel1}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel2}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel3}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div className="relative group">
          <img
            src={travel4}
            alt="travel"
            className="rounded-2xl group-hover:brightness-50 transition-all duration-200 ease-in-out"
          />
          <p className="opacity-0 group-hover:opacity-100 absolute top-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out md:text-base lg:text-lg">
            Borobudur dianggap dianggap sebagai pusat spiritual umat Buddha.
          </p>
          <h4 className="opacity-0 group-hover:opacity-100 absolute bottom-0 text-sm text-white drop-shadow-lg p-2 transition-all duration-200 ease-in-out">
            Borubudur, Yogyakarta
          </h4>
        </div>
      </swiper-slide>
    </swiper-container>
  );
};

export default Swiper;
