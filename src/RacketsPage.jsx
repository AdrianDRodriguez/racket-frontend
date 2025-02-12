import { RacketsIndex } from "./RacketsIndex";
import axios from "axios";
import { useEffect, useState } from "react";
import { RacketsNew } from "./RacketsNew";

export function RacketsPage() {
  const [rackets, setRackets] = useState([])
    
    const handleIndex = () => {
      console.log("handleIndex");
      axios.get("/rackets.jason").then((response) =>{
        console.log(response.data);
        setRackets(response.data);
      });
    };

    // const handleCreate = () => {
    //   console.log("handleCreate";)
    // };

    useEffect(handleIndex, []);


  
  return (
    <main>
      <RacketsIndex rackets={rackets} />
      <RacketsNew />
    </main>
  );
}
