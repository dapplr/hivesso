import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = (props) => {
  const theme = useTheme();
  const { direction, size, durationSeconds } = props;
  return makeStyles({
    root: {
      height: 0,
      width: 1,
      [direction === "horizontal" ? "paddingTop" : "paddingLeft"]: "50%",
      [direction === "horizontal"
        ? "borderBottom"
        : "borderRight"]: `2px solid ${theme.palette.common.grey.light}`,
      "-webkit-animation": `${direction} ${durationSeconds} ease`,
      "-moz-animation": `${direction} ${durationSeconds} ease`,
      "-o-animation": `${direction} ${durationSeconds} ease`,
      animation: `${direction} ${durationSeconds} ease`,
      "animation-fill-mode": "forwards",
    },
    "@global": {
      "@keyframes vertical": {
        "0%": {
          height: 0,
        },
        "100%": {
          height: size,
        },
      },
      "@keyframes horizontal": {
        "0%": {
          width: 0,
        },
        "100%": {
          width: size,
        },
      },
    },
  })();
};

const AnimateLine = (props) => {
  const {
    size = 100,
    direction = "vertical",
    durationSeconds = "3s",
    className,
    ...other
  } = props;
  const classes = useStyles({
    size,
    direction,
    durationSeconds,
  });
  return <div className={classes.root} {...other}></div>;
};

export default AnimateLine;
