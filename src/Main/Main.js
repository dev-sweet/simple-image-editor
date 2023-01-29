import React, { useState } from "react";
import "./main.scss";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";
import { ImUndo, ImRedo } from "react-icons/im";
import { RiImageAddLine } from "react-icons/ri";
const Main = () => {
  // states
  // image states (all image property here)
  const [image, setImage] = useState({
    url: "",
    Brightness: 100,
    Grayscale: 0,
    Sepia: 0,
    Saturate: 100,
    Contrast: 100,
    HueRotate: 0,
    Rotate: 0,
    Vertical: 1,
    Horizontal: 1,
  });
  // distracture all about the image
  const {
    url,
    Brightness,
    Grayscale,
    Sepia,
    Saturate,
    Contrast,
    HueRotate,
    Rotate,
    Vertical,
    Horizontal,
  } = image;

  // changable imaage propery and their value
  const [property, setProperty] = useState({
    name: "Brightness",
    maxValue: 200,
  });

  // state for range
  const [range, setRange] = useState(image.Brightness);

  // filters property of image
  const filters = [
    {
      name: "Brightness",
      maxValue: 200,
    },
    {
      name: "Grayscale",
      maxValue: 200,
    },
    {
      name: "Sepia",
      maxValue: 200,
    },
    {
      name: "Saturate",
      maxValue: 200,
    },
    {
      name: "Contrast",
      maxValue: 200,
    },
    {
      name: "HueRotate",
      maxValue: 200,
    },
  ];

  // when user select an image then triger this handle change function
  const handleChange = (e) => {
    if (e.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImage({ ...image, url: reader.result });
      };
    }
  };

  // when clik a button(want to change property like as brightness,contrast,etx)
  const handleClick = (prop) => {
    setProperty(prop);
    setRange(image[prop.name]);
  };

  const handleRange = (e) => {
    setRange(e.target.value);
    setImage({ ...image, [e.target.name]: e.target.value });
  };

  // const changValueOfPropery = (value) => {};
  return (
    <div className='main'>
      <div className='editor-board'>
        <div className='editor-top'>
          <h1 className='title'>---image Editor---</h1>
        </div>
        <div className='editor-body'>
          <div className='sidebar-container'>
            <div className='sidebar'>
              <div className='filters-body'>
                <span>Filters</span>
                <div className='filters'>
                  {filters.map((filter, i) => (
                    <button
                      onClick={() => handleClick(filter)}
                      className={`edit-btn ${
                        property.name === filter.name && "active"
                      }`}
                      key={i}
                      disabled={!url}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className='filter-slider'>
                <div className='label-bar'>
                  <label htmlFor='rotate'>{property.name}</label>
                  <span>{`${range}%`}</span>
                </div>
                <input
                  name={property.name}
                  value={range}
                  onChange={handleRange}
                  max={property.maxValue}
                  disabled={!url}
                  type='range'
                />
              </div>
              <div className='rotate-and-flip'>
                <label htmlFor=''>Rotate & Flip</label>
                <div className='icons'>
                  <button>
                    <AiOutlineRotateLeft />
                  </button>
                  <button>
                    <AiOutlineRotateRight />
                  </button>
                  <button>
                    <CgEditFlipH />
                  </button>
                  <button>
                    <CgEditFlipV />
                  </button>
                </div>
              </div>
            </div>
            <div className='save-and-reset'>
              <button className='reset'>Reset</button>
              <button className='save'>Save</button>
            </div>
          </div>
          <div className='select-image-area'>
            <div className='image'>
              {image?.url ? (
                <img
                  style={{
                    filter: `brightness(${Brightness}%) sepia(${Sepia}%) grayscale(${Grayscale}%) contrast(${Contrast}%) saturate(${Saturate}%) hue-rotate(${HueRotate}deg)`,
                    transform: `rotate(${Rotate}deg) scale(${Vertical}) scale(${Horizontal})`,
                  }}
                  src={url}
                  alt=''
                />
              ) : (
                <label htmlFor='choose'>
                  <span className='select-image'>
                    <RiImageAddLine />
                  </span>

                  <span>Choose image</span>
                </label>
              )}
            </div>
            <div className='btns'>
              <button className='undo'>
                <ImUndo />
              </button>
              <button className='redo'>
                <ImRedo />
              </button>
              <button className='crop'>Crop Image</button>

              <label className='choose' htmlFor='choose'>
                Choose Image
              </label>
            </div>
            <input type='file' onChange={handleChange} id='choose' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
