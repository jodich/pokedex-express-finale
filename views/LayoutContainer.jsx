var React = require("react");
var Navigation = require("./Navigation.jsx"); 

class LayoutContainer extends React.Component {
  render() {

    return (
      <html>
        <head>
          <title>POKÈDEX</title>
          <link rel="stylesheet" href="/style.css"/>
        </head>
        <body>
          <div className="main">
            <Navigation>
            </Navigation>
              {this.props.children}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = LayoutContainer;
