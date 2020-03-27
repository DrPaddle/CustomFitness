import React,{useState,useEffect} from "react";
import StudentExerciseList from "./StudentExerciseList";
import StudentCustomForm from "./StudentCustomForm";
import axios from "axios";

export default function StudentCustomPlan(props) {
  console.log("props on StudentCustomPlan",props.exerciseData)

  const [customId,setCustomId]=useState([])

  const [state, setState] = useState([]);
  useEffect(() => {
    
    axios
      .get(`http://localhost:8080/custom_plan/${customId}/exercises`)
      .then(res => {
        console.log("res.data in studentcustomplan=====>", res.data);
        const exercises = res.data;

        setState(exercises);
      });
  }, [customId]);


  return (
    <section className="custom-plan">
      <StudentCustomForm studentData={props.studentData} className="custom-form" setCustomId={setCustomId}/>
      <StudentExerciseList exerciseData={state} />
    </section>
  );
}
