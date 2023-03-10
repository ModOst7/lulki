import { Link } from "react-router-dom";
import styles from "../css/Root.module.css";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeFirstName,
    changeLastName,
    selectFullname,
} from "../features/fullname/fullnameSlice";

export default function Root() {
    const fullname = useSelector(selectFullname);
    const dispatch = useDispatch();

    const [scale, setScale] = useState(1)
    useEffect(() => {
        scalable(setScale)
        window.onresize = () => {
            scalable(setScale)
        }
    })

    const checkFullname = (e: any) => {
        if (!fullname.firstName || !fullname.lastName) {
            e.preventDefault();
        }
    }

    return (
        <>

            <div style={{ "transform": `scale(${scale})`, width: 1920, height: 969, transformOrigin: "top left" }} className={styles['main']}>
                <div className={styles['container']}>
                    <div className={styles['title-one']}>Электронный <br /> практикум</div>
                    <div className={styles['title-two']}><span className={styles['black']}>РАБОЧИЙ</span> <span className={styles['white']}>ЛЮЛЬКИ</span></div>
                    <form className={styles['form']} action="">
                        <div className={styles["form-registration"]}>
                            <div className={styles["block-name"]}>
                                <div className={styles["label-name"]}>ФАМИЛИЯ</div>
                                <input
                                    type="text"
                                    required
                                    name="lastName"
                                    value={fullname.lastName}
                                    className={styles["last-name"]}
                                    placeholder=""
                                    onChange={(e) => {
                                        dispatch(changeLastName(e.target.value));
                                    }}
                                />
                            </div>
                            <div className={styles["block-name"]}>
                                <div className={styles["label-name"]}>ИМЯ</div>
                                <input
                                    type="text"
                                    className={styles["first-name"]}
                                    required
                                    name="firstname"
                                    value={fullname.firstName}
                                    placeholder=""
                                    onChange={(e) => {
                                        dispatch(changeFirstName(e.target.value));
                                    }}
                                />
                            </div>
                        </div>
                        <Link to={`/menu/`} onClick={checkFullname}>
                            <div className={styles["accept-button"]}>
                                <div className={styles["accept-button-text"]} >ПОДТВЕРДИТЬ {'>'}</div>
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

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