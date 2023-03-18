import Card from '../Card/Card';
import style from './Cards.module.css'

function Cards({characters,onClose}) { //* Pordemos hacer destruturin directo a donde llega
   //const { characters } = props; //? --> Esta recibiendo un arreglo [{.},{.}]
  //*       [{...},{...},{...},{...},{...}]
   return (
      <div className={style.container}>
         { //*--> codigo javascritp, ponle llaves
         characters.map(({id,name,species,gender,image}) => {
            return < Card 
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={onClose}asdsa
            />
         } )
         //* ers un conponent, no fucion , como esta en {Return}
         }
      </div>
   );
}

export default Cards;