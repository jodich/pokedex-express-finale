var React = require("react");
var LayoutContainer = require("../LayoutContainer.jsx");


class Pokemon extends React.Component {
  render() {
    return (
      <LayoutContainer>
      <h3>{this.props.pokemon.name}</h3>
        <div className="pokemon-list">
              <div className="pokemon-attribute">
                id: {this.props.pokemon.id}
              </div>
              <div className="pokemon-attribute">
                num: {this.props.pokemon.num}
              </div>
              <div className="pokemon-attribute">
                <img src={this.props.pokemon.img}/>
              </div>
              <div className="pokemon-attribute">
                height: {this.props.pokemon.height}
              </div>
              <div className="pokemon-attribute">
                weight: {this.props.pokemon.weight}
              </div>
              <div className="pokemon-attribute">
                candy: {this.props.pokemon.candy}
              </div>
              <div className="pokemon-attribute">
                candy_count: {this.props.pokemon.candy_count}
              </div>
              <div className="pokemon-attribute">
                egg: {this.props.pokemon.egg}
              </div>
              <div className="pokemon-attribute">
                avg_spawns: {this.props.pokemon.avg_spawns}
              </div>
              <div className="pokemon-attribute">
                spawn_time: {this.props.pokemon.spawn_time}
              </div>

              <form className="pokemon-form" method="POST" action={"/pokemon/"+ this.props.pokemon.id}>
                <input className="btn_input_style del" type="submit" value="Catch It!" />
              </form>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = Pokemon;