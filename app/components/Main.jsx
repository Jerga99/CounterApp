var React = require("react");

var Navbar = require("Navbar");

var Main = (props) => {
  return (
    <div>
      <div>
      <Navbar/>
        <div>
          <p>Main.jsx rendered</p>
         {props.children}
        </div>
      </div>
    </div>

  );
}

module.exports = Main;
