import React from 'react';
import { FcDocument } from "react-icons/fc";
import './style.css';

const DocumentPreviewAndDownload = ({ downloadLink }) => {

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="flip-animation">
            <FcDocument fontSize={100} />
          </div>
          <div className='pt-2'>
            <a href={downloadLink} className="btn-docs" download>Download <br />CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreviewAndDownload;
