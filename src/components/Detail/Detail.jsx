import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
//!AXIOS
//! importas el AXIOS

const Detail =() => {
    const URLBASE= 'https://be-a-rym.up.railway.app/api/'
    const KEY ='2f46be50fa94.a856306685d252aec9da'

    const {detailId} = useParams();
    console.log(detailId)
    
    const [character, setCharacter] = useState({}); 
    console.log(character)
    useEffect(()=>{
        axios(`${URLBASE}/character/${detailId}?key=${KEY}`)
            .then((response) =>
            setCharacter(response.data)    
        )

    },[])

    return(
        <div>
            {
                character.name?
                (<>
                    <div>Nombre: {character.name}</div>       
                    <div>Estado: {character.status}</div>       
                    <div>Especie: {character.species}</div>       
                    <div>Origen: {character.origin?.name}</div>       
            
                    <img src={character.image} alt="img" />
                
                </>)
                :(
                    <h3>Loading....</h3>
                )
            }
                   
        </div>

    )
}

export default Detail;