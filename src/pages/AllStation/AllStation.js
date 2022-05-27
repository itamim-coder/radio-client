import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import {  Link } from "react-router-dom";

const AllStation = () => {
const [allStations, setAllStations] = useState([]);
const [control , setControl] = useState(false)
const { id } = useParams()

    useEffect(() => {
        fetch("https://rocky-island-17503.herokuapp.com/allstation")
          .then((res) => res.json())
          .then((data) => setAllStations(data));
      }, [control]);


      const handleDelete = (_id) =>{
        alert("are you sure?");
        fetch(`https://rocky-island-17503.herokuapp.com/allstation/${_id}`,{
           method: "DELETE", 
        })
        .then(res => res.json())
        .then(data => { console.log(data);
            if(data.deletedCount) {
                setControl(!control)
                
            }
        })
console.log(_id)

    }
  return (
    <div>
        <NavBar></NavBar>
        <div className='container'>
        <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Frequency</th>
                      <th scope="col">Radio Station Name</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      allStations.map((allStation ,index)=> <tr>
                        <th scope="row" key={allStation._id}>{index+1}</th>
                     
                        <td>{allStation.frequency}</td>
                        <td>{allStation.stationName}</td>
                        <td>
                          <Link to={`/update/${allStation._id}`}>Update</Link>
                          </td>
                        <td><button onClick={()=>handleDelete(allStation?._id)}> Delete</button></td>
                   
                        {/* <td>
                          {
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <input
                                onClick={() => handleUpdate(merchant?._id)}
                                {...register("merchants")}
                                type="submit"
                                value="approve"
                                className="btn-bg fw-bold btn rounded-pill"
                              />
                            </form>
                          }
                        </td> */}
                      </tr>)
                    }
                  </tbody>
                </table>
        </div>
    </div>
  )
}

export default AllStation