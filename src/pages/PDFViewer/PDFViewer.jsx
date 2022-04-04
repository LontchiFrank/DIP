import React, { ReactElement } from "react";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import packageJson from "../../../package.json";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useLocation } from "react-router-dom";

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const location = useLocation();
  const { pdfURL } = location.state;
  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@${packageJson.dependencies[
        "pdfjs-dist"
      ].replace(/^\^/, "")}/build/pdf.worker.min.js`}
    >
      <div id="pdfviewer">
        <Viewer
          fileUrl={pdfURL + "#toolbar=0"}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </Worker>
  );
};

export default PDFViewer;
