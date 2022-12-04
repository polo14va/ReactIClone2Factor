import React, { useState, useEffect } from 'react'

const Content = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [campo1, setCampo1] = useState(0);
    const [campo2, setCampo2] = useState(0);
    const [campo3, setCampo3] = useState(0);
    const [campo4, setCampo4] = useState(0);


    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
    };
    const  validationok =(status) =>{
        setIsOk(status);
    }

    useEffect(() => {
        console.log("campo1: " + campo1);
        console.log("campo2: " + campo2);
        console.log("campo3: " + campo3);
        console.log("campo4: " + campo4);
        
        if (campo1 === "11" &&
            campo2 === "10" &&
            campo3 === "6" &&
            campo4 === "9" 
        ) {
            validationok(true);
        }
        else{
            validationok(false);
        }
    }, [campo1, campo2, campo3, campo4]);

    return (
        <div className="icloud" >
            
            <div className="texto">
                <img src={require('./assets/novios.png')} className='novios' alt='imagen de los novios'></img>
                <h1>Introduzca el codigo secreto</h1>
                <div className="">


                    <form onSubmit={handleSubmit} className='formulario'>
                        <input required name='1' className='input-container' onChange={(e) => setCampo1(e.target.value)} />
                        <input required name='2' className='input-container' onChange={(e) => setCampo2(e.target.value)} />
                        <input required name='3' className='input-container' onChange={(e) => setCampo3(e.target.value)} />
                        <input required name='4' className='input-container' onChange={(e) => setCampo4(e.target.value)} />
                    </form>
                </div>
                <div className="linea" />
                <p>Por los momentos vividos</p>
                {isOk && <h1>ENHORABUENA LA SIGUIENTE PISTA ES</h1> }
            </div>
            <div className="ayuda">
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>

                    {isHovering ? <p>Pues ya sabes paga una 🍻 a los novios</p> : <p>¿Necesitas ayuda?</p>}
                </div>

            </div>
        </div>
    )
}

export default Content