import React, { useState } from "react";
import "./main.scss";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";
import { ImUndo, ImRedo } from "react-icons/im";
import { RiImageAddLine } from "react-icons/ri";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
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

  // declare a state for react crop
  const [crop, setCrop] = useState("");

  // image details
  const [imageDetails, setImageDetails] = useState("");

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

  // handle the range of a property
  const handleRange = (e) => {
    setRange(e.target.value);
    setImage({ ...image, [e.target.name]: e.target.value });
  };

  // handle rotate left
  const handleRotateLeft = () => {
    setImage({ ...image, Rotate: Rotate - 90 });
  };
  const handleRotateRight = () => {
    setImage({ ...image, Rotate: Rotate + 90 });
  };
  const handleFlipV = () => {
    setImage({ ...image, Vertical: Vertical === 1 ? -1 : 1 });
  };
  const handleFlipH = () => {
    setImage({ ...image, Horizontal: Horizontal === 1 ? -1 : 1 });
  };

  const handleCrop = () => {
    const canvas = document.createElement("canvas");
    const scaleX = imageDetails.naturalWidth / imageDetails.width;
    const scaleY = imageDetails.naturalHeight / imageDetails.height;
    canvas.width = crop.width;
    canvas.height = crop.height;

    const context = canvas.getContext("2d");
    context.drawImage(
      imageDetails,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    const baseUrl = canvas.toDataURL("image/jpg");
    setImage({ ...image, url: baseUrl });
  };

  // handle save
  const handleSave = () => {
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const context = canvas.getContext("2d");
    context.filter = `brightness(${Brightness}%) sepia(${Sepia}%) grayscale(${Grayscale}%) contrast(${Contrast}%) saturate(${Saturate}%) hue-rotate(${HueRotate}deg)`;
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate((image.rotate * Math.PI) / 180);
    context.scale(image.Vertical, image.Horizontal);

    context.drawImage(
      imageDetails,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width,
      canvas.height
    );
    const link = document.createElement("a");
    link.download = "edited_image.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };
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
                  <button onClick={handleRotateLeft}>
                    <AiOutlineRotateLeft />
                  </button>
                  <button onClick={handleRotateRight}>
                    <AiOutlineRotateRight />
                  </button>
                  <button onClick={handleFlipV}>
                    <CgEditFlipH />
                  </button>
                  <button onClick={handleFlipH}>
                    <CgEditFlipV />
                  </button>
                </div>
              </div>
            </div>
            <div className='save-and-reset'>
              <button className='reset'>Reset</button>
              <button onClick={handleSave} className='save'>
                Save
              </button>
            </div>
          </div>
          <div className='select-image-area'>
            <div className='image'>
              {image?.url ? (
                <ReactCrop
                  style={{ width: "80%" }}
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                >
                  <img
                    style={{
                      filter: `brightness(${Brightness}%) sepia(${Sepia}%) grayscale(${Grayscale}%) contrast(${Contrast}%) saturate(${Saturate}%) hue-rotate(${HueRotate}deg)`,
                      transform: `rotate(${Rotate}deg) scale(${Vertical},${Horizontal})`,
                    }}
                    onLoad={(e) => setImageDetails(e.currentTarget)}
                    src={url}
                    alt=''
                  />
                </ReactCrop>
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
              <button onClick={handleCrop} disabled={!crop} className='crop'>
                Crop Image
              </button>

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
