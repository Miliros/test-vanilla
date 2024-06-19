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
    <MDBRow
      className="row-cols-1 row-cols-md-3 g-3"
      //   style={{ backgroundColor: "red", width: "850px" }}
    >
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
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
