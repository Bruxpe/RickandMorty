import './App.css'
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About'
import Nav from './components/Nav/Nav.jsx'
import React, { useState, useEffect } from 'react'
import { Route,Routes , useLocation, useNavigate} from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App () { 
  const navigate = useNavigate() ;
  const location = useLocation(); // ME RETORNA UN OBJETO
  const [characters,setCharacter] = useState([]);
  const [access, setAccess] = useState(false);

  const username ="bruno@gmail.com";
  const password = "123asd";

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home")
    }
  }

  useEffect(()=>{
    !access && navigate('/')
  }, [access])

  const onSearch =(id) => {
    const URLBASE= 'https://be-a-rym.up.railway.app/api/'
    const KEY ='2f46be50fa94.a856306685d252aec9da'

    if(characters.find((char)=> char.id === id)){
      return alert("personaje repetido")
    }
      fetch(`${URLBASE}/character/${id}?key=${KEY}`)
      .then((response) =>response.json()) //lo pasamos a un arc. jason
      .then((data)=>{ // el personaje con el id que esta arriba
        if(data.name ){  
          setCharacter([...characters,data])
          //*           ([...character,data])
          //*           el valor viejo, y le  da el valor nuevo 
        }else{
          alert("algo salio mal, no esta el personaje, o es repetido")
        } 
    })
    
  };
 
  const onClose = (id)=>{ //!va a aqui
    setCharacter(
      characters.filter(((presonaje)=> presonaje.id !== id))
      //! !== que no sea exactamente iogual, OSEA
      //* Hara uno nuevo con todos los que no sean iguales 
    )


// <Nav /> debe que aparecer en todas las rutas.
// <Cards /> debe aparecer sólo en la ruta /home.
// <About /> debe aparecer sólo en la ruta /about.
// <Detail /> debe aparecer sólo en la ruta /detail/:detailId


  }
  return (

    <div className='App' style={{ padding: '25px' }}>
        
        {location.pathname === '/' ? <Form login={login}/> :<Nav onSearch={onSearch} /> }
     <Routes>
        <Route path='/Home' element={<Cards onClose={onClose}
              characters={characters}/>}/>
            {/* <Cards onClose={onClose}
              characters={characters}/> */}
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
        
              </Routes>
    </div>
  )
}

export default App
//onSearch={(characterID) => window.alert(characterID) 