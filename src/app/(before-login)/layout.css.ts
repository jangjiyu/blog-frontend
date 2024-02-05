import { style } from "@vanilla-extract/css";

export const githubBtn = style({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  right: "40px",
  top: "50%",
  transform: "translate(0, -50%)",
  "@media": {
    "(max-width: 640px)": {
      right: "20px",
    },
  },
});

export const mainContent = style({
  width: "45vw",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: 80,
  minWidth: 576,
  "@media": {
    "(max-width: 640px)": {
      minWidth: "260px",
      width: "90vw",
      marginTop: 60,
    },
  },
});

export const mainContentContainer = style({
  display: "flex",
  justifyContent: "center",
  height: "fit-content",
  "@media": {
    "(max-width: 640px)": {
      marginBottom: 80,
      height: "auto",
    },
  },
});

export const logo = style({ display: "inline-block", height: "100px", margin: "2px" });

export const logoPill = style({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    backgroundColor: "rgba(15, 20, 25, 0.1)",
  },
  "@media": {
    "(max-width: 640px)": {
      height: 30,
    },
  },
});

export const container = style({
  display: "flex",
  justifyContent: "center",
  // height: "fit-content",
  "@media": {
    "(max-width: 640px)": {
      height: "auto",
    },
  },
});

export const listSectionWrapper = style({
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  "@media": {
    "(max-width: 1200px)": {
      display: "none",
    },
  },
});

export const listSection = style({
  width: "12vw",
  height: "100dvh",
});

export const listSectionFixed = style({ position: "fixed", width: "inherit", height: "100dvh" });

export const mainSectionWrapper = style({
  display: "flex",
  alignItems: "flex-start",
  // height: "100dvh",
  flexDirection: "column",
});

export const mainSection = style({
  backgroundColor: "orange",
  display: "flex",
  // height: "100%",
  width: "88vw",
});

export const main = style({ height: "200dvh" });

export const nav = style({ display: "inline-block", height: "100px", margin: "2px" });

export const login = style({
  width: 50,
  height: 40,
  borderRadius: 10,
  padding: "0 16px",
  fontSize: 15,
  color: "rgb(207, 217, 222)",
  border: "1px solid rgb(207, 217, 222)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  right: "0",
  margin: "10px",
  ":hover": {
    backgroundColor: "rgba(207, 217, 222)",
    color: "rgb(0, 0, 0, 1)",
  },
  "@media": {
    "(max-width: 1200px)": {
      display: "none",
    },
  },
});
