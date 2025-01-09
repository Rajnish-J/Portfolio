import './Preloader.css'; // Ensure the CSS file path is correct

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="preloader-container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Preloader;
