import { style } from "@vanilla-extract/css";

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
  ":hover": {
    backgroundColor: "rgba(207, 217, 222)",
    color: "rgb(0, 0, 0, 1)",
  },
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

export const topbar = style({
  position: "fixed",
  top: "-1px",
  width: "100vw",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backdropFilter: "blur(15px)",
  zIndex: 1,
  "@media": {
    "(max-width: 640px)": {
      height: 60,
    },
  },
});

export const topbarLogo = style({
  color: "white",
  marginLeft: "50px",
  "@media": {
    "(max-width: 640px)": {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 0)",
      marginLeft: 0,
    },
  },
});

export const topbarLargeScreen = style({
  display: "flex",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 0)",
  justifyContent: "center",
  "@media": {
    "(max-width: 640px)": {
      display: "none !important",
    },
    "(max-width: 820px)": {
      padding: "20px 25px",
    },
  },
});

export const topBarContent = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 32px",
});

export const topBarText = style({
  whiteSpace: "nowrap",
  marginLeft: "10px",
  "@media": {
    "(max-width: 820px)": {
      display: "none",
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
