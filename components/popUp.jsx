import React from "react";

const popUp = (props) => {
  return (
        <div className="fixed  bg-[#00000050] items-centers w-full h-full top-0 left-0">
          <div className="fixed text-center w-[25%]  ml-[560px]  whitespace-pre-line h-auto max-h-[70vh] mt-[calc(100vh-85vh-20px)] bg-[#fff] rounded p-5 border-solid border-[#999] border overflow-auto">
            {props.message}
           
            <button
              onClick={props.handleClose}
              className="w-1/2 ml-[100px] h-[30px] p-[7px] border-none bg-[#F7714E] text-white rounded-[5px] font-bold text-sm cursor-pointer mt-[20px] mb-[0px]"
            >
              Back
            </button>
          </div>
        </div>
  );
};
export default popUp;
