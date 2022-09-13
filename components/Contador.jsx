import { Component } from "react";

export default class ContadorPage extends Component {
  state = {
    numero:
      this.props.valorInicial ??
      0 /* "??" atribui o valor padrão ao ZERO inicial */,
    passo: this.props.passo ?? 1,
  };
  // inc (){
  //     this.setState({
  //         numero:this.state.numero + 1
  //     })
  // }
  // dec (){
  //     this.setState({
  //         numero:this.state.numero + 1
  //     })
  // }
  // dec = () => {
  //     this.setState({
  //         numero: this.state.numero - 1
  //     })
  // }
  // inc = () => {
  //     this.setState({
  //         numero: this.state.numero + 1
  //     })
  // }
  dec = () => {
    this.setState({
      numero: this.state.numero - this.props.passo,
    });
  };
  inc = () => {
    this.setState({
      numero: this.state.numero + this.props.passo,
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Contador Usando Classes</h1>
          {/* <h2>{this.props.valorInicial}</h2> props a partir do this */}
          <h2>{this.state.numero}</h2>
          <input
            type="number"
            min={1}
            max={1000}
            value={this.state.passo}
            onChange={(e) => this.setState({ passo: +e.target.value })}
          />
          {/* <button onClick={() => this.inc()}>+</button> */}
          <button onClick={this.dec}>-</button>
          <button onClick={this.inc}>+</button>
        </div>
      </>
    );
  }
}
