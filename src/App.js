import styles from "./App.module.css";
import Calculator from "./components/Calculator/calculator";

export const App = () => {
    return (
        <div className={styles.app}>
            <h1>Калькулятор</h1>
            <div className={styles.container}>
                <Calculator />
            </div>
        </div>
    );
};
