import React,{useState} from "react";
import axios from "axios";
import Trainer_profile from "../components/Trainer/Trainer_profile";

export default function Trainer() {

  const [state, setState] = useState("trainername");

  axios.get('http://localhost:8080/trainers')
    .then(res => {
      const trainers = res.data[0]
      setState(trainers)
    })
    .catch(error => {
    console.log(error);
    })


  return (
    <div>
      <Trainer_profile trainerData={state}/>
    </div>
  )
}