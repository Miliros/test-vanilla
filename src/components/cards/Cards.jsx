import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import styles from "./Cards.module.scss";

export const Cards = () => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-3">
      <MDBCol>
        <MDBCard className={styles.cardCntn}>
          <div className={styles.cardContent}>
            <i
              className="bi bi-camera2"
              style={{ color: "rgba(255, 147, 244, 1)", fontSize: "38px" }}
            ></i>
            <MDBCardBody>
              <MDBCardTitle className={styles.titleCard}>Fotos</MDBCardTitle>
              <MDBCardText className={styles.cardText}>
                Una tarjeta extensa con texto de apoyo que invita a explorar más
                contenido.
              </MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className={styles.cardCntn}>
          <div className={styles.cardContent}>
            <i
              class="bi bi-camera-reels"
              style={{ color: "rgba(255, 147, 244, 1)", fontSize: "38px" }}
            ></i>
            <MDBCardBody>
              <MDBCardTitle className={styles.titleCard}>Videos</MDBCardTitle>
              <MDBCardText className={styles.cardText}>
                Una tarjeta extensa con texto de apoyo que invita a explorar más
                contenido.
              </MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className={styles.cardCntn}>
          <div className={styles.cardContent}>
            <i
              class="bi bi-heart"
              style={{ color: "rgba(255, 147, 244, 1)", fontSize: "38px" }}
            ></i>
            <MDBCardBody>
              <MDBCardTitle className={styles.titleCard}>Favs</MDBCardTitle>
              <MDBCardText className={styles.cardText}>
                Una tarjeta extensa con texto de apoyo que invita a explorar más
                contenido.
              </MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
