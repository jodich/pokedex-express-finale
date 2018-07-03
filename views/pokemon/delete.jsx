var React = require("react");
var LayoutContainer = require("../LayoutContainer.jsx");

class Delete extends React.Component {
  render() {

    return (
      <LayoutContainer>
          <h2>Delete this Pokemon?</h2>
           <div className="pokemon-list">
              <div className="pokemon-attribute">
                ID: {this.props.pokemon.id}
              </div>
              <div className="pokemon-attribute">
                Num: {this.props.pokemon.num}
              </div>
              <div className="pokemon-attribute">
                <img src={this.props.pokemon.img}/>
              </div>
              <div className="pokemon-attribute">
                <h3>{this.props.pokemon.name}</h3>
              </div>
              <form
                className="pokemon-form"
                method="POST"
                action={"/pokemon/"+ this.props.pokemon.id + "?_method=DELETE"}
              >
                <input className="btn_input_style del" value="Delete" name="submit" type="submit" />
              </form>
            </div>
      </LayoutContainer>
    );
  }
}

module.exports = Delete;
