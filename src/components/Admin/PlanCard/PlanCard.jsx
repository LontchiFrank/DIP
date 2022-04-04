import React from "react";
import styles from "./PlanCard.module.css";
import { Avater } from "../../../components";
import moment from "moment";

function PlanCard({ user }) {
  return (
    <div>
      <div className={styles.card}>
        <div
          className={
            user.plan !== "none"
              ? user.plan === "free"
                ? `${styles.colorContainer}`
                : `${styles.colorContainerPremium}`
              : `${styles.none}`
          }
        ></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <span className={styles.dt}>
            {moment(parseInt(user.date)).format("MMMM Do YYYY")}
          </span>
        </div>
        <div className={`containerCenter`}>
          <div className={styles.line}></div>
        </div>
        <div className={`containerCenter ${styles.userInfoContainer}`}>
          <div>
            <Avater
              imageUrl={
                user.avater.length < 1 ? "/Default-avatar.jpg" : user.avater
              }
            />
          </div>
          <div className={styles.txtContainer}>
            {user.name} <br />
            <span className={styles.email}> {user.email}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className={styles.usersPlan}>{user.plan} </span>
          <div className={`${styles.pendingContianer} `}>
            <div className={styles.round}></div>
            Approved
          </div>
        </div>
        <div className={` containerCenter ${styles.imgContainer}`}>
          <img src="/Group.png" alt="tick-icon" />
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
