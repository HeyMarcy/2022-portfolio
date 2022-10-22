import { MENULINKS } from "../../constants";
import ChiSkyline from "../homepage/chiSkyline";
// import Image from "next/image";
// import Hero from "../homepage/hero";

const Footer = () => {
  const renderFooterContent = (): React.ReactNode => (
    <>
      <h2 className='text-center text-sm sm:text-base mt-8'>
        Made with ❤️ by Marcy
      </h2>
    </>
  );
  const renderBackgroundImage = (): React.ReactNode => (
    <div className='absolute bottom w-full'>
      <ChiSkyline styleName='w-full' fillColor='#1c4478' />
    </div>
  );
  const { ref: footerRef } = MENULINKS[3];

  return (
    <footer className='w-full relative select-none h-48' id={footerRef}>
      <div className='h-full w-full'>
        <div className='section-container flex-col flex h-full justify-end z-10 items-center '>
          {renderFooterContent()}
          {renderBackgroundImage()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
