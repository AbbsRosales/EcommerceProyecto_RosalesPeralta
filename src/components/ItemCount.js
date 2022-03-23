import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../imgs/pincel_redondo.jpg';
import '../ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) =>{

    const [acount, setAcount] = useState(initial);

    const agregarCarrito = () =>{
        if(acount < stock){
            setAcount(acount + 1);
        }else{
            console.log("Stock no disponible.");
        }
    };

    const eliminarCarrito = () =>{
        if(acount > 0){
            setAcount(acount - 1);
        }
    };

    const comprar = () =>{
        onAdd();
    }

    return(
        <>
        <div class="card-body">
            <img class="card-img-top imagenStock" src={img} alt="Pincel redondo"/>
            <h5 class="card-title">Pincel redondo</h5>
            <h5>{acount}</h5>
            <button onClick={agregarCarrito} class="btn btn-dark" >Agregar</button>
            <button onClick={eliminarCarrito} class="btn btn-dark">Borrar</button>
            <button onClick={comprar} class="btn btn-dark">Comprar</button>
        </div>
        </>
    );
}
