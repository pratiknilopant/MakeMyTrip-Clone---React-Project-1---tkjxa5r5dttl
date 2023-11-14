import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { SignUp } from "../../Authentication/SignUp/SignUp";
import * as Components from "./Components";
import { Login } from "../../Authentication/Login/Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "54%",
  transform: "translate(-50%, -50%)",
  width: 800,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [signIn, toggle] = React.useState(true);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          fontSize: "0.7rem",
          fontWeight: "500",
          color: "var(--color-btn-primary-text)",
          textTransform: 'capitalize'
        }}
      >
        Login or Create Account
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <SignUp /> */}

          <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Create Account</Components.Title>
                <SignUp />
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
              <Components.Form>
                <Components.Title>Login</Components.Title>
                <Login />
                {/* <Components.Anchor href="#">
                  Forgot your password?
                </Components.Anchor> */}
              </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>
                <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                    To keep connected with us please login with your personal
                    info
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                    Sign In
                  </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel signinIn={signIn}>
                  <Components.Title>
                    Sign up now to join the club of 10 crore+ Happy Travellers
                  </Components.Title>
                  <Components.Paragraph></Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                    Sigin Up
                  </Components.GhostButton>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
          </Components.Container>
        </Box>
      </Modal>
    </div>
  );
}
