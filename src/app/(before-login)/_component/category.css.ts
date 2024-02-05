import { style } from "@vanilla-extract/css";

export const majorCategory = style({
  padding: "20px",
  color: "rgba(166, 166, 166, 1)",
  // borderBottom: "1px solid #eee",
});

export const minorCategory = style({
  padding: "8px",
  marginTop: "2px",
});

export const categoryButton = style({
  background: "none",
  border: "none",
  fontSize: "18px",
  cursor: "pointer",
  width: "100%",
  textAlign: "left",
  ":hover": {
    color: "rgba(201, 201, 201, 1)",
    width: "fit-content",
    textDecoration: "underline",
  },
});
