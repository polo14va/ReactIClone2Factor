import React, { useState, useEffect } from 'react';

const Content = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [campo1, setCampo1] = useState(0);
    const [campo2, setCampo2] = useState(0);
    const [campo3, setCampo3] = useState(0);
    const [campo4, setCampo4] = useState(0);
    const [campo5, setCampo5] = useState(0);
    const [campo6, setCampo6] = useState(0);
    const [campo7, setCampo7] = useState(0);
    const [campo8, setCampo8] = useState(0);


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
        console.log("campo5: " + campo5);
        console.log("campo6: " + campo6);
        console.log("campo7: " + campo7);
        console.log("campo8: " + campo8);
        
        if (campo1 === "11" &&
            campo2 === "10" &&
            campo3 === "6" &&
            campo4 === "9" &&
            campo5 === "3" &&
            campo6 === "2" &&
            campo7 === "3" &&
            campo8 === "1"
        ) {
            validationok(true);
        }
        else{
            validationok(false);
        }
    }, [campo1, campo2, campo3, campo4, campo5, campo6, campo7, campo8]);

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
                        <input required name='5' className='input-container' onChange={(e) => setCampo5(e.target.value)} />
                        <input required name='6' className='input-container' onChange={(e) => setCampo6(e.target.value)} />
                        <input required name='7' className='input-container' onChange={(e) => setCampo7(e.target.value)} />
                        <input required name='8' className='input-container' onChange={(e) => setCampo8(e.target.value)} />
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