const mapContainer = () => {
  return (
    <div className="h-56  xl:h-96  xl:w-96">
      <iframe
        className="h-full w-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.1964602417197!2d-7.6495713!3d33.6002067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d397a4e97d7f%3A0xdb5532fbf4b6878e!2sSmoky%20Burgers!5e0!3m2!1sfr!2sma!4v1700831112518!5m2!1sfr!2sma"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>{" "}
    </div>
  );
};

export default mapContainer;
