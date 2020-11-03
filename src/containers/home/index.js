import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AnimateLine from "../../components/AnimateLine/AnimateLine";
import CustomInput from "../../components/Input/CustomInput";
import { fetchUser, onUserInput } from "../../modules/user";

const useStyles = (props) => {
  const theme = useTheme();
  return makeStyles({
    root: {
      position: "relative",
      padding: theme.customSpacing.mobile.globalPaddingH,
      textAlign: "center",
      "& .MuiFormHelperText-root": {
        marginLeft: 2,
      },
      "& input": {
        textAlign: "center",
      },
    },
  })();
};

const Home = (props) => {
  const [showAuthorizeLine, setShowAuthorizeLine] = useState(false);
  const { onUserInput, user } = props;
  const { userInputData } = user || {};
  const { hasErrors, isFetching, hasFetched } = userInputData || {};
  const classes = useStyles();

  function handleUserOnChange(event) {
    const value = event.target.value;
    onUserInput({ username: value });
  }

  function handleUserFocus() {
    if (showAuthorizeLine) {
      setShowAuthorizeLine(true);
    }
  }

  return (
    <div className={classes.root}>
      <CustomInput
        label="Username"
        variant="outlined"
        onChange={handleUserOnChange}
        error={hasErrors}
        hasValidations={true}
        isFetching={isFetching}
        onBlur={handleUserFocus}
        helperText={hasErrors ? "Invalid Username" : null}
      />
      {!hasErrors && hasFetched && <AnimateLine />}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { onUserInput })(Home);
