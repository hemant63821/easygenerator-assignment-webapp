import { Button, makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import SnackBarNotification from "../components/snackbar/Snackbar";
import "./Login.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  subHeader: {
    color: "#66759c",
    fontSize: "14px",
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [snackBar, openSnackBar] = React.useState(false);
  const [notificationMsg, setNotifificationMsg] = React.useState({
    msg: "",
    severity: "error",
  });
  const [verifyOtp, openVerifyOtp] = React.useState(false);

  const authenticate = () => {};

  const openForgotTab = () => {
    openVerifyOtp(true);
  };

  return (
    <div className="login_container container-fluid">
      <SnackBarNotification
        openNotification={"test"}
        closeSnackbar={() => {
          openSnackBar(false);
        }}
        severity={notificationMsg.severity}
        message={notificationMsg.msg}
      />

      <div className="login-card">
        <div className="login-logo mt-4">
          <img
            alt="login_logo"
            className="logo"
            src="images/easygenerator.jpeg"
          />
        </div>
        <div className="content mt-5">
          <form
            className={classes.root}
            noValidate
            autoComplete="current-password"
          ></form>
        </div>
        <Fragment>
          <div className="footer mt-4">
            <Button
              variant="contained"
              className="login-button"
              color="secondary"
              onClick={authenticate}
            >
              Login
            </Button>
          </div>
          <div className="footer mt-4">
            <span
              onClick={openForgotTab}
              style={{
                cursor: "pointer",
                color: "#66759c",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </span>
          </div>
        </Fragment>
      </div>
    </div>
  );
}

// const mapStateToProps = state => ({
//     validUser: state.validateUser.error
// })

// export default connect(mapStateToProps, { validateUser })(Login)
