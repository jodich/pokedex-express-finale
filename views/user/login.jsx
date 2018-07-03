var React = require("react");
var LayoutContainer = require("../LayoutContainer.jsx");

class Login extends React.Component {
  render() {
    return (
      <LayoutContainer>
        <h2>LOGIN</h2>
        <div className="all_forms">
          <form className="form_page" method="POST" action="/user/login">
            <div>
              <input className="input_style" name="email" type="text" placeholder="email" />
              <input className="input_style" name="password" type="text" placeholder="password"/>
            </div>
            <input className="btn_input_style" type="submit" value="Submit" />
          </form>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = Login;
