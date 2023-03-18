import style from './SearchBarr.module.css'
import {useState} from 'react';

function SearchBar({onSearch}) { //? recibe una funcion

   const [id, setId] = useState("");

   const handleChange = (event)=>{
      setId(event.target.value)
   };
  
   return (
      <div className={style.searchbar}>
         <input  className={style.searinput} type='search'
         onChange={handleChange}/>

         <button 
         className={style.buttoninput} 
         onClick={()=>onSearch(id) }>Agregar
         </button> 

      </div>
   );
}
export default SearchBar