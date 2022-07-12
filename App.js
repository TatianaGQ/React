
import React from 'react';
import './App.css';

/*
function Saludo()
{
  return (<div id = "hola"> Hola </div>)
  
}



function App() {
  return (
    <div> Bienvenidos a: <Saludo /> <Saludo /> </div>
  );
}
*/

//----------------------------------------------------
/*
function Saludo(props)
{
  return (<div id = "hola"> 
  <h3>{props.subtitulo}</h3>
  {props.texto} </div>)
  
}



function App() {
  return (
    <div> Bienvenidos a: <Saludo texto="Mi pagina" subtitulo = "inicio"/>
     <Saludo texto="Disfruta del contenido" subtitulo = "proceso" /> </div>
  );
}
*/

//-----------------------------------------------------------
/*
function Saludo(props)
{
  return (<div id = "hola"> 
  <h3>{this.props.subtitulo}</h3>
  {this.props.texto} </div>)
  
}*/

/*
class Saludo extends React.Component
{
  state =
  {
    show: true
  }


  
  */

//---------------------------------------------

class Saludo extends React.Component
{
  state =
  {
    show: true
  }

toggleShow = () =>
{
  this.setState({show: !this.state.show})
}

render()
  {
    if(this.state.show)
    {
      return(
      <div id = "hola"> 
       <h3>{this.props.subtitulo}</h3>
       {this.props.texto} 
       <button onClick={this.toggleShow}> cambiar </button>
         </div>
    )
    }
    else
    {
      return <h1>no hay elementos   
        <button onClick = {this.toggleShow}>retornar</button>
      </h1> 

    }
    
  }
}


function App() {
  return (
    <div> Bienvenidos a: <Saludo texto="Mi pagina" subtitulo = "inicio"/>
     <Saludo texto="Disfruta del contenido" subtitulo = "proceso" /> </div>
  );
}



//-------------------------------------------------

