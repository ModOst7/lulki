import { Link } from "react-router-dom";
import styles from "../../css/LabOne.module.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function LabOne() {

    const [entrance, setEntrance] = useState(true);
    const [lab, setLab] = useState(false);

    const startLab = () => {
        setEntrance(false);
        setLab(true);
    }

    const anim1 = () => {
       let icon2 = document.getElementById("icon-1-2");
       if (icon2) {
        icon2.style.opacity = "1";
        setTimeout(() => {icon2!.style.opacity = "0";}, 1000);
       }

    }

    const dropHandler = () => {
        console.log('asd');
    }

    const dragOverHandler = () => {
        console.log('AAAAAA');
    }

    const dragStart = (e:any) => {
        e.target.style.opacity="1";
    }

    const dragEnter = (e:any) => {
        console.log('dragEnter');
    }

    const drop = () => {
        console.log('drop');
    }

    const dragOver = (e:any) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('dragOver');
    }

    return (
        <>
            <div className={`${styles['main-entrance']} ${entrance? '' : styles['closed']} `}>
                <div className={styles['container-entrance']}>
                    <div className={styles['description-block']}>
                        <div className={styles['text']}>
                            Перед началом выполнения работ, в ходе которых выполняется перемещение людей с применением подъемника, необходимо соблюсти ряд мер безопасности. Основные требования к выполнению таких работ отражены в «Правилах безопасности опасных производственных объектов, на которых используются подъемные сооружения», утвержденных <a className={styles['link']} href="https://docs.cntd.ru/document/573275657?section=text">Приказом Ростехнадзора от 26.11.2020 N 461</a>, а также прописываются в производственных инструкциях по безопасному ведению работ для рабочих, находящихся на подъемнике.
                            Выполните задание, чтобы проверить свое знание требований безопасности для рабочих люльки.


                        </div>
                        <div className={styles['navigation']}>
                            <Link to={`/menu/`}>
                                <div className={styles['back']}>
                                    <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                            </Link>
                            <div onClick={startLab} className={styles['next']}>
                                <div  className={styles['next-text']}>ПРИСТУПИТЬ К ВЫПОЛНЕНИЮ {'>'}</div>
                            </div>
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

            <div className={`${styles['main-steps']} ${lab? styles['vis'] : ''} `}>
                <div className={styles['container-steps']}>
                    <div className={styles['title-steps']}>
                        <div className={styles['title-one-steps']}>Лабораторная работа</div>
                        <div className={styles['title-two-steps']}>Сигнализация</div>
                    </div>
                    <div className={styles['workplace-steps']}>
                        <div className={styles['section-one']}>
                            <div className={styles['section-description']}>
                                <div className={styles['section-description-one']}>Машинист подъемника Виктор и рабочий люльки Арсений выполняют работы по ремонту наружного освещения. Посмотрите, какие сигналы подает Арсений, и укажите в правильном порядке соответствующие им действия, которые должен выполнить Виктор.</div>
                                <div className={styles['section-description-two']}>Для запуска анимации кликните левой кнопкой мыши на изображение.
                                    Чтобы дать ответ, перенесите название команды на соответствующее изображение знакового сигнала.</div>
                            </div>
                            <div className={styles['words-step-one']}>
                                <div draggable onDragStart={(e) => dragStart(e)} onDragEnter={(e) => dragEnter(e)}  onDragEnd={drop} key={1} className={`${styles['div1']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Готовность подавать команду</div></div>
                                <div draggable className={`${styles['div2']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Остановка</div></div>
                                <div draggable className={`${styles['div3']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Замедление</div></div>
                                <div draggable className={`${styles['div4']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Подъем</div></div>
                                <div draggable className={`${styles['div5']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Поднять колено (стрелу)</div></div>
                                <div draggable className={`${styles['div6']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Указание направления</div></div>
                                <div draggable className={`${styles['div7']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Опускание</div></div>
                                <div draggable className={`${styles['div8']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Опустить колено (стрелу)</div></div>
                                <div draggable className={`${styles['div9']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Выдвинуть стрелу</div></div>
                                <div draggable className={`${styles['div10']} ${styles['word-container']}`}><div className={`${styles['sdasd']} ${styles['word']}`}>Втянуть стрелу</div></div>
                            </div>
                        </div>
                        <div className={styles['section-two']}>
                            <div className={`${styles['container-step-one']} ${styles['container-drop']}`}>
                                <div className={styles['dropzone']} onClick={anim1} onDrop={dropHandler} onDragOver={(e) => dragOver(e)}>
                                    <img className={"icon-1-1"} id={"icon-1-1"} src="./img/labOne/lab1_1_1_f.png" />
                                    <img className={"icon-1-2"} id={"icon-1-2"} src="./img/labOne/lab1_1_2_f.png" />
                                </div>
                                <div className={styles['dropzone']}><img className={styles["test-icon"]} src="./img/labOne/lab1_1_1_f.png" /></div>
                                <div className={styles['dropzone']}><img className={styles["test-icon"]} src="./img/labOne/lab1_1_1_f.png" /></div>
                                <div className={styles['dropzone']}><img className={styles["test-icon"]} src="./img/labOne/lab1_1_1_f.png" /></div>
                            </div>
                        </div>
                        <div className={styles['section-three']}>
                            <div className={styles['navigation-workplace']}>
                                <div className={styles['back-workplace']}>
                                    <div onClick={() => {setLab(false); setEntrance(true)}} className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                                <div className={styles['next-workplace']}>
                                    <div className={styles['next-text']}>ДАЛЕЕ {'>'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

    
}