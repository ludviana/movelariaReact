import React from 'react';

const style = {
    border: '1px solid white',
    backgroundColor: 'rgba(29, 29, 29, 0.2)'
}

class Sobre extends React.Component{
    render(){
        return(
            <div className=" d-flex flex-column flex-md-row">
                <div className="card text-white mt-5 mr-2 ml-3 mb-5" style={style}>
                    <div className="card-title text-center mt-4"><h4>Sobre nós</h4></div>
                    <div className="card-body text-justify">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet massa eget erat malesuada sollicitudin eget a augue. Ut pharetra pulvinar tortor, ut venenatis nunc pellentesque sit amet. Curabitur aliquet lectus nec sem aliquam, id cursus lectus mattis. Suspendisse sed leo volutpat, efficitur augue quis, viverra massa. Integer vitae tempor ipsum. Donec pretium tempus ante eu ultricies. Praesent id dui tempor, condimentum eros nec, accumsan neque. Phasellus imperdiet vehicula urna sit amet tempus.

                        Maecenas molestie nibh maximus magna fermentum pharetra. Nunc luctus facilisis lacus at vestibulum. Mauris malesuada, sapien sit amet tempor sagittis, magna nunc congue neque, non vestibulum turpis neque at justo. Nullam semper lobortis eros at luctus. Donec volutpat justo at augue luctus tempor. Aliquam non purus tellus. Duis cursus ac turpis non porta. Sed porttitor congue turpis, in sodales velit luctus et. Sed placerat, mi vel fringilla sollicitudin, neque tortor mattis ipsum, et lobortis orci risus sed eros. Etiam feugiat elementum volutpat. Morbi mattis, risus nec pulvinar dictum, sapien lectus pulvinar est, nec consectetur massa tortor quis libero. Integer dignissim massa velit, vel bibendum tortor euismod vitae.</p>
                    </div>
                </div>
                <div className="card  text-white mt-5 ml-2 mr-3 mb-5" style={style}>
                    <div className="card-title text-center mt-4"><h4>O que fazemos</h4></div>
                    <div className="card-body text-justify">
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet massa eget erat malesuada sollicitudin eget a augue. Ut pharetra pulvinar tortor, ut venenatis nunc pellentesque sit amet. Curabitur aliquet lectus nec sem aliquam, id cursus lectus mattis. Suspendisse sed leo volutpat, efficitur augue quis, viverra massa. Integer vitae tempor ipsum. Donec pretium tempus ante eu ultricies. Praesent id dui tempor, condimentum eros nec, accumsan neque. Phasellus imperdiet vehicula urna sit amet tempus.

                        Maecenas molestie nibh maximus magna fermentum pharetra. Nunc luctus facilisis lacus at vestibulum. Mauris malesuada, sapien sit amet tempor sagittis, magna nunc congue neque, non vestibulum turpis neque at justo. Nullam semper lobortis eros at luctus. Donec volutpat justo at augue luctus tempor. Aliquam non purus tellus. Duis cursus ac turpis non porta. Sed porttitor congue turpis, in sodales velit luctus et. Sed placerat, mi vel fringilla sollicitudin, neque tortor mattis ipsum, et lobortis orci risus sed eros. Etiam feugiat elementum volutpat. Morbi mattis, risus nec pulvinar dictum, sapien lectus pulvinar est, nec consectetur massa tortor quis libero. Integer dignissim massa velit, vel bibendum tortor euismod vitae.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sobre;