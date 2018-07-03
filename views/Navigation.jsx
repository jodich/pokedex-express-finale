var React = require("react");


class Navigation extends React.Component {
  render() {

    const home = 

    ( <form className="form_style" method="GET" action="/">
        <input id="home_btn" className="btn" type="submit" value="Home" />
      </form> );

    const newPoke = 

    ( <form className="form_style" method="GET" action="/pokemon/new">
        <input id="newPoke_btn" className="btn" type="submit" value="New Pokemon" />
      </form> );

    const sortBy = 

    ( <form className="form_style" method="GET" action="/pokemon">
        <input className="btn" type="submit" value="Sort By Name"/>
        <input type="hidden" name="sortby" value="name"/>
      </form> )

    const userPoke = 

    ( <form className="form_style" method="GET" action="/user">
        <input id="newPoke_btn" className="btn" type="submit" value="User's Pokemon" />
      </form> );


    const newUser = 

    ( <form className="form_style" method="GET" action="/user/new">
        <input id="newUser_btn" className="btn" type="submit" value="New User" />
      </form> );

    const login = 

    ( <form className="form_style" method="GET" action="/user/login">
        <input id="login_btn" className="btn" type="submit" value="Login" />
      </form> );

    const logout = 

    ( <form className="form_style" method="GET" action="/user/logout">
        <input id="logout_btn" className="btn" type="submit" value="Logout" />
      </form> );



    return (
      <div className="navigation">
        <div id="nav_left">{home} {newPoke} {sortBy} {userPoke}</div>
        <div id="nav_right">{login} {logout} {newUser}</div>
      </div>




    // file path method
    // return (
    //   <div className="navigation">
    //     <a className="link_nav" href="/">Home</a>
    //     <a className="link_nav" href="/pokemon/new">New Pokemon</a>
    //     <a className="link_nav" href="/?sortby=name">Sort By Name</a>
    //     <a className="link_nav" href="/user">My Pokemon</a>
    //     <a className="link_nav" href="/user/new">New User</a>
    //     <a className="link_nav" href="/user/login">Login</a>
    //     <a className="link_nav" href="/user/logout">Logout</a>
    //   </div>

// basically.... <a href='/'> and <form method="GET" action"/> is the same thing?








    );
  }
}

module.exports = Navigation;
