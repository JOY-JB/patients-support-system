const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://medcitynews.com/uploads/2021/02/WELL-Medcity-image.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-7xl font-bold">Empowering</h1>
          <h1 className="mb-5 text-5xl font-bold">Health Care Support</h1>
          <p className="mb-5">
            Welcome to our comprehensive Patient Support System, designed to
            provide seamless healthcare assistance. Our platform aims to enhance
            patient-doctor interactions, streamline prescriptions, and improve
            medical management.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
