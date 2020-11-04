import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AnimateLine from "../../components/AnimateLine/AnimateLine";
import CustomInput from "../../components/Input/CustomInput";
import { fetchUser, onUserInput } from "../../modules/user";
import CustomButton from "../../components/Button/CustomButton";
import {
  HIVE_LOGO_COLOR,
  HIVE_LOGO_HIGHLIGHTED_COLOR,
} from "../../theme/index";
import { Typography, Box, Fade } from "@material-ui/core";

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
    },
    authHiveSignerButtonText: {
      color: theme.palette.common.white,
    },
    authHiveButton: {
      padding: theme.customSpacing.normalSpacing / 1.2,
    },
    "@global": {
      "@keyframes fadeIn": {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
  })();
};

const url =
  "https://hivesigner.com/oauth2/authorize?client_id=dapplr&redirect_uri=https://api.dapplr.in/callback&scope=vote,comment,comment_options,offline,custom_json,claim_reward_balance";

const Home = (props) => {
  const [showAuthorizeLine, setShowAuthorizeLine] = useState(false);
  const { onUserInput, user } = props;
  const { userInputData } = user || {};
  const { hasErrors, isFetching, hasFetched, inputValue } = userInputData || {};
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

  function handleAuthButtonClick() {
    window.location.href = url;
  }

  console.log(inputValue);
  return (
    <Box display="flex" flexDirection="column" className={classes.root}>
      <Box>
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
      </Box>
      <Box>
        {!hasErrors && hasFetched && inputValue && (
          <AnimateLine durationSeconds={"2s"} />
        )}
      </Box>
      <Box>
        {!hasErrors && hasFetched && inputValue && (
          <Fade in timeout={1000} style={{ transitionDelay: "1.5s" }}>
            <CustomButton
              backgroundColor={HIVE_LOGO_COLOR}
              hoverColor={HIVE_LOGO_HIGHLIGHTED_COLOR}
              className={classes.authHiveButton}
              onClick={handleAuthButtonClick}
            >
              <Typography
                variant="button"
                className={classes.authHiveSignerButtonText}
              >
                Authorize with HiveSigner
              </Typography>
            </CustomButton>
          </Fade>
        )}
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { onUserInput })(Home);
