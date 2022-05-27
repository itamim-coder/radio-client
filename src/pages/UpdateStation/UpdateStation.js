import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateStation = () => {
  const { register, handleSubmit } = useForm();

  const { id } = useParams();

  const [updateName, setUpdateName] = useState([]);
  // const [blogId, setBlogId] = useState("");

  const handleStationNameChange = (e) => {
    const updatedName = e.target.value;
    const updateStation = {
      stationName: updatedName,
      frequency: updateName.frequency,
    };

    setUpdateName(updateStation);
  };
  const handleFrequency = (e) => {
    const updatedFrequency = e.target.value;
    const updateStation = {
      stationName: updateName.stationName,
      frequency: updatedFrequency,
    };

    setUpdateName(updateStation);
  };
  useEffect(() => {
    fetch(`https://rocky-island-17503.herokuapp.com/allstation/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdateName(data));
  }, []);

  const handleUpdate = (e) => {
    fetch(`https://rocky-island-17503.herokuapp.com/allstation/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateName),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    alert("done");
    e.preventDefault();
  };

  return (
    <div>
      <NavBar></NavBar>
      <div>
        <form onSubmit={handleUpdate}>
          <h5>
            <label>Update Station Name </label>
          </h5>
          <input
            type="text"
            onChange={handleStationNameChange}
            defaultValue={updateName.stationName || ""}
          />
          <h5>
            <label>Update Station Frequency</label>
          </h5>
          <input
            type="text"
            onChange={handleFrequency}
            defaultValue={updateName.frequency || ""}
          />
          <br></br>
          <input className="btn fw-bold " type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateStation;
