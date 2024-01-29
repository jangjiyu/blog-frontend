import { style } from "@vanilla-extract/css";
import { global } from "../../globalTheme.css";

export const signup = style({
  width: 300,
  height: 40,
  borderRadius: 20,
  padding: "0 16px",
  fontSize: 15,
  backgroundColor: "rgb(29, 155, 240)",
  color: "white",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ":hover": {
    backgroundColor: "rgb(26, 140, 216)",
  },
});

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
    backgroundColor: "rgba(29,155,240,0.1)",
  },
});
