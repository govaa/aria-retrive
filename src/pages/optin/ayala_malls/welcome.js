import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import styles from "styles/Optin.module.css";
const FinishPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <Image src='/images/ayalaWelcome.png' layout='fill' />
      <div
        style={{
          position: "absolute",
          // left: "20vw",
          top: "47vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            // width: "100vw",
          }}
        >
          <a href='https://www.ayalamalls.com/'>
            <Typography
              sx={{
                color: "#fff",
                textDecoration: "underline",
                // textShadow:
                //   "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
              }}
              variant='subtitle2'
            >
              Our Homepage
            </Typography>
          </a>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          // left: "20vw",

          top: "87vh",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <a
              href='https://play.google.com/store/apps/details?id=com.ayalamalls.zing'
              target='_blank'
            >
              <Image
                src='/images/play-store.e78ff1ac.png'
                height={30}
                width={80}
              />
            </a>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <a href='https://apps.apple.com/app/id1473763212' target='_blank'>
              <Image
                src='/images/app-store.04384bb2.png'
                height={30}
                width={80}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
