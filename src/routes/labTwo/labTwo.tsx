import { Link } from "react-router-dom";
import styles from "../../css/LabTwo.module.css";


import { Preview, print } from 'react-html2pdf';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFullname } from "../../features/fullname/fullnameSlice";

export default function LabTwo() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1; // Months start at 0!
    let dd: any = today.getDate();

    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    const fullname = useSelector(selectFullname);
    const [scale, setScale] = useState(1)

    const [totalScore, setTotalScore] = useState(0);

    const [entrance, setEntrance] = useState(true);
    const [lab, setLab] = useState(false);
    const [final, setFinal] = useState(false);

    const [mainPage, setMainPage] = useState(true);
    const [chooseOne, setChooseOne] = useState(false);
    const [chooseTwo, setChooseTwo] = useState(false);
    const [chooseThree, setChooseThree] = useState(false);

    const [chooseOneComplete, setChooseOneComplete] = useState(false);
    const [chooseTwoComplete, setChooseTwoComplete] = useState(false);
    const [chooseThreeComplete, setChooseThreeComplete] = useState(false);

    const [choosedAnswers, setChoosedAnswers] = useState((new Array(21)).fill(false));

    const pathOne = [
        {
            key: 0,
            content: "Подъемник не установлен на опоры."
        },
        {
            key: 1,
            content: "Зона проведения работ не ограждена."
        },
        {
            key: 2,
            content: "На ограждениях не вывешены знаки безопасности и таблички."
        },
        {
            key: 3,
            content: "Работы выполняются в условиях, которые могут поставить под угрозу безопасность людей (сильный ветер, плохая видимость, обледенение)."
        },
        {
            key: 4,
            content: "Зона проведения работ недостаточно освещена."
        },
        {
            key: 5,
            content: "Люлька подъемника или колено стрелы при выдвижении не касаются проводов ЛЭП."
        },
        {
            key: 6,
            content: "В зоне работы подъемника присутствуют посторонние люди."
        },
        {
            key: 7,
            content: "В зоне начала подъема и опускания люльки находятся посторонние предметы."
        },
    ];

    const pathTwo = [
        {
            key: 8,
            content: "Имеется соединение двух люлек в одну."
        },
        {
            key: 9,
            content: "В лебедке присутствуют посторонние лица."
        },
        {
            key: 10,
            content: "На полу люльки стоят посторонние предметы для увеличения зоны работы."
        },
        {
            key: 11,
            content: "Используются бочки с водой в качестве балласта для лебедки."
        },
        {
            key: 12,
            content: "В люльке перемещаются длинномерные грузы."
        }
    ];

    const pathThree = [
        {
            key: 13,
            content: "Отсутствует защитный экран на каске либо защитные очки."
        },
        {
            key: 14,
            content: "Отсутствует спецодежда."
        },
        {
            key: 15,
            content: "Отсутствуют хлопчатобумажные перчатки."
        },
        {
            key: 16,
            content: "Отсутствуют подбородочные ремни на каске."
        },
        {
            key: 17,
            content: "Используется предохранительный безлямочный пояс вместо страховочной привязи."
        },
        {
            key: 18,
            content: "Страховочная система не пристегнута к люльке."
        },
        {
            key: 19,
            content: "Рабочий стоит на ограждении люльки."
        },
        {
            key: 20,
            content: "В люльке находится более двух рабочих."
        },
    ]

    //useEffect(() => console.log(partOne.partOneBasketOne), []);
    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }

        if (chooseOneComplete && chooseTwoComplete && chooseThreeComplete) {
            setLab(false);
            setChooseOne(false);
            setFinal(true);
            calculateTotalScore();
        }
    })
    //, [chooseOneComplete, chooseTwoComplete, chooseThreeComplete, scale]

    const scalable = (setScale: React.Dispatch<React.SetStateAction<number>>) => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        const scaleWidth = width / 1920
        const scaleHeight = height / 969

        console.log(width, height)

        if (scaleWidth > scaleHeight) {
            setScale(scaleHeight)
        } else {
            setScale(scaleWidth)
        }
    }

    const toPrint = () => {
        window.print();
    }

    const toEntrance = () => {       
        setChooseOneComplete(false);
        setChooseTwoComplete(false);
        setChooseThreeComplete(false);
        setLab(false); setEntrance(true)
        setChoosedAnswers(choosedAnswers.map(item => false));
    }

    const startLab = () => {
        setEntrance(false);
        setLab(true);
    }

    const toOne = () => {
        if (chooseOneComplete) return;
        setMainPage(false);
        setChooseOne(true);
    }

    const backFromOne = () => {
        setMainPage(true);
        setChooseOne(false);
        setChoosedAnswers(choosedAnswers.map((item, index) => {
            if (index > 7) { return item }
            else return false;
        }))
    }

    const nextFromOne = () => {
        setChooseOneComplete(true);
        
        setMainPage(true);
        setChooseOne(false);
    }

    const toTwo = () => {
        if (chooseTwoComplete) return;
        setMainPage(false);
        setChooseTwo(true);
    }

    const backFromTwo = () => {
        setMainPage(true);
        setChooseTwo(false);
        setChoosedAnswers(choosedAnswers.map((item, index) => {
            if ((index < 8) || (index > 12)) { return item }
            else return false;
        }))
    }

    const nextFromTwo = () => {
        setChooseTwoComplete(true);
        setMainPage(true);
        setChooseTwo(false);
    }

    const toThree = () => {
        if (chooseThreeComplete) return;
        setMainPage(false);
        setChooseThree(true);
    }

    const backFromThree = () => {
        setMainPage(true);
        setChooseThree(false);
        setChoosedAnswers(choosedAnswers.map((item, index) => {
            if (index < 13)  { return item }
            else return false;
        }))
    }

    const nextFromThree = () => {
        setMainPage(true);
        setChooseThree(false);
        setChooseThreeComplete(true);
    }

    const chooseAnswer = (e: any) => {
        let key = e.target.getAttribute("data-key");
        setChoosedAnswers(choosedAnswers.map((item, index) => {
            if (key == index) { return !item }
            else return item;
        }))
        e.target.style.animation = "blinker 0.2s linear";
        console.log(e.target.style);
        setTimeout(() => {e.target.style.animation = "none"}, 200);
    }

    const calculateTotalScore = () => {
        let total = 0;
        if (choosedAnswers[0] && !choosedAnswers[1] && choosedAnswers[2] && !choosedAnswers[3] && !choosedAnswers[4] && !choosedAnswers[5] && choosedAnswers[6] && !choosedAnswers[7]) {
            total += 1;
        }

        if (!choosedAnswers[8] && !choosedAnswers[9] && choosedAnswers[10] && !choosedAnswers[11] && !choosedAnswers[12]) {
            total += 1;
        }

        if (choosedAnswers[13] && !choosedAnswers[14] && !choosedAnswers[15] && choosedAnswers[16] && choosedAnswers[17] && !choosedAnswers[18] && !choosedAnswers[19] && !choosedAnswers[20]) {
            total += 1;
        }
        setTotalScore(total);
    }


    return (
        <>
            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={`${styles['main-entrance']} ${entrance ? '' : styles['closed']} `}>
                <div className={styles['container-entrance']}>
                    <div className={styles['description-block']}>
                        <div className={styles['text']}>
                            Перед началом выполнения работ, в ходе которых выполняется перемещение людей с применением подъемника, необходимо соблюсти ряд мер безопасности. Основные требования к выполнению таких работ отражены в «Правилах безопасности опасных производственных объектов, на которых используются подъемные сооружения», утвержденных <a className={styles['link']} href="https://docs.cntd.ru/document/573275657?section=text" target="_blank">Приказом Ростехнадзора от 26.11.2020 N 461</a>, а также прописываются в производственных инструкциях по безопасному ведению работ для рабочих, находящихся на подъемнике.
                            <br /> <br />Выполните задание, чтобы проверить свое знание требований безопасности для рабочих люльки.


                        </div>
                        <div className={styles['navigation-entrance']}>
                            <Link to={`/menu/`}>
                                <div className={styles['back']}>
                                    <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                            </Link>
                            <div onClick={startLab} className={styles['next']}>
                                <div className={styles['next-text']}>ПРИСТУПИТЬ К ВЫПОЛНЕНИЮ {'>'}</div>
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
            {/*==========================PART-ONE=========================*/}
            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={`${styles['main-steps']} ${lab ? styles['vis'] : ''} `}>
                <div className={styles['container-steps']}>
                    <div className={styles['title-steps']}>
                        <div className={styles['title-one-steps']}>Лабораторная работа</div>
                        <div className={styles['title-two-steps']}>Подготовка к выполнению работ в люльке</div>
                    </div>
                    <div className={`${styles['main-page']} ${mainPage ? styles['vis'] : ''} `}>
                        <div className={styles['description']}>Организация ООО «Стройка» выполняет фасадные работы с применением подъемника. Выполните осмотр места проведения работ, люльки и рабочего и опишите имеющиеся нарушения требований безопасности, если они есть.
                        </div>
                        <div className={styles['choosing-container']}>
                            <div className={`${styles['choose-one']} ${chooseOneComplete ? styles['complete'] : ''} `}>
                                <img className={styles["choose-one-image"]} src="./img/labTwo/partOne.png" />
                                <div onClick={toOne} className={`${styles['choose-one-button']} ${chooseOneComplete ? styles['complete'] : ''} `}>Место проведения работ</div>
                            </div>
                            <div className={`${styles['choose-two']} ${chooseTwoComplete ? styles['complete'] : ''} `}>
                                <img className={styles["choose-one-image"]} src="./img/labTwo/partTwo.png" />
                                <div onClick={toTwo} className={`${styles['choose-two-button']} ${chooseTwoComplete ? styles['complete'] : ''} `}>Рабочая платформа (люлька)</div>
                            </div>
                            <div className={`${styles['choose-three']} ${chooseThreeComplete ? styles['complete'] : ''} `}>
                                <img className={styles["choose-one-image"]} src="./img/labTwo/partThree.png" />
                                <div onClick={toThree} className={`${styles['choose-three-button']} ${chooseThreeComplete ? styles['complete'] : ''} `}>Подготовка рабочего люльки</div>
                            </div>
                        </div>
                        <div className={styles['navigation']}>
                            <div onClick={toEntrance} className={styles['back-button']}>
                                <div className={styles['back-text']}>{'<'} НАЗАД</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['path-one']} ${chooseOne ? styles['vis'] : ''} `}>
                        <div className={styles["path-one-container"]}>
                            <div className={styles["path-text-one"]}>Место проведения работ</div>
                            <div className={styles["path-text-two"]}>Осмотрите место установки подъемника. Все ли мероприятия <br />техники безопасности выполнены? Если нет, отметьте допущенные <br />нарушения.</div>
                            <div className={styles["path-one-answers-container"]}>
                                <div className={`${styles["path-one-row-one"]} ${styles["row"]}`}>
                                    <div data-key={0} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[0] ? styles['choosed'] : ''} `}>Подъемник не установлен <br />на опоры.</div>
                                    <div data-key={1} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[1] ? styles['choosed'] : ''} `}>Зона проведения работ <br />не ограждена.</div>
                                    <div data-key={2} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[2] ? styles['choosed'] : ''} `}>На ограждениях не вывешены знаки <br />безопасности и таблички.</div>
                                </div>
                                <div className={`${styles["path-one-row-two"]} ${styles["row"]}`}>
                                    <div data-key={3} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[3] ? styles['choosed'] : ''} `}>Работы выполняются в условиях, которые могут поставить под угрозу <br />безопасность людей (сильный ветер, плохая видимость, обледенение).</div>
                                    <div data-key={4} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[4] ? styles['choosed'] : ''} `}>Зона проведения работ <br />недостаточно освещена.</div>
                                </div>
                                <div className={`${styles["path-one-row-three"]} ${styles["row"]}`}>
                                    <div data-key={5} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[5] ? styles['choosed'] : ''} `}>Люлька подъемника или колено стрелы при выдвижении          <br />не касаются проводов ЛЭП.</div>
                                    <div data-key={6} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[6] ? styles['choosed'] : ''} `}>В зоне работы подъемника <br />присутствуют посторонние люди.</div>
                                </div>
                                <div className={`${styles["path-one-row-four"]} ${styles["row"]}`}>
                                    <div data-key={7} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[7] ? styles['choosed'] : ''} `}>В зоне начала подъема и опускания люльки находятся                <br />посторонние предметы.</div>
                                </div>
                            </div>
                            <div className={styles['navigation-paths']}>
                                <div onClick={backFromOne} className={styles['back-paths']}>
                                    <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                                <div onClick={nextFromOne} className={styles['next-paths']}>
                                    <div className={styles['next-text']}>ГОТОВО {'>'}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className={styles["path-one-image"]} src="./img/labTwo/pathOne.png" />
                        </div>
                    </div>

                    <div className={`${styles['path-two']} ${chooseTwo ? styles['vis'] : ''} `}>
                        <div className={styles["path-two-container"]}>
                            <div className={styles["path-text-one"]}>Рабочая платформа (люлька)</div>
                            <div className={styles["path-text-two"]}>Осмотрите люльку. Все ли мероприятия техники безопасности <br />выполнены? Если нет, опишите допущенные нарушения.</div>
                            <div className={styles["path-two-answers-container"]}>
                                <div className={`${styles["path-two-row-one"]} ${styles["row"]}`}>
                                    <div data-key={8} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[8] ? styles['choosed'] : ''} `}>Имеется соединение двух <br />люлек в одну.</div>
                                    <div data-key={9} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[9] ? styles['choosed'] : ''} `}>В лебедке присутствуют <br />посторонние лица.</div>
                                    </div>
                                <div className={`${styles["path-two-row-two"]} ${styles["row"]}`}>
                                    <div data-key={10} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[10] ? styles['choosed'] : ''} `}>На полу люльки стоят посторонние предметы для увеличения <br />зоны работы.</div>
                                    </div>
                                <div className={`${styles["path-two-row-three"]} ${styles["row"]}`}>
                                    <div data-key={11} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[11] ? styles['choosed'] : ''} `}>Используются бочки с водой <br />в качестве балласта для лебедки.</div>
                                    <div data-key={12} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[12] ? styles['choosed'] : ''} `}>В люльке перемещаются <br />длинномерные грузы.</div>
                                </div>
                            </div>
                            <div className={styles['navigation-paths']}>
                                <div onClick={backFromTwo} className={styles['back-paths']}>
                                    <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                                <div onClick={nextFromTwo} className={styles['next-paths']}>
                                    <div className={styles['next-text']}>ГОТОВО {'>'}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className={styles["path-one-image"]} src="./img/labTwo/pathTwo.jpg" />
                        </div>
                    </div>

                    <div className={`${styles['path-three']} ${chooseThree ? styles['vis'] : ''} `}>
                        <div className={styles["path-three-container"]}>
                            <div className={styles["path-text-one"]}>Подготовка рабочего люльки</div>
                            <div className={styles["path-text-two"]}>Проверьте подготовку рабочего люльки к выполнению работ. Все ли мероприятия техники безопасности выполнены? Если нет, опишите допущенные нарушения.</div>
                            <div className={styles["path-three-answers-container"]}>
                                <div className={`${styles["path-three-row-one"]} ${styles["row"]}`}>
                                    <div data-key={13} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[13] ? styles['choosed'] : ''} `}>Отсутствует защитный экран <br />на каске либо защитные очки.</div>
                                    <div data-key={14} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[14] ? styles['choosed'] : ''} `}>Отсутствует спецодежда.</div>
                                </div>
                                <div className={`${styles["path-three-row-two"]} ${styles["row"]}`}>
                                    <div data-key={15} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[15] ? styles['choosed'] : ''} `}>Отсутствуют хлопчатобумажные <br />перчатки.</div>
                                    <div data-key={16} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[16] ? styles['choosed'] : ''} `}>Отсутствуют подбородочные <br />ремни на каске.</div>
                                </div>
                                <div className={`${styles["path-three-row-three"]} ${styles["row"]}`}>
                                    <div data-key={17} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[17] ? styles['choosed'] : ''} `}>Используется предохранительный безлямочный пояс вместо <br />страховочной привязи.</div>
                                    
                                </div>
                                <div className={`${styles["path-three-row-four"]} ${styles["row"]}`}>
                                    <div data-key={18} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[18] ? styles['choosed'] : ''} `}>Страховочная система <br />не пристегнута к люльке.</div>
                                    <div data-key={19} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[19] ? styles['choosed'] : ''} `}>Рабочий стоит на ограждении <br />люльки.</div>
                                </div>
                                <div className={`${styles["path-three-row-five"]} ${styles["row"]}`}>
                                    <div data-key={20} onClick={(e) => chooseAnswer(e)} className={`${styles['answer']} ${choosedAnswers[20] ? styles['choosed'] : ''} `}>В люльке находится более двух    <br />рабочих.</div>
                                </div>
                            </div>
                            <div className={styles['navigation-paths']}>
                                <div onClick={backFromThree} className={styles['back-paths']}>
                                    <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                </div>
                                <div onClick={nextFromThree} className={styles['next-paths']}>
                                    <div className={styles['next-text']}>ГОТОВО {'>'}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className={styles["path-three-image"]} src="./img/labTwo/pathThree.png" />
                        </div>
                    </div>
                </div>
            </div>
            {/*==========================FINAL=========================*/}
            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={`${styles['main-final']} ${final ? styles['vis'] : ''} `}>
                <div className={styles['left-side']}>
                    <div className={styles['final-title']}>Поздравляем, <br />Вы выполнили лабораторную <br />работу!</div>
                    <div className={styles['menu-button']}>
                        <Link to={`/menu/`}>
                            <div className={styles['back-workplace']}>
                                <div className={styles['back-text']}>{'<'} НАЗАД</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <Preview id={'pdf-lab2'} className={'pdf'}>
                    <div id="center2" className={styles['center']}>
                        <div className={styles['center-container']}>
                            <div id="header2" className={styles['header']}>
                                <div className={styles['header-one']}>
                                    <div>Рабочий люльки. Электронный практикум</div>
                                    <div>Верных ответов:</div>
                                </div>
                                <div className={styles['header-two']}>
                                    <div>Лабораторная работа «Подготовка к выполнению работ <br />в люльке». Отчет</div>
                                    <div>{totalScore} из 3</div>
                                </div>
                                <div className={styles['header-three']}>
                                    Ф.И.О.: {fullname.lastName} {fullname.firstName}
                                </div>
                                <div className={styles['header-four']}>
                                    Дата прохождения: {formattedToday}
                                </div>
                            </div>
                            <div className={styles['report']}>
                                <div className={styles['report-header']}>
                                    <div id="report-header-right-answer" className={styles['report-header-right-answer']}>Верный ответ</div>
                                    <div id="report-header-user-answer" className={styles['report-header-user-answer']}>Ответ пользователя</div>
                                </div>
                                <div className={styles['part-title']}>Осмотр места проведения работ</div>
                                <div className={styles['answers-container']}>
                                    <div className={styles['report-right-answers']}>
                                    <span>На ограждениях не вывешены знаки безопасности и таблички.</span>
                                    <span>Подъемник не установлен на опоры.</span>
                                    <span>В зоне работы подъемника присутствуют посторонние люди.</span>
                                    </div>
                                    <div className={styles['report-user-answers']}>
                                        {pathOne.filter((item, index) => choosedAnswers[index]).map((item) => <span key={item.key}>{item.content}</span>)}
                                    </div>
                                </div>
                                <div className={styles['part-title']}>Осмотр рабочей платформы (люльки)</div>
                                <div className={styles['answers-container']}>
                                    <div className={styles['report-right-answers']}>
                                    <span>На полу люльки стоят посторонние предметы для увеличения зоны работы.</span>
                                    </div>
                                    <div className={styles['report-user-answers']}>
                                    {pathTwo.filter((item, index) => choosedAnswers[index+8]).map((item) => <span key={item.key}>{item.content}</span>)}
                                    </div>
                                </div>
                                <div className={styles['part-title']}>Проверка подготовки рабочего люльки</div>
                                <div className={styles['answers-container']}>
                                    <div className={styles['report-right-answers']}>
                                    <span>Отсутствует защитный экран на каске либо защитные очки.</span>
                                    <span>Отсутствуют подбородочные ремни на каске.</span>
                                    <span>Используется предохранительный безлямочный пояс вместо страховочной привязи.</span>
                                    </div>
                                    <div className={styles['report-user-answers']}>
                                    {pathThree.filter((item, index) => choosedAnswers[index+13]).map((item) => <span key={item.key}>{item.content}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Preview>
                <div className={styles['right-side']}>
                    <div onClick={() => print("a", "pdf-lab2")} id="download-button" className={styles['download-button']}><img className={styles["download-icon"]} src="./img/labOne/download-icon.png" /></div>
                    <div onClick={toPrint} id="print-button" className={styles['print-button']}><img className={styles["print-icon"]} src="./img/labOne/print-icon.png" /></div>
                </div>
            </div>


        </>
    );


}