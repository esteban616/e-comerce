/* eslint-disable react/prop-types */
import { useState } from "react";
import "./styles/SliderImg.css";

const SliderImg = ({ product }) => {
  const [indexImg, setIndexImg] = useState(0);

  const styleMovible = {
    transform: `translateX(calc((-${indexImg}/3)*100%))`,
  };

  const handleNext = () => {
    if (indexImg < 2) {
      setIndexImg(indexImg + 1);
    } else {
      setIndexImg(0);
    }
  };

  const handlePrev = () => {
    if (indexImg > 0) {
      setIndexImg(indexImg - 1);
    } else {
      setIndexImg(2);
    }
  };

  return (
    <div>
      <div className="slider">
        <button onClick={handlePrev} className="slider_btn slider_left">
          &lt;
        </button>
        <div style={styleMovible} className="slider_movible">
          {product?.images.map((imgInfo) => (
            <div className="slider_img-container" key={imgInfo.id}>
              <img className="slider_img" src={imgInfo.url} alt="" />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="slider_btn slider_right">
          &gt;
        </button>
      </div>
      <div className="slider_footer-container">
        <div className="slider_footer">
          {product?.images.map((imgInfo, i) => (
            <div
              className={`slider_footer-container-img ${
                i === indexImg && "slider_img-active"
              }`}
              key={imgInfo.id}
              onClick={()=>setIndexImg(i)}
            >
              <img className="slider_img" src={imgInfo.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderImg;
