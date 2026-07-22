import styles from "./styles.module.css";
import type React from "react";

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{Icon}</div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
