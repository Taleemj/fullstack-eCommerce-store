const Footer = () => {
  return (
    <footer className="absolute bottom-0 right-0 left-0 bg-amazon_blue text-white h-24 flex flex-col justify-end items-center text-center">
      <h1 className="lg:w-[7.7%] md:w-[10%] w-[29%] font-bold text-2xl">
        thestore
        <div className="border-b-2 border-b-yellow-500" />
      </h1>
      <p className="text-sm py-1">
        &copy; 2023, thestore, all rights resevered. By Taleem
      </p>
    </footer>
  );
};

export default Footer;
