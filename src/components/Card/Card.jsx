import style from "./Card.module.css"
import { Link } from "react-router-dom";
function Card({onClose,name,species,gender,image,id}) { //? Rick
                        //? te estan llegando propiedades
   //* props como pense---> { name: "", species: "", gender: ""}
   //*                        ^           ^           ^
   //* tengo un objeto con propiedades, cambio su estrutura pero 
   //* se puede entrar y trabajar con el 

   return (
      <div className={style.container}>
         <button className={style.closebutoon} 
            onClick={()=>onClose(id)}>   X
         </button>

         <img  src={image} alt="" />
         <Link to={`/detail/${id}`}><h2>Name: {name}</h2></Link>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <hr />
      </div>
   );
}

export default Card;