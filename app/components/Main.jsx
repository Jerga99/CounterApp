var React = require("react");

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx rendered</p>
         {props.children}
        </div>
      </div>
    </div>

  );
}

module.exports = Main;
