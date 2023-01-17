import { Link } from "react-router-dom";
import styles from "../../css/LabOne.module.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function LabOne() {

    const [entrance, setEntrance] = useState(true);
    const [lab, setLab] = useState(false);
    const initialItems = [
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
        },
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
        },
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

    const reorder = (list: any, startIndex: any, endIndex: any) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const [containerOne, setContainerOne] = [0, 1];

    const startLab = () => {
        setEntrance(false);
        setLab(true);
    }

    const anim1 = () => {
        let icon2 = document.getElementById("icon-1-2");
        if (icon2) {
            icon2.style.opacity = "1";
            setTimeout(() => { icon2!.style.opacity = "0"; }, 1000);
        }

    }

    const onDragEnd = (result: any) => {

    }

    const getItemStyle = (isDragging: any, draggableStyle: any) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        padding: 5 * 2,
        margin: `0 0 ${5}px 0`,

        // change background colour if dragging
        background: isDragging ? "#F28300" : "#F4F4F4",

        // styles we need to apply on draggables
        ...draggableStyle
    });
    const getListStyle = (isDraggingOver: any) => ({
        background: isDraggingOver ? "lightblue" : "lightgrey",
        padding: 5,
    });

    return (
        <>
            <div className={`${styles['main-entrance']} ${entrance ? '' : styles['closed']} `}>
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
            {/*================================LABS=========================*/}
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
                                <div className={styles['words-step-one-container']}>
                                    

                                    <Droppable key={"rowOne-1"} droppableId={"rowOne-1"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-one']}>
                                                {initialItems.slice(0, 4).map((item, index) => (
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

                                    <Droppable key={"rowTwo-1"} droppableId={"rowTwo-1"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-one']}>
                                                {initialItems.slice(4, 7).map((item, index) => (
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

                                    <Droppable key={"rowThree-1"} droppableId={"rowThree-1"} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                                {...provided.droppableProps}
                                                className={styles['words-step-one']}>
                                                {initialItems.slice(7, 10).map((item, index) => (
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
                                <div className={`${styles['container-step-one']} ${styles['container-drop']}`}>

                                    <div
                                        className={styles['dropzone']}
                                        onClick={anim1}>
                                        <img className={"icon-1-1"} id={"icon-1-1"} src="./img/labOne/lab1_1_1_f.png" />
                                        <img className={"icon-1-2"} id={"icon-1-2"} src="./img/labOne/lab1_1_2_f.png" />
                                        <Droppable key={"basketOne-1"} droppableId={"basketOne-1"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>

                                    </div>

                                    <div className={styles['dropzone']}>
                                        <img className={styles["test-icon"]} src="./img/labOne/lab1_1_1_f.png" />
                                        <Droppable key={"basketTwo-1"} droppableId={"basketTwo-1"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </div>
                                    <div className={styles['dropzone']}>
                                        <img className={styles["test-icon"]} src="./img/labOne/lab1_1_1_f.png" />
                                        <Droppable key={"basketThree-1"} droppableId={"basketThree-1"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                        </div>
                                    <div className={styles['dropzone']}>
                                        <img className={styles["test-icon"]} src="./img/labOne/lab1_1_1_f.png" />
                                        <Droppable key={"basketFour-1"} droppableId={"basketFour-1"} direction="vertical">
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    style={getListStyle(snapshot.isDraggingOver)}
                                                    {...provided.droppableProps}
                                                    className={styles['drop-section']}>
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                        </div>
                                </div>
                            </div>
                            <div className={styles['section-three']}>
                                <div className={styles['navigation-workplace']}>
                                    <div onClick={() => { setLab(false); setEntrance(true) }} className={styles['back-workplace']}>
                                        <div className={styles['back-text']}>{'<'} НАЗАД</div>
                                    </div>
                                    <div className={styles['next-workplace']}>
                                        <div className={styles['next-text']}>ДАЛЕЕ {'>'}</div>
                                    </div>
                                </div>
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            </div>


        </>
    );


}