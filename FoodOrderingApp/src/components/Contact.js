import React from "react";

const Contact = () => {
  return (
    <div className=" bg-gray-100 font-bold m-auto ">
      Contact
      <div className="m-auto w-6/12">
        <form className="bg-gray-100 items-center m-auto ">
          <input
            type="text"
            placeholder="Name"
            className="border border-solid p-2 m-2 rounded-lg"
          ></input>

          <input
            type="text"
            placeholder="Message"
            className="border border-solid p-2 m-2 rounded-lg"
          ></input>

          <button className="bg-blue-800 rounded-lg text-white p-2 m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
