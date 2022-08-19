import NavItem from "../NavItem/NavItem";
import classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <NavItem />
    </nav>
  );
};

export default Nav;
