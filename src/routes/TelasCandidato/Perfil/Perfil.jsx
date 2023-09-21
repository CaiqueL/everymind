import { Outlet } from "react-router-dom";
import { BigCard } from "../../../components/BigCard";

function ComponenteAleatorio(){
  return(
    <h1 style={{backgroundcolor:"black"}}>componente aleatorio teste</h1>
  )
}

const Perfil = () => {
    return (
      <div>
        <BigCard/>
      </div>  
    )
};

export default Perfil;
