import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div>
        <div className={classes.title}>
          <h1>Dogdurbaev Emirlan</h1>
        </div>
        <section className={classes.AboutSection}>
          <div className={classes.firstSection}>
            <p>
              К примеру, пройдём по массиву numbers, используя функцию
              JavaScript map(), и вернём элемент каждой итерации. Получившийся
              массив элементов сохраним в listItems:
            </p>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
