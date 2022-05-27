import React from "react";
import NavBar from "../NavBar/NavBar";
import { useForm } from "react-hook-form";

const AddStation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://rocky-island-17503.herokuapp.com/addstation", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("success");
        }
      });

    console.log(data);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="col-md-5 mx-auto">
        <h5>Add Radio Station</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="label my-3">Station Name </h6>
          <input
            type="text"
            placeholder="Station Name"
            className="form-control"
            {...register("stationName", { required: true, maxLength: 80 })}
          />

          <br />
          <h6 className="label my-3">Station Frequency</h6>
          <input
            type="number"
            placeholder="Frequency"
            className="form-control"
            {...register("frequency", { required: true, maxLength: 100 })}
          />

          <input className="btn fw-bold " type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddStation;
