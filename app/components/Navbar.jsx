var React = require("react");
var {Link, IndexLink} = require("react-router");

var Navbar = () => {
    
    return (
        <div className="top-bar">
          <div>
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text"> React Timer App  </li>
                    <li> <IndexLink to="/" activeClassName = "active-link"> Timer </IndexLink> </li>
                    <li> <Link to="/" activeClassName ="active-link"> </Link></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/Jerga99/" target="_blank"> Filip Jerga </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        );
};

module.exports = Navbar;