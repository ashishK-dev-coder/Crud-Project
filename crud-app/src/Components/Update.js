import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  // UseNavigate hook is used to Render on Update page when Update btn click
  const navigate = useNavigate();

  // UseState hooks is used to Get and Set data when onChange update details
  const [id, setid] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  // UseEffect hook is used to Get data from local storage when update btn clicked and Page Reload
  useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
    setemail(localStorage.getItem("email"));
  }, []);

  // This function is used to Update the New details and save in MockApi site
  // There have (preventDeafault) function to overcome reload page
  const handleupdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://64c4816867cfdca3b660ced4.mockapi.io/crud/${id}`, {
        name: name,
        email: email,

        // After clicking on Update Btn then it redirect to read page
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <h1> Update Operation</h1>

      <form>
        {/* This is Update Name Section */}
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            value={name}
            id="exampleInputPassword1"
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        {/* This is Update Email Section */}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            aria-describedby="emailHelp"
            onChange={(e) => setemail(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        {/* This is Update button */}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleupdate}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
