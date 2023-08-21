import twitter from "../assets/svg_images/twiter.svg";
import facebook from "../assets/svg_images/facebook.svg";
import linkin from "../assets/svg_images/linkin.svg";
import footerimage from "../assets/images/footerimage.png";

const Footer = () => {
  return (
    <footer>
      <div className="bg-red-800 pt-16">
        <div className="mx-auto container px-5 lg:px-14">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <h5 className="text-white font-bold text-xl sm:text-2xl lg:text-4xl mb-6">
                Bersama LomPace menjadikan perjalanan anda menjadi menyenangkan
              </h5>
              <div className="flex gap-4">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={linkin} alt="linkin" />
              </div>
            </div>
            <div className="w-full mt-12 lg:w-1/2 flex items-end">
              <p className="text-base text-white font-medium sm:text-base lg:text-lg mb-6">
                Jangan lewatkan diskon 50% dan jelajahi keindahan alam Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-end">
          <img
            src={footerimage}
            alt="footer image"
            className="relative bottom-0 w-4/5 lg:w-1/2"
          />
        </div>
      </div>

      <div className="bg-[#FEEBEB] pt-14 pb-32 text-[#5F5757]">
        <div className="mx-auto container px-5 lg:px-14 border-[#5f5757] border-b pb-10 flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <h5 className="text-red-800 font-bold text-2xl sm:text-2xl lg:text-4xl">
              LomPace
            </h5>
            <p className="text-base font-medium sm:text-base lg:text-lg mt-3">
              Lorem Ipsum has been the industry`s standard dummy text ever since
              the 1500s, when an
            </p>
          </div>
          <div className="w-full flex flex-wrap mt-6 lg:w-1/2">
            <div className="w-full mb-6 lg:w-1/3">
              <h5 className="text-red-800 font-bold text-xl">CONTACT</h5>
              <p className="mt-3">+23234421</p>
              <p className="mt-2">lorem@gmail.com</p>
              <p className="mt-2">lompace.com</p>
            </div>
            <div className="w-full mb-6 lg:w-1/3">
              <h5 className="text-red-800 font-bold text-xl">COMPANY</h5>
              <p className="mt-3">About Us</p>
              <p className="mt-2">Features</p>
            </div>
            <div className="w-full mb-6 lg:w-1/3">
              <h5 className="text-red-800 font-bold text-xl">RESOURCES</h5>
              <p className="mt-3">Fresh Info</p>
              <p className="mt-2">Costumers</p>
              <p className="mt-2">Review</p>
            </div>
          </div>
        </div>
        <div className="pt-14 w-full">
          <h6 className="text-sm text-center">
            Copyright © 2023 LomPace. All Rights Reserved
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
