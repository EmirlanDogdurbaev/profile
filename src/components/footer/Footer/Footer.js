import classes from "./Footer.module.scss"

const Footer = () => {
    return ( 
        <footer className={classes.Footer}>
            <div>
               <ul>
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
                <li>test5</li>
               </ul>
            </div>
        </footer>
     );
}
 
export default Footer;