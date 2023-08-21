import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  // UseState of Name and Email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // This is used to Navigate from Submit to Read Page
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  // This function helps to Submit all data
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://64c4816867cfdca3b660ced4.mockapi.io/crud",
        {
          name: name,
          email: email,
          header,
        }

        // Read history variable .. upside
      )
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      {/* Create Page Heading */}
      <h2> Create</h2>

      <form>
        {/* To Get Name Detail  */}
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* To Get Email Detail */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
