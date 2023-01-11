import { Outlet, Link } from "react-router-dom";
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
                    <div className={styles['title-one']}></div>
                    <div className={styles['title-two']}></div>

                    <div className={styles["form-registration"]}>
                        <div>
                            <div>ФАМИЛИЯ</div>
                            <input
                                value={fullname.lastName}
                                className={styles["last-name"]}
                                placeholder=" Фамилия"
                                onChange={(e) => {
                                    dispatch(changeLastName(e.target.value));
                                }}
                            />
                        </div>
                        <div>
                            <div>ИМЯ</div>
                            <input className={styles["first-name"]}
                                value={fullname.firstName}
                                placeholder=" Имя"
                                onChange={(e) => {
                                    dispatch(changeFirstName(e.target.value));
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}