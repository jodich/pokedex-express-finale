var React = require("react");
var LayoutContainer = require("../LayoutContainer.jsx");

class Edit extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <h3>Editing: {this.props.pokemon.name}</h3>
        <div className="all_forms edit">
        <img src={this.props.pokemon.img}/>
        <form
          className="pokemon-form form_page"
          method="POST"
          action={"/pokemon/"+ this.props.pokemon.id + "?_method=PUT"}
        >
    <div>
          <div className="pokemon-attribute">
            <input
              name="num"
              type="text"
              placeholder="num"
              defaultValue={this.props.pokemon.num}
              className="input_style"
            />
          </div>
          <div className="pokemon-attribute">
            <input
              name="name"
              type="text"
              placeholder="name"
              defaultValue={this.props.pokemon.name}
              className="input_style"
            />
          </div>
    </div>
    <div>
          <div className="pokemon-attribute">
            <input
              name="img"
              type="text"
              placeholder="image"
              defaultValue={this.props.pokemon.img}
              className="input_style"
            />
          </div>
            <div className="pokemon-attribute">
              <input
                name="height"
                type="text"
                placeholder="height"
                defaultValue={this.props.pokemon.height}
                className="input_style"
              />
            </div>
    </div>
    <div>
            <div className="pokemon-attribute">
              <input
                name="weight"
                type="text"
                placeholder="weight"
                defaultValue={this.props.pokemon.weight}
                className="input_style"
              />
            </div>
            <div className="pokemon-attribute">
              <input
                name="candy"
                type="text"
                placeholder="candy"
                defaultValue={this.props.pokemon.candy}
                className="input_style"
              />
            </div>
    </div>
    <div>
          <div className="pokemon-attribute">
            <input
              name="candy_count"
              type="text"
              placeholder="candy count"
              defaultValue={this.props.pokemon.candy_count}
              className="input_style"
            />
          </div>
          <div className="pokemon-attribute">
            <input
              name="egg"
              type="text"
              placeholder="egg"
              defaultValue={this.props.pokemon.egg}
              className="input_style"
            />
          </div>
    </div>
    <div>
          <div className="pokemon-attribute">
            <input
              name="avg_spawns"
              type="text"
              placeholder="average spawn"
              defaultValue={this.props.pokemon.avg_spawns}
              className="input_style"
            />
          </div>
          <div className="pokemon-attribute">
            <input
              name="spawn_time"
              type="text"
              placeholder="spawn time"
              defaultValue={this.props.pokemon.spawn_time}
              className="input_style"
            />
          </div>
    </div>
          <input className="btn_input_style" name="submit" type="submit" />
        </form>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = Edit;
