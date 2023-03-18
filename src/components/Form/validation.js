const validation =(userData)=>{

    let errors ={};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username ="Tiene que ser un gmail ";
    }
    if(!userData.username){
        errors.username ="Este campo no puede estar vacio";
    }
    if(userData.username.length > 35){
        errors.username="No puede ser mayor a 35 caracteres"
    }

    if(!userData.password.match(/\d/)){
        errors.password="La contraseña debe contener almenos un número";
    }
    if(userData.password.length < 6 || userData.password.length>10 ){
        errors.password="La contraseña debe contener entre 6 y 10 caracteres"
    }

    return errors;
}

export default validation;
