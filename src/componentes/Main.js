import React from 'react';
import intro from "../armarios/intro.png";
import logo from '../armarios/logo Movelaria Fullstack-022.png';

const figure = {
    boxSizing:'content-box'
};

const foto = {
border: '1px solid white', 
borderRadius: '30px'
};



class Main extends React.Component{
    render(){
        return(
            <div className="container-fluid text-justify ">
                <div className="text-center mb-5" >
                    <img src={logo} width="300px" />
                </div>
                
                <main className="container-fluid ">
                    <div className="row justify-content-center">
                        <div className=" col-sm-12 col-md-12 col-lg-3        order-2 order-md-2 order-lg-1">
                            <p >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet massa eget erat malesuada sollicitudin eget a augue. Ut pharetra pulvinar tortor, ut venenatis nunc pellentesque sit amet. Curabitur aliquet lectus nec sem aliquam, id cursus lectus mattis. Suspendisse sed leo volutpat, efficitur augue quis, viverra massa. Integer vitae tempor ipsum. Donec pretium tempus ante eu ultricies. Praesent id dui tempor, condimentum eros nec, accumsan neque. Phasellus imperdiet vehicula urna sit amet tempus.
                            </p>
                        </div>
                        <div className="col-10 col-sm-10 col-md-10 col-lg-5 order-1 order-md-1 order-lg-2 border-box" style={figure}>
                            <figure>            
                                <img src={intro} alt="Foto não encontrada" title="Mobiliario" width="100%" style={foto} />
                            </figure>  
                        </div>
                        <div className=" col-sm-12 col-md-12 col-lg-3 order-3 order-md-3 order-lg-3">
                            <p>
                               Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet massa eget erat malesuada sollicitudin eget a augue. Ut pharetra pulvinar tortor, ut venenatis nunc pellentesque sit amet. Curabitur aliquet lectus nec sem aliquam, id cursus lectus mattis. Suspendisse sed leo volutpat, efficitur augue quis, viverra massa. Integer vitae tempor ipsum. Donec pretium tempus ante eu ultricies. Praesent id dui tempor, condimentum eros nec, accumsan neque. Phasellus imperdiet vehicula urna sit amet tempus.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        
        );
    };
};

export default Main;