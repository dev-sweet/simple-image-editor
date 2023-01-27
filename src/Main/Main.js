import React from "react";
import "./main.scss";
import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";
import { CgEditFlipH, CgEditFlipV } from "react-icons/cg";
import { ImUndo, ImRedo } from "react-icons/im";
import { RiImageAddLine } from "react-icons/ri";
const Main = () => {
  const filters = [
    {
      name: "brigthness",
    },
    {
      name: "grayscale",
    },
    {
      name: "sepia",
    },
    {
      name: "saturate",
    },
    {
      name: "contrast",
    },
    {
      name: "rotate",
    },
  ];
  return (
    <div className='main'>
      <div className='editor-board'>
        <div className='editor-top'>
          <h1 className='title'>---image Editor---</h1>
        </div>
        <div className='editor-body'>
          <div className='sidebar'>
            <div className='filters-body'>
              <span>Filters</span>
              <div className='filters'>
                {filters.map((filter, i) => (
                  <button className='edit-btn' key={i}>
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
            <div className='filter-slider'>
              <div className='label-bar'>
                <label htmlFor='rotate'>Rotate</label>
                <span>100%</span>
              </div>
              <input name='rotate' type='range' />
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
          <div className='select-image-area'>
            <div className='image'>
              <label htmlFor='choose'>
                <span className='select-image'>
                  <RiImageAddLine />
                </span>

                <span>Choose image</span>
              </label>
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
            <input type='file' id='choose' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
