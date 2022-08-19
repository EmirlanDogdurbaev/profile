import classes from "./NavItem.module.scss";

const NavItem = () => {
  const NavLinks = ["link1", "link2", "link3", "link4"];
  const link = NavLinks.map((links) => (
    <li className={classes.link}>{links}</li>
  ));

  return <ul className={classes.NavItem}>{link}</ul>;
};

export default NavItem;
