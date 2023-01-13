import { Link } from "react-router-dom";
import styles from "../css/Root.module.css";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    changeFirstName,
    changeLastName,
    selectFullname,
} from "../features/fullname/fullnameSlice";

export default function Root() {
    const fullname = useSelector(selectFullname);
    const dispatch = useDispatch();

    return (
        <>

            <div className={styles['main']}>
                <div className={styles['container']}>
                    <div className={styles['title-one']}>Электронный <br /> практикум</div>
                    <div className={styles['title-two']}><span className={styles['black']}>РАБОЧИЙ</span> <span className={styles['white']}>ЛЮЛЬКИ</span></div>

                    <div className={styles["form-registration"]}>
                        <div className={styles["block-name"]}>
                            <div className={styles["label-name"]}>ФАМИЛИЯ</div>
                            <input
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
                            <input className={styles["first-name"]}
                                value={fullname.firstName}
                                placeholder=""
                                onChange={(e) => {
                                    dispatch(changeFirstName(e.target.value));
                                }}
                            />
                        </div>
                    </div>
                    <Link to={`/menu/`}>
                    <div className={styles["accept-button"]}>
                        <div className={styles["accept-button-text"]}>ПОДТВЕРДИТЬ {'>'}</div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    );
}