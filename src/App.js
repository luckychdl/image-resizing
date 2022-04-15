import React from "react";
import UploadForm from "./components/uploadForm";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <h2>사진첩</h2>
      <UploadForm />
    </div>
  );
};

export default App;
