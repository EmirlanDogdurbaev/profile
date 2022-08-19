import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.Header}>
      <div className={classes.title}>
        <h1>Dogdurbaev Emirlan</h1>
      </div>
      <section>
        <div>
          <p>
            К примеру, пройдём по массиву numbers, используя функцию JavaScript
            map(), и вернём элемент каждой итерации. Получившийся массив
            элементов сохраним в listItems:
          </p>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/jxfEEbssEVQ6ba1Vpo_v5xlyMaz6cJ_nnqcxYmpBAtQOYJ4EkxaaRo013Zd7HWB35XARYu54wDgY0cx_7iFNmxu1I7iAvIsKfW0b8YfN26yhSnJbRHOMVYJUucwN83Xzcr8EAdZnJVjhGsgeDQyWLAud6Nuev8aJDVdSnDYFlKs44zvmmXRP3VKGz3WY_vN7RMFZVbse9LEoEHwXvhwJDdr5pm-y_96iY2a_kbUpXJFVoViX2IGzEZD_35rDZXAL6FRjp_jaIgcgL4Z3QI24_eRGHnBk2580_QztKgWU_3D1jny5ePT0R-dFIo2apcKH5IV31dSJNigQiGUVQYFS9KSQgaKbLIpKIXghmUA6FmGPQTeIpLnopvbG-TWL8rhlvhfJo86mXL06tzdDNigx4dB2qlMbfifHQcPmq3igFDaH3WDAT9S_ASysx4mfFj3j5cwCjwEV04mrClnm3B5wGYXahPm4uMEXWVEovIVssw-UkBhceT-a4glR0oZZxf3poUmazeG4wceTlbS7uz6OG8VWo8wyDHoiECuhdWhXdMsUjzwj528eJIDygrrsDdCoMhBza1vGjfvcELCIwCxtGrsDot6ZqXE1sSDoLa4IeOWqf0zg7hlZn6adj65dr6F8_tPeRaRp1vOAyIDYZkrR2mkfaHhKgldt_dFO9daFwvRV1YcRHjeGTHccKK8MWPGcbJDr5d26nKUJotcr1tcCTZgOGalN4BgboioGMJSyIunHDp5N9S0GCxDQTLpIRQ=w358-h635-no?authuser=0"
            alt="profile photo"
          />
        </div>
      </section>
    </header>
  );
};

export default Header;
