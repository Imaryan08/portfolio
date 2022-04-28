import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.jpg";

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Rampukar Yadav" className={classes.avatarImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius:'50%',
    width:"320px",
    height:"320px",
    objectFit:'cover',
    objectPosition: "0 -20px",
    boxShadow:theme.shadows[10]
  },
}));

export default Avatar;
