import { Link } from "react-router-dom";
import styles from "../css/Menu.module.css";



export default function Menu() {
 

    return (
        <>

            <div className={styles['main']}>
                <div className={styles['container']}>
                    <div className={styles['title-one']}>
                        <div className={styles['title-text']}><span className={styles['black']}>РАБОЧИЙ</span> <span className={styles['white']}>ЛЮЛЬКИ</span></div>
                    </div>
                    <div className={styles['practice-block']}>
                        <div className={styles['labs']}>
                            <div className={styles['labs-title']}>Лабораторные <br />работы</div>
                            <div className={styles['corner']}></div>
                            <div className={styles['labs-container']}>
                                <Link to={`/labOne/`}>
                                    <div className={`${styles['lab']} ${styles['lab-one']}`}>Сигнализация</div>
                                </Link>
                                <div className={`${styles['lab']} ${styles['lab-two']}`}>Подготовка к выполнению <br />работ в люльке</div>
                                <div className={`${styles['lab']} ${styles['lab-three']}`}>Средства индивидуальной <br />защиты от падения с высоты</div>
                                <div className={`${styles['lab']} ${styles['lab-four']}`}>Оказание первой помощи</div>
                            </div>
                        </div>
                        <div className={styles['tasks-and-test']}>
                            <div className={styles['tasks']}>
                                <img className={styles["tasks-icon"]} src="./img/menu/tasks-icon.png" />
                                <div className={styles["tasks-text"]}>Задания</div>
                            </div>
                            <div className={styles['test']}>
                                <img className={styles["test-icon"]} src="./img/menu/test-icon.png" />
                                <div className={styles["test-text"]}>Итоговый тест</div>
                            </div>
                        </div>
                        <div>
                            <div className={styles["title-two"]}>Электронный <br />практикум</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}