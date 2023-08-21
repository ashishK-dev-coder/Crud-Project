import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  // UseState hook used to filled data from getdata function
  const [data, setdata] = useState([]);

  // This function used to Get data from API
  function getdata() {
    axios
      .get("https://64c4816867cfdca3b660ced4.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  }

  // This function used to Delete data from Read page
  function handledelete(id) {
    axios
      .delete(`https://64c4816867cfdca3b660ced4.mockapi.io/crud/${id}`)
      .then(() => {
        getdata();
      });
  }

  // This is a arrow function that take data from Edit btn and store in local storage
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // UseEffect hook is used to Get data when the page will reload
  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      {/* Static Naming on page */}
      <h1> Read Operation</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {/* This function is used to Get Each Data from Usestate data operation  */}
        {data.map((eachdata) => {
          return (
            <>
              <tbody>
                <tr>
                  {/* Putting data on Read Page from map function (eachdata) */}
                  <th scope="row">{eachdata.id} </th>
                  <td>{eachdata.name} </td>
                  <td>{eachdata.email} </td>
                  <td>
                    {/* Link is used to Navigate when the Edit btn clicked  */}
                    <Link to="/update">
                      <button
                        className="btn-success"
                        // Arrow function used to Store data in local storage
                        onClick={() =>
                          setToLocalStorage(
                            eachdata.id,
                            eachdata.name,
                            eachdata.email
                          )
                        }
                      >
                        {" "}
                        Edit{" "}
                      </button>
                    </Link>
                  </td>

                  {/* This is a delete btn and arrow function used to delete data */}
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handledelete(eachdata.id)}
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
