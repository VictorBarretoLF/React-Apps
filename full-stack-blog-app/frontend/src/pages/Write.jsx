import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="add__content">
        <input type="text" placeholder="Title" />
        <div className="add__editor-container">
          <ReactQuill
            className="add__editor-container--editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="add__menu">
        <div className="add__item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">Upload Image</label>
          <div className="add__item--buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="add__item">
          <h1>Category</h1>
          <div className="add__item--category">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">art</label>
          </div>
          <div className="add__item--category">
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div className="add__item--category">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label htmlFor="technology">tecnology</label>
          </div>
          <div className="add__item--category">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label htmlFor="cinema">cinema</label>
          </div>
          <div className="add__item--category">
            <input type="radio" name="cat" value="design" id="design" />
            <label htmlFor="design">design</label>
          </div>
          <div className="add__item--category">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
