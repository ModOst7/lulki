import { Link } from "react-router-dom";
import styles from "../../css/LabTwo.module.css";


import { Preview, print } from 'react-html2pdf';
import { useState, useEffect } from "react";

export default function LabThree() {

    const [scale, setScale] = useState(1)

    const [totalScore, setTotalScore] = useState(0);

    const [entrance, setEntrance] = useState(true);
    const [lab, setLab] = useState(false);
    const [final, setFinal] = useState(false);

    const [mainPage, setMainPage] = useState(true);
    const [partOne, setPartOne] = useState(false);
    const [partTwo, setPartTwo] = useState(false);
    const [partThree, setPartThree] = useState(false);

    const [chooseOneComplete, setChooseOneComplete] = useState(false);
    const [chooseTwoComplete, setChooseTwoComplete] = useState(false);
    const [chooseThreeComplete, setChooseThreeComplete] = useState(false);

    const [choosedAnswers, setChoosedAnswers] = useState((new Array(21)).fill(false));


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


    const toEntrance = () => {       
        setChooseOneComplete(false);
        setChooseTwoComplete(false);
        setChooseThreeComplete(false);
        setLab(false); setEntrance(true)
        setChoosedAnswers(choosedAnswers.map(item => false));
    }

    const startLab = () => {
    }

    const toOne = () => {
    }

    const backFromOne = () => {
    }

    const nextFromOne = () => {
    }

    const toTwo = () => {
    }

    const backFromTwo = () => {
    }

    const nextFromTwo = () => {
    }

    const toThree = () => {
    }

    const backFromThree = () => {
    }

    const nextFromThree = () => {
    }

    const chooseAnswer = (e: any) => {
    }

    const calculateTotalScore = () => {
        
    }


    return (
        <>
            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={`${styles['main-entrance']} ${entrance ? '' : styles['closed']} `}>
                <div className={styles['container-entrance']}>
                    <div className={styles['description-block']}>
                        <div className={styles['text']}>
                        Работники, находящиеся в люльке, должны быть обеспечены средствами индивидуальной защиты от падения с высоты. Такие системы и входящая в них номенклатура устройств, приспособлений и средств индивидуальной и коллективной защиты работников от падения с высоты, а также потребность в них определяются и указываются в плане производства работ или в технологических картах работ на высоте. Их должен предоставить рабочему люльки работодатель на основании результатов оценки рисков и специальной оценки условий труда.
<br /> <br />Выполните задание, чтобы проверить свое знание устройства средств индивидуальной защиты от падения с высоты.


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
            {/*==========================LABA=========================*/}
            
                <div className={styles['container-steps']}>
                    <div className={styles['title-steps']}>
                        <div className={styles['title-one-steps']}>Лабораторная работа</div>
                        <div className={styles['title-two-steps']}>Подготовка к выполнению работ в люльке</div>
                    </div>
                    
                    <div className={`${styles['part-one']} ${partOne ? styles['vis'] : ''} `}>
                        
                    </div>

                    <div className={`${styles['part-two']} ${partTwo ? styles['vis'] : ''} `}>
                        
                    </div>

                    <div className={`${styles['part-three']} ${partThree ? styles['vis'] : ''} `}>
                        
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
                
            </div>


        </>
    );


}