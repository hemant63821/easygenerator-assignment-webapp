import React, { Fragment } from "react";
import "./WelcomePage.scss";

export default function WelcomePage(props) {
  const [userName, setUserName] = React.useState("");
  return (
    <Fragment>
      <div className="welcome_screen">
        <div className="welcom_screen_content">
          <h1>Welcome {userName} to the Application</h1>
        </div>
      </div>
    </Fragment>
  );
}
