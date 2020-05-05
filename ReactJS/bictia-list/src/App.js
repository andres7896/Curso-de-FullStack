import React from 'react';
import './App.scss';
import Header from './components/Header';
import Button from './components/Button';

function crearProducto(nombre) {
  return{
    nombre: nombre,
    estado: 'pendiente'
  }
}

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      nombreProducto: '',
      listaDeProductos: []
    }

    this.actuaizarnombreProducto = this.actuaizarnombreProducto.bind(this)
    this.agregarProducto = this.agregarProducto.bind(this)
  }

  agregarProducto(event){
    event.preventDefault();

    console.log(this.state.nombreProducto);
    const producto = crearProducto(this.state.nombreProducto)

    const lista = this.state.listaDeProductos.slice();
    lista.push( producto );

    this.setState({ listaDeProductos: lista, nombreProducto: '' });
  }

  actuaizarnombreProducto(event){
    this.setState({ nombreProducto: event.target.value });
  }

  pintarLista(){
    if (this.state.listaDeProductos.length === 0) {
      return null
    }

    return(
      <table className="table">
        <thead>
          <th></th>
          <th>#</th>
          <th>Producto</th>
          <th>Estado</th>
          <th>Eliminar</th>
        </thead>
        <tbody>
          {this.state.listaDeProductos.map((producto, index) => {
            return <tr key={index}>
              <td>
                <input type="checkbox"/>
              </td>
              <td> {index + 1} </td>
              <td> {producto.nombre} </td>
              <td> {producto.estado} </td>
              <td>
                <button className="btn btn-link text-danger">
                  Eliminar
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    );
  }

  eliminarProucto(){

  }

  render(){
    return(
      <div className="mi-contenedor card text-center">
        <Header></Header>
        <h1>¿Que voy a comprar hoy?</h1>

        <form className="P-5" onSubmit={this.agregarProducto}>
          <div className="input-group md-10">
            <input type="text" className="form-control" value={this.state.nombreProducto} onChange={this.actuaizarnombreProducto} required/>
            <div className="input-group-append">
              <Button>
                Agregar
              </Button>
            </div>
          </div>
        </form>

        <div className="card-body">
          {this.pintarLista()}
        </div>
      </div>
    )
  }
}

export default App;
