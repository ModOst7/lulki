import { Link } from "react-router-dom";
import styles from "../../css/LabOne.module.css";

import LabOne1 from "./labOne1";
import { Outlet } from "react-router-dom";

export default function LabOne() {


    return (
        <>
<Outlet />
{/*
            <div className={styles['main']}>
                <div className={styles['container']}>
                    <div className={styles['description-block']}>
                        <div className={styles['text']}>
                            Перед началом выполнения работ, в ходе которых выполняется перемещение людей с применением подъемника, необходимо соблюсти ряд мер безопасности. Основные требования к выполнению таких работ отражены в «Правилах безопасности опасных производственных объектов, на которых используются подъемные сооружения», утвержденных Приказом Ростехнадзора от 26.11.2020 N 461, а также прописываются в производственных инструкциях по безопасному ведению работ для рабочих, находящихся на подъемнике.
                            Выполните задание, чтобы проверить свое знание требований безопасности для рабочих люльки.


                        </div>
                        <div className={styles['navigation']}>
                            <Link to={`/menu/`}>
                                <div className={styles['back']}>
                                    <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                            </Link>
                            <Link to={`/labOne/1`}>
                                <div className={styles['next']}>
                                    <div className={styles['next-text']}>ДАЛЕЕ {'>'}</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles['title-block']}>
                        <div className={styles['title-one']}>Лабораторная работа</div>
                        <div className={styles['title-two']}>Подготовка <br />к выполнению работ <br />в люльке</div>
                        <div className={styles['title-three']}>
                            <div className={styles['title-three-1']}>Рабочий люльки</div>
                            <div className={styles['title-three-2']}>Электронный практикум</div>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </>
    );
}