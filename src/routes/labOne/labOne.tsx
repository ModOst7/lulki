import { Link } from "react-router-dom";
import styles from "../../css/LabOne.module.css";

import {Preview, print} from 'react-html2pdf';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectFullname } from "../../features/fullname/fullnameSlice";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function LabOne() {
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

    const [partOneVis, setPartOneVis] = useState(true);
    const [partTwoVis, setPartTwoVis] = useState(false);
    const [partThreeVis, setPartThreeVis] = useState(false);
    const [partFourVis, setPartFourVis] = useState(false);

    const [partOne, setPartOne] = useState<any>({
        partOneBasketOne: [],
        partOneBasketTwo: [],
        partOneBasketThree: [],
        partOneBasketFour: [],
        partOneRowOne: [
            {
                id: 1,
                content: "Готовность подавать команду",
                letters: 27
            },
            {
                id: 2,
                content: "Остановка",
                letters: 9
            },
            {
                id: 3,
                content: "Замедление",
                letters: 10
            },
            {
                id: 4,
                content: "Подъем",
                letters: 6
            }
        ],
        partOneRowTwo: [
            {
                id: 5,
                content: "Опускание",
                letters: 9
            },
            {
                id: 6,
                content: "Указание направления",
                letters: 20
            },
            {
                id: 7,
                content: "Поднять колено (стрелу)",
                letters: 23
            }
        ],
        partOneRowThree: [
            {
                id: 8,
                content: "Опустить колено (стрелу)",
                letters: 24
            },
            {
                id: 9,
                content: "Выдвинуть стрелу",
                letters: 16
            },
            {
                id: 10,
                content: "Втянуть стрелу",
                letters: 14
            }
        ]
    });

    const [partTwo, setPartTwo] = useState<any>({
        partTwoBasketOne: [],
        partTwoBasketTwo: [],
        partTwoBasketThree: [],
        partTwoBasketFour: [],
        partTwoRowOne: [
            {
                id: 11,
                content: "Готовность подавать команду",
                letters: 27
            },
            {
                id: 12,
                content: "Остановка",
                letters: 9
            },
            {
                id: 13,
                content: "Замедление",
                letters: 10
            },
            {
                id: 14,
                content: "Подъем",
                letters: 6
            }
        ],
        partTwoRowTwo: [
            {
                id: 15,
                content: "Опускание",
                letters: 9
            },
            {
                id: 16,
                content: "Указание направления",
                letters: 20
            },
            {
                id: 17,
                content: "Поднять колено (стрелу)",
                letters: 23
            }
        ],
        partTwoRowThree: [
            {
                id: 18,
                content: "Опустить колено (стрелу)",
                letters: 24
            },
            {
                id: 19,
                content: "Выдвинуть стрелу",
                letters: 16
            },
            {
                id: 20,
                content: "Втянуть стрелу",
                letters: 14
            }
        ]
    });

    const [partThree, setPartThree] = useState<any>({
        partThreeBasketOne: [],
        partThreeBasketTwo: [],
        partThreeBasketThree: [],
        partThreeBasketFour: [],
        partThreeRowOne: [
            {
                id: 21,
                content: "Готовность подавать команду",
                letters: 27
            },
            {
                id: 22,
                content: "Остановка",
                letters: 9
            },
            {
                id: 23,
                content: "Замедление",
                letters: 10
            },
            {
                id: 24,
                content: "Подъем",
                letters: 6
            }
        ],
        partThreeRowTwo: [
            {
                id: 25,
                content: "Опускание",
                letters: 9
            },
            {
                id: 26,
                content: "Указание направления",
                letters: 20
            },
            {
                id: 27,
                content: "Поднять колено (стрелу)",
                letters: 23
            }
        ],
        partThreeRowThree: [
            {
                id: 28,
                content: "Опустить колено (стрелу)",
                letters: 24
            },
            {
                id: 29,
                content: "Выдвинуть стрелу",
                letters: 16
            },
            {
                id: 30,
                content: "Втянуть стрелу",
                letters: 14
            }
        ]
    });

    const [partFour, setPartFour] = useState<any>({
        partFourBasketOne: [],
        partFourBasketTwo: [],
        partFourBasketThree: [],
        partFourBasketFour: [],
        partFourRowOne: [
            {
                id: 31,
                content: "Готовность подавать команду",
                letters: 27
            },
            {
                id: 32,
                content: "Остановка",
                letters: 9
            },
            {
                id: 33,
                content: "Замедление",
                letters: 10
            },
            {
                id: 34,
                content: "Подъем",
                letters: 6
            }
        ],
        partFourRowTwo: [
            {
                id: 35,
                content: "Опускание",
                letters: 9
            },
            {
                id: 36,
                content: "Указание направления",
                letters: 20
            },
            {
                id: 37,
                content: "Поднять колено (стрелу)",
                letters: 23
            }
        ],
        partFourRowThree: [
            {
                id: 38,
                content: "Опустить колено (стрелу)",
                letters: 24
            },
            {
                id: 39,
                content: "Выдвинуть стрелу",
                letters: 16
            },
            {
                id: 40,
                content: "Втянуть стрелу",
                letters: 14
            }
        ]
    });

    //useEffect(() => console.log(partOne.partOneBasketOne), []);
    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }
    })

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


    const reorder = (list: any, startIndex: any, endIndex: any) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result: any = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    const [containerOne, setContainerOne] = [0, 1];

    const startLab = () => {
        setEntrance(false);
        setLab(true);
    }

    const time1 = 1000;

    const anim1 = () => {
        let icon2 = document.getElementById("icon-1-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, time1);
        }
    }

    const anim2 = () => {
        let icon2 = document.getElementById("icon-2-2");
        let icon3 = document.getElementById("icon-2-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 1200);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 1800);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 3000);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const anim3 = () => {
        let icon2 = document.getElementById("icon-3-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, time1);
        }
    }

    const anim4 = () => {
        let icon2 = document.getElementById("icon-4-2");
        let icon3 = document.getElementById("icon-4-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 1200);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 2000);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 3000);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const toStepTwo = () => {
        setPartOneVis(false);
        setPartTwoVis(true);
    }

    const anim5 = () => {
        let icon2 = document.getElementById("icon-5-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, time1);
        }
    }

    const anim6 = () => {
        let icon2 = document.getElementById("icon-6-2");
        let icon3 = document.getElementById("icon-6-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 600);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 2000);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 3000);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const anim7 = () => {
        let icon2 = document.getElementById("icon-7-2");
        let icon3 = document.getElementById("icon-7-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 1000);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 1400);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 2400);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const backToStepOne = () => {
        setPartOneVis(true);
        setPartTwoVis(false);
    }

    const toStepThree = () => {
        setPartTwoVis(false);
        setPartThreeVis(true);
    }

    const anim8 = () => {
        let icon2 = document.getElementById("icon-8-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, time1);
        }
    }

    const anim9 = () => {
        let icon2 = document.getElementById("icon-9-2");
        let icon3 = document.getElementById("icon-9-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 1000);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 1800);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 2800);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const anim10 = () => {
        //let icon1 = document.getElementById("icon-10-1");
        let icon2 = document.getElementById("icon-10-2");
        let icon3 = document.getElementById("icon-10-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        //icon1!.style.opacity = "0";
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 600);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 2000);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 3000);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const anim11 = () => {
        let icon2 = document.getElementById("icon-11-2");
        let icon3 = document.getElementById("icon-11-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 1200);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 2000);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 3000);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const backToStepTwo = () => {
        setPartThreeVis(false);
        setPartTwoVis(true);
    }

    const toStepFour = () => {
        setPartThreeVis(false);
        setPartFourVis(true);
    }

    const anim12 = () => {
        let icon2 = document.getElementById("icon-12-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, time1);
        }
    }

    const anim13 = () => {
        let icon2 = document.getElementById("icon-13-2");
        let icon3 = document.getElementById("icon-13-3");
        if (icon2!.style.opacity == "1" || icon3!.style.opacity == "1") return;
        icon2!.style.opacity = "1";
        setTimeout(() => { icon3!.style.opacity = "1"; }, 1000);
        setTimeout(() => { icon3!.style.opacity = "0"; }, 1400);
        setTimeout(() => { icon2!.style.opacity = "0"; }, 2400);
        //setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
    }

    const anim14 = () => {
        let icon2 = document.getElementById("icon-14-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, time1);
        }
    }

    const backToStepThree = () => {
        setPartThreeVis(true);
        setPartFourVis(false);
    }

    const toFinal = () => {
        setLab(false);
        setFinal(true);
        let total = 0;
        if ((partOne.partOneBasketOne[0].content == "Готовность подавать команду") && (partOne.partOneBasketTwo[0].content == "Поднять колено (стрелу)") && (partOne.partOneBasketThree[0].content == "Выдвинуть стрелу") && (partOne.partOneBasketFour[0].content == "Остановка")) {
            total += 1;
        }
        if ((partTwo.partTwoBasketOne[0].content == "Готовность подавать команду") && (partTwo.partTwoBasketTwo[0].content == "Подъем") && (partTwo.partTwoBasketThree[0].content == "Замедление")) {
            total += 1;
        }
        if ((partThree.partThreeBasketOne[0].content == "Готовность подавать команду") && (partThree.partThreeBasketTwo[0].content == "Указание направления") && (partThree.partThreeBasketThree[0].content == "Опускание") && (partThree.partThreeBasketFour[0].content == "Остановка")) {
            total += 1;
        }
        if ((partFour.partFourBasketOne[0].content == "Готовность подавать команду") && (partFour.partFourBasketTwo[0].content == "Опустить колено (стрелу)") && (partFour.partFourBasketThree[0].content == "Втянуть стрелу")) {
            total += 1;
        }
        setTotalScore(total);
    }

    const toPrint = () => {
        window.print();
    }

    const onDragEnd = (result: any) => {
        console.log(result);
        const { source, destination } = result;

        if (partOneVis) {
            // dropped outside the list
            if (!destination) {
                return;
            }
            console.log(destination.droppableId)
            const sInd = source.droppableId;
            const dInd = destination.droppableId;
            if (sInd === dInd) {
                const items = reorder(partOne[sInd], source.index, destination.index);
                const newState = { ...partOne };
                newState[sInd] = items;
                setPartOne(newState);
            } else {
                const result = move(partOne[sInd], partOne[dInd], source, destination);
                const newState = { ...partOne };
                newState[sInd] = result[sInd];
                newState[dInd] = result[dInd];

                setPartOne(newState);
            }
        } else if (partTwoVis) {
            // dropped outside the list
            if (!destination) {
                return;
            }
            console.log(destination.droppableId)
            const sInd = source.droppableId;
            const dInd = destination.droppableId;
            if (sInd === dInd) {
                const items = reorder(partTwo[sInd], source.index, destination.index);
                const newState = { ...partTwo };
                newState[sInd] = items;
                setPartTwo(newState);
            } else {
                const result = move(partTwo[sInd], partTwo[dInd], source, destination);
                const newState = { ...partTwo };
                newState[sInd] = result[sInd];
                newState[dInd] = result[dInd];

                setPartTwo(newState);
            }
        } else if (partThreeVis) {
            // dropped outside the list
            if (!destination) {
                return;
            }
            console.log(destination.droppableId)
            const sInd = source.droppableId;
            const dInd = destination.droppableId;
            if (sInd === dInd) {
                const items = reorder(partThree[sInd], source.index, destination.index);
                const newState = { ...partThree };
                newState[sInd] = items;
                setPartThree(newState);
            } else {
                const result = move(partThree[sInd], partThree[dInd], source, destination);
                const newState = { ...partThree };
                newState[sInd] = result[sInd];
                newState[dInd] = result[dInd];

                setPartThree(newState);
            }
        } else if (partFourVis) {
            // dropped outside the list
            if (!destination) {
                return;
            }
            console.log(destination.droppableId)
            const sInd = source.droppableId;
            const dInd = destination.droppableId;
            if (sInd === dInd) {
                const items = reorder(partFour[sInd], source.index, destination.index);
                const newState = { ...partFour };
                newState[sInd] = items;
                setPartFour(newState);
            } else {
                const result = move(partFour[sInd], partFour[dInd], source, destination);
                const newState = { ...partFour };
                newState[sInd] = result[sInd];
                newState[dInd] = result[dInd];

                setPartFour(newState);
            }
        }
    }

    const getItemStyle = (isDragging: any, draggableStyle: any, snapshot?: any) => ({
        // some basic styles to make the items look a bit nicer
        ...draggableStyle,
        userSelect: "none",
        padding: "1.1vw",
        margin: `0 0.5vw 0.3vw 0`,
        // change background colour if dragging
        background: isDragging ? "#F28300" : "#F4F4F4",

        // styles we need to apply on draggables

    });
    const getListStyle = (isDraggingOver: any) => ({
        background: isDraggingOver ? "" : "",
    });
    console.log(partOne.partOneBasketOne.length)
    return (
        <>
            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={`${styles['main-entrance']} ${entrance ? '' : styles['closed']} `}>
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
            <div className={`${styles['main-steps']} ${lab ? styles['vis'] : ''} `}>
                <div className={styles['container-steps']}>
                    <div className={styles['title-steps']}>
                        <div className={styles['title-one-steps']}>Лабораторная работа</div>
                        <div className={styles['title-two-steps']}>Сигнализация</div>
                    </div>
                    <div className={styles['workplace-steps']}>
                        <DragDropContext onDragEnd={onDragEnd}>
                            <div className={styles['section-one']}>
                                <div className={styles['section-description']}>
                                    <div className={styles['section-description-one']}>Машинист подъемника Виктор и рабочий люльки Арсений выполняют работы по ремонту наружного освещения. Посмотрите, какие сигналы подает Арсений, и укажите в правильном порядке соответствующие им действия, которые должен выполнить Виктор.</div>
                                    <div className={styles['section-description-two']}>Для запуска анимации кликните левой кнопкой мыши на изображение.
                                        Чтобы дать ответ, перенесите название команды на соответствующее изображение знакового сигнала.</div>
                                </div>

                                <div className={`${styles['words-step-one-container']} ${partOneVis ? styles['vis'] : ''} `}>
                                    <Droppable key={"partOneRowOne"} droppableId={"partOneRowOne"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-one']}>
                                                {partOne.partOneRowOne.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style,
                                                                    snapshot
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partOneRowTwo"} droppableId={"partOneRowTwo"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-one']}>
                                                {partOne.partOneRowTwo.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partOneRowThree"} droppableId={"partOneRowThree"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-one']}>
                                                {partOne.partOneRowThree.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>

                                <div className={`${styles['words-step-two-container']} ${partTwoVis ? styles['vis'] : ''} `}>
                                    <Droppable key={"partTwoRowOne"} droppableId={"partTwoRowOne"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-two']}>
                                                {partTwo.partTwoRowOne.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style,
                                                                    snapshot
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partTwoRowTwo"} droppableId={"partTwoRowTwo"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-two']}>
                                                {partTwo.partTwoRowTwo.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partTwoRowThree"} droppableId={"partTwoRowThree"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-two']}>
                                                {partTwo.partTwoRowThree.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>

                                <div className={`${styles['words-step-three-container']} ${partThreeVis ? styles['vis'] : ''} `}>
                                    <Droppable key={"partThreeRowOne"} droppableId={"partThreeRowOne"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-three']}>
                                                {partThree.partThreeRowOne.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style,
                                                                    snapshot
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partThreeRowTwo"} droppableId={"partThreeRowTwo"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-three']}>
                                                {partThree.partThreeRowTwo.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partThreeRowThree"} droppableId={"partThreeRowThree"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-three']}>
                                                {partThree.partThreeRowThree.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>

                                <div className={`${styles['words-step-four-container']} ${partFourVis ? styles['vis'] : ''} `}>
                                    <Droppable key={"partFourRowOne"} droppableId={"partFourRowOne"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-four']}>
                                                {partFour.partFourRowOne.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style,
                                                                    snapshot
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partFourRowTwo"} droppableId={"partFourRowTwo"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-four']}>
                                                {partFour.partFourRowTwo.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>

                                    <Droppable key={"partFourRowThree"} droppableId={"partFourRowThree"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-four']}>
                                                {partFour.partFourRowThree.map((item: any, index: any) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}
                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className={styles['word-container']}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={getItemStyle(
                                                                    snapshot.isDragging,
                                                                    provided.draggableProps.style
                                                                )}
                                                            >
                                                                {item.content}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>


                            </div>
                            <div className={styles['section-two']}>
                                <div className={`${styles['container-step-one']} ${styles['container-drop']} ${partOneVis ? styles['vis'] : ''} `}>
                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim1}>
                                        <img className={"icon-1-1"} id={"icon-1-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-1-2"} id={"icon-1-2"} src="./img/labOne/lab1_1_2_f.png" />
                                        <Droppable isDropDisabled={partOne.partOneBasketOne.length > 0 ? true : false} key={"partOneBasketOne"} droppableId={"partOneBasketOne"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partOne.partOneBasketOne.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                    </div>

                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim2}>
                                        <img className={"icon-2-1"} id={"icon-2-1"} src="./img/labOne/lab1_2_0.png" />
                                        <img className={"icon-2-2"} id={"icon-2-2"} src="./img/labOne/lab1_2_1.png" />
                                        <img className={"icon-2-3"} id={"icon-2-3"} src="./img/labOne/lab1_2_2.png" />
                                        <Droppable isDropDisabled={partOne.partOneBasketTwo.length > 0 ? true : false} key={"partOneBasketTwo"} droppableId={"partOneBasketTwo"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partOne.partOneBasketTwo.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className={styles['dropzone']}
                                        onClick={anim3}>
                                        <img className={"icon-3-1"} id={"icon-3-1"} src="./img/labOne/lab1_3_1.png" />
                                        <img className={"icon-3-2"} id={"icon-3-2"} src="./img/labOne/lab1_3_2.png" />
                                        <Droppable isDropDisabled={partOne.partOneBasketThree.length > 0 ? true : false} key={"partOneBasketThree"} droppableId={"partOneBasketThree"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partOne.partOneBasketThree.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim4}>
                                        <img className={"icon-4-1"} id={"icon-4-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-4-2"} id={"icon-4-2"} src="./img/labOne/lab1_4_1.png" />
                                        <img className={"icon-4-3"} id={"icon-4-3"} src="./img/labOne/lab1_4_2.png" />
                                        <Droppable isDropDisabled={partOne.partOneBasketFour.length > 0 ? true : false} key={"partOneBasketFour"} droppableId={"partOneBasketFour"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partOne.partOneBasketFour.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>

                                <div className={`${styles['container-step-two']} ${styles['container-drop']} ${partTwoVis ? styles['vis'] : ''} `}>
                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim5}>
                                        <img className={"icon-5-1"} id={"icon-5-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-5-2"} id={"icon-5-2"} src="./img/labOne/lab1_1_2_f.png" />
                                        <Droppable isDropDisabled={partTwo.partTwoBasketOne.length > 0 ? true : false} key={"partTwoBasketOne"} droppableId={"partTwoBasketOne"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partTwo.partTwoBasketOne.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                    </div>

                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim6}>
                                        <img className={"icon-6-1"} id={"icon-6-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-6-2"} id={"icon-6-2"} src="./img/labOne/lab1_1_2_f.png" />
                                        <div id="icon-6-3-container">
                                            <img className={"icon-6-3"} id={"icon-6-3"} src="./img/labOne/arrow.png" />
                                        </div>
                                        <Droppable isDropDisabled={partTwo.partTwoBasketTwo.length > 0 ? true : false} key={"partTwoBasketTwo"} droppableId={"partTwoBasketTwo"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partTwo.partTwoBasketTwo.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className={styles['dropzone']}
                                        onClick={anim7}>
                                        <img className={"icon-7-1"} id={"icon-7-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-7-2"} id={"icon-7-2"} src="./img/labOne/lab2_2_2.png" />
                                        <img className={"icon-7-3"} id={"icon-7-3"} src="./img/labOne/lab2_2_1.png" />
                                        <Droppable isDropDisabled={partTwo.partTwoBasketThree.length > 0 ? true : false} key={"partTwoBasketThree"} droppableId={"partTwoBasketThree"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partTwo.partTwoBasketThree.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>

                                <div className={`${styles['container-step-three']} ${styles['container-drop']} ${partThreeVis ? styles['vis'] : ''} `}>
                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim8}>
                                        <img className={"icon-8-1"} id={"icon-8-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-8-2"} id={"icon-8-2"} src="./img/labOne/lab1_1_2_f.png" />
                                        <Droppable isDropDisabled={partThree.partThreeBasketOne.length > 0 ? true : false} key={"partThreeBasketOne"} droppableId={"partThreeBasketOne"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partThree.partThreeBasketOne.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                    </div>

                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim9}>
                                        <img className={"icon-9-1"} id={"icon-9-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-9-2"} id={"icon-9-2"} src="./img/labOne/lab3_1_1.png" />
                                        <img className={"icon-9-3"} id={"icon-9-3"} src="./img/labOne/lab3_1_2.png" />
                                        <Droppable isDropDisabled={partThree.partThreeBasketTwo.length > 0 ? true : false} key={"partThreeBasketTwo"} droppableId={"partThreeBasketTwo"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partThree.partThreeBasketTwo.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className={styles['dropzone']}
                                        onClick={anim10}>
                                        <img className={"icon-10-1"} id={"icon-10-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <div id="icon-10-3-container">
                                            <img className={"icon-10-3"} id={"icon-10-3"} src="./img/labOne/arrow.png" />
                                        </div>
                                        <img className={"icon-10-2"} id={"icon-10-2"} src="./img/labOne/lab3_2_1transparent.png" />
                                        <Droppable isDropDisabled={partThree.partThreeBasketThree.length > 0 ? true : false} key={"partThreeBasketThree"} droppableId={"partThreeBasketThree"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partThree.partThreeBasketThree.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim11}>
                                        <img className={"icon-11-1"} id={"icon-11-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-11-2"} id={"icon-11-2"} src="./img/labOne/lab1_4_1.png" />
                                        <img className={"icon-11-3"} id={"icon-11-3"} src="./img/labOne/lab1_4_2.png" />
                                        <Droppable isDropDisabled={partThree.partThreeBasketFour.length > 0 ? true : false} key={"partThreeBasketFour"} droppableId={"partThreeBasketFour"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partThree.partThreeBasketFour.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>

                                <div className={`${styles['container-step-four']} ${styles['container-drop']} ${partFourVis ? styles['vis'] : ''} `}>
                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim12}>
                                        <img className={"icon-12-1"} id={"icon-12-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-12-2"} id={"icon-12-2"} src="./img/labOne/lab1_1_2_f.png" />
                                        <Droppable isDropDisabled={partFour.partFourBasketOne.length > 0 ? true : false} key={"partFourBasketOne"} droppableId={"partFourBasketOne"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partFour.partFourBasketOne.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                    </div>

                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim13}>
                                        <img className={"icon-13-1"} id={"icon-13-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-13-2"} id={"icon-13-2"} src="./img/labOne/lab4_1_1.png" />
                                        <img className={"icon-13-3"} id={"icon-13-3"} src="./img/labOne/lab4_1_2.png" />
                                        <Droppable isDropDisabled={partFour.partFourBasketTwo.length > 0 ? true : false} key={"partFourBasketTwo"} droppableId={"partFourBasketTwo"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partFour.partFourBasketTwo.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className={styles['dropzone']}
                                        onClick={anim14}>
                                        <img className={"icon-14-1"} id={"icon-14-1"} src="./img/labOne/lab4_2_1.png" />
                                        <img className={"icon-14-2"} id={"icon-14-2"} src="./img/labOne/lab4_2_2.png" />
                                        <Droppable isDropDisabled={partFour.partFourBasketThree.length > 0 ? true : false} key={"partFourBasketThree"} droppableId={"partFourBasketThree"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {partFour.partFourBasketThree.map((item: any, index: any) => (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={String(item.id)}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <div
                                                                    className={styles['word-container']}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={getItemStyle(
                                                                        snapshot.isDragging,
                                                                        provided.draggableProps.style
                                                                    )}
                                                                >
                                                                    {item.content}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                </div>

                            </div>
                            <div className={styles['section-three']}>
                                <div className={`${styles['navigation-workplace']} ${styles['navigation-step-one']} ${partOneVis ? styles['vis'] : ''} `}>
                                    <div onClick={() => { setLab(false); setEntrance(true) }} className={styles['back-workplace']}>
                                        <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                    </div>
                                    <div onClick={toStepTwo} className={styles['next-workplace']}>
                                        <div className={styles['next-text']}>ДАЛЕЕ {'>'}</div>
                                    </div>
                                </div>
                                <div className={`${styles['navigation-workplace']} ${styles['navigation-step-two']} ${partTwoVis ? styles['vis'] : ''} `}>
                                    <div onClick={backToStepOne} className={styles['back-workplace']}>
                                        <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                    </div>
                                    <div onClick={toStepThree} className={styles['next-workplace']}>
                                        <div className={styles['next-text']}>ДАЛЕЕ {'>'}</div>
                                    </div>
                                </div>
                                <div className={`${styles['navigation-workplace']} ${styles['navigation-step-three']} ${partThreeVis ? styles['vis'] : ''} `}>
                                    <div onClick={backToStepTwo} className={styles['back-workplace']}>
                                        <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                    </div>
                                    <div onClick={toStepFour} className={styles['next-workplace']}>
                                        <div className={styles['next-text']}>ДАЛЕЕ {'>'}</div>
                                    </div>
                                </div>
                                <div className={`${styles['navigation-workplace']} ${styles['navigation-step-four']} ${partFourVis ? styles['vis'] : ''} `}>
                                    <div onClick={backToStepThree} className={styles['back-workplace']}>
                                        <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                    </div>
                                    <div onClick={toFinal} className={styles['next-workplace']}>
                                        <div className={styles['next-text']}>ОТЧЕТ {'>'}</div>
                                    </div>
                                </div>
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </div>

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
                <Preview id={'pdf'} className={'pdf'}>
                <div id="center" className={styles['center']}>
                    <div className={styles['center-container']}>
                        <div className={styles['header']}>
                            <div className={styles['header-one']}>
                                <div>Рабочий люльки. Электронный практикум</div>
                                <div>Верных ответов:</div>
                            </div>
                            <div className={styles['header-two']}>
                                <div>Лабораторная работа «Сигнализация». Отчет</div>
                                <div>{totalScore} из 4</div>
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
                            <div className={styles['part-title']}>Первая серия сигналов</div>
                            <div className={styles['answers-container']}>
                                <div className={styles['report-right-answers']}>
                                    1. Готовность подавать команду<br />
                                    2. Поднять колено (стрелу)<br />
                                    3. Выдвинуть стрелу<br />
                                    4. Остановка<br />
                                </div>
                                <div className={styles['report-user-answers']}>
                                    1. {partOne.partOneBasketOne[0] ? partOne.partOneBasketOne[0].content : ''}<br />
                                    2. {partOne.partOneBasketTwo[0] ? partOne.partOneBasketTwo[0].content : ''}<br />
                                    3. {partOne.partOneBasketThree[0] ? partOne.partOneBasketThree[0].content : ''}<br />
                                    4. {partOne.partOneBasketFour[0] ? partOne.partOneBasketFour[0].content : ''}<br />
                                </div>
                            </div>
                            <div className={styles['part-title']}>Вторая серия сигналов</div>
                            <div className={styles['answers-container']}>
                                <div className={styles['report-right-answers']}>
                                    1. Готовность подавать команду<br />
                                    2. Подъем<br />
                                    3. Замедление<br />
                                </div>
                                <div className={styles['report-user-answers']}>
                                    1. {partTwo.partTwoBasketOne[0] ? partTwo.partTwoBasketOne[0].content : ''}<br />
                                    2. {partTwo.partTwoBasketTwo[0] ? partTwo.partTwoBasketTwo[0].content : ''}<br />
                                    3. {partTwo.partTwoBasketThree[0] ? partTwo.partTwoBasketThree[0].content : ''}<br />
                                </div>
                            </div>
                            <div className={styles['part-title']}>Третья серия сигналов</div>
                            <div className={styles['answers-container']}>
                                <div className={styles['report-right-answers']}>
                                    1. Готовность подавать команду<br />
                                    2. Указание направления<br />
                                    3. Опускание<br />
                                    4. Остановка<br />
                                </div>
                                <div className={styles['report-user-answers']}>
                                    1. {partThree.partThreeBasketOne[0] ? partThree.partThreeBasketOne[0].content : ''}<br />
                                    2. {partThree.partThreeBasketTwo[0] ? partThree.partThreeBasketTwo[0].content : ''}<br />
                                    3. {partThree.partThreeBasketThree[0] ? partThree.partThreeBasketThree[0].content : ''}<br />
                                    4. {partThree.partThreeBasketFour[0] ? partThree.partThreeBasketFour[0].content : ''}<br />
                                </div>
                            </div>
                            <div className={styles['part-title']}>Четвертая серия сигналов</div>
                            <div className={styles['answers-container']}>
                                <div className={styles['report-right-answers']}>
                                    1. Готовность подавать команду<br />
                                    2. Опустить колено (стрелу)<br />
                                    3. Втянуть стрелу<br />
                                </div>
                                <div className={styles['report-user-answers']}>
                                    1. {partFour.partFourBasketOne[0] ? partFour.partFourBasketOne[0].content : ''}<br />
                                    2. {partFour.partFourBasketTwo[0] ? partFour.partFourBasketTwo[0].content : ''}<br />
                                    3. {partFour.partFourBasketThree[0] ? partFour.partFourBasketThree[0].content : ''}<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Preview>
                <div className={styles['right-side']}>
                    <div onClick={() => print("a", "pdf")} id="download-button" className={styles['download-button']}><img className={styles["download-icon"]} src="./img/labOne/download-icon.png" /></div>
                    <div onClick={toPrint} id="print-button" className={styles['print-button']}><img className={styles["print-icon"]} src="./img/labOne/print-icon.png" /></div>
                </div>
            </div>


        </>
    );


}