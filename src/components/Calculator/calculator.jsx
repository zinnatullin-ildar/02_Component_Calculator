/* eslint-disable no-eval */
import { useState } from "react";
import styles from "./calculator.module.css";

// Разработайте приложение «Калькулятор» на базе create-react-app:
// Реализуйте 2 операции: сложение и вычитание
// Всё приложение разместите в одном компоненте
// Стилизуйте приложение с помощью CSS Modules, дизайн на ваше усмотрение
// Данные для кнопок калькулятора от 0 до 9 нужно хранить в массиве и выводить в разметку из него
// Калькулятор должен работать только с целыми числами
// На дисплее должно отображаться то, что набирается кнопками
// Помимо цифр должны быть ещё 4 кнопки:
// «+» сложение
// «-» вычитание
// «=» получить результат
// «С»- сброс
// После нажатия кнопки «=» данные на дисплее должны стать другого цвета, показывая, что это результат
// Если продолжить операцию, т.е.нажать «+» или «-», цвет должен вернуться к исходному.

// Дополнительное задание
// В созданном приложении «Калькулятор» данные всех кнопок калькулятора хранить в массиве и выводить из
// него в разметку.

const symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "=", "C"];

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState("");

    const handleOnClick = (symbol) => {
        // console.log(currentValue);
        const total = document.querySelector("#display");
        total.classList.remove(styles.total);

        setCurrentValue(`${currentValue}${symbol}`);
        if (symbol === "=") {
            total.classList.add(styles.total);
            setCurrentValue(eval(currentValue));
        } else if (symbol === "C") {
            setCurrentValue("");
        } else {
            setCurrentValue(`${currentValue}${symbol}`);
        }
    };

    return (
        <div className={styles.symbol}>
            <input
                placeholder=" Посчитаем?"
                type="text"
                defaultValue={currentValue}
                id="display"
                className={styles.display}
                // onChange={() => null}
            ></input>
            {symbols.map((symbol) => (
                <button
                    key={symbol}
                    type="submit"
                    className={styles.button}
                    onClick={() => handleOnClick(symbol)}
                >
                    {symbol}
                </button>
            ))}
        </div>
    );
};

export default Calculator;
