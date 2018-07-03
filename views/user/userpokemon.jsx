var React = require("react");
var LayoutContainer = require("../LayoutContainer.jsx");


class UserPoke extends React.Component {
  render() {

    const pokemonsList = this.props.pokemon.map ( (pokemon) => {
     
     return (
        <div className="thumbnail" key={pokemon.id}>
          <div className="pokemon_name">{pokemon.name}</div>

          <a href={'/pokemon/'+pokemon.id}> <div className="pokemon_img"><img src={pokemon.img}/></div> </a>

          <form className="thumbnail_btn" method="GET" action={'/pokemon/'+pokemon.id+'/edit'}>
            <input id="edit_btn" className="btn" type="submit" value="Edit" />
          </form>
          <form className="thumbnail_btn" method="DELETE" action={'/pokemon/'+pokemon.id+'/delete'}>
            <input id="delete_btn" className="btn" type="submit" value="Delete" />
          </form>

          <div className="pokemon_num">{pokemon.num}</div>
        </div>
        );

    })

    return (
      <LayoutContainer>
        <div className="welcome"><h1>My Pokemon</h1></div>
          <div className="all_thumbnail">
            {pokemonsList}
          </div>
      </LayoutContainer>
    );
  }
}

module.exports = UserPoke;
