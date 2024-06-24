import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import styles from "./Cards.module.scss";

const cardData = [
  {
    iconClass: "bi bi-camera2",
    title: "Fotos",
    text: "Una tarjeta extensa con texto de apoyo que invita a explorar más contenido.",
  },
  {
    iconClass: "bi bi-camera-reels",
    title: "Videos",
    text: "Una tarjeta extensa con texto de apoyo que invita a explorar más contenido.",
  },
  {
    iconClass: "bi bi-heart",
    title: "Favs",
    text: "Una tarjeta extensa con texto de apoyo que invita a explorar más contenido.",
  },
];

export const Cards = () => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3  g-3">
      {cardData.map((card, index) => (
        <MDBCol key={index}>
          <MDBCard className={styles.cardCntn}>
            <div className={styles.cardContent}>
              <i
                className={card.iconClass}
                style={{ color: "rgba(255, 147, 244, 1)", fontSize: "38px" }}
              ></i>
              <MDBCardBody>
                <MDBCardTitle className={styles.titleCard}>
                  {card.title}
                </MDBCardTitle>
                <MDBCardText className={styles.cardText}>
                  {card.text}
                </MDBCardText>
              </MDBCardBody>
            </div>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
};
