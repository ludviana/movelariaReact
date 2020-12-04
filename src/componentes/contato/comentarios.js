import React from 'react';

class Comentarios extends React.Component{

    render(){
        let bgr = {backgroundColor: 'rgba(128, 128, 128, 0.596)'};
        return(
            <section className="table table-striped table-borderless text-white" style={bgr}>
                <table >
                    <tbody>
                        <tr>
                            <th scope="col">N°msg</th>
                            <th scope="col">Nome Cliente</th>
                            <th scope="col">Tipo de msg</th>
                            <th scope="col">Mensagem</th>
                        </tr>              
                        <tr>
                            <td>{this.props.id}</td>
                            <td>{this.props.nome}</td>
                            <td>{this.props.tipo}</td>
                            <td>{this.props.mensagem}</td>
                        </tr>
                    </tbody>
                </table>
            </section>


        )
    }
}

export default Comentarios;