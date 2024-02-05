import { style } from "@vanilla-extract/css";

// export const topbarLogo = style({
//   color: "white",
//   marginLeft: "50px",
//   "@media": {
//     "(max-width: 640px)": {
//       position: "absolute",
//       left: "50%",
//       transform: "translate(-50%, 0)",
//       marginLeft: 0,
//     },
//   },
// });

// export const topbarLargeScreen = style({
//   display: "flex",
//   position: "absolute",
//   left: "50%",
//   transform: "translate(-50%, 0)",
//   justifyContent: "center",
//   "@media": {
//     "(max-width: 640px)": {
//       display: "none !important",
//     },
//     "(max-width: 820px)": {
//       padding: "20px 25px",
//     },
//   },
// });

export const navBar = style({
  position: "fixed",
  width: "100vw",
  height: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  "@media": {
    "(max-width: 640px)": {
      height: 30,
    },
  },
});

export const topBarContent = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 32px",
  ":hover": {
    backgroundColor: "rgba(15, 20, 25, 0.1)",
  },
  "@media": {
    "(max-width: 820px)": {
      padding: "15px 20px",
    },
  },
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
