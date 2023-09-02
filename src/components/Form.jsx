import * as React from "react";
import {
  Box,
  Input,
  Select,
  TextField,
  Divider,
  Button,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import axios from "axios";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "1%",
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export default function Form() {
  const outerTheme = useTheme();

  const [firstName, setFirstName] = React.useState("First Name");
  const [lastName, setLastName] = React.useState("Last Name");
  const [email, setEmail] = React.useState("Email");
  const [phone, setPhone] = React.useState("Phone Number");
  const [note, setNote] = React.useState("Note");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const submit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      note: note,
    };

    // Set the content type to JSON in the request headers
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("/api/send-email", JSON.stringify(data), { headers: headers })
      .then((response) => {
        // Handle success
        console.log("Email sent:", response.data);

        // Display a notification (popup) indicating success
        alert("Email has been sent successfully!");
      })
      .catch((error) => {
        // Handle error
        console.error("Error sending email:", error);

        // Display a notification (popup) indicating the error
        alert("An error occurred while sending the email.");
      });
  };

  return (
    <Box id="form"  display='flex' justifyContent="center" >
      <ThemeProvider theme={customTheme(outerTheme)}>
        <Grid container  maxWidth="70%" justifyContent="center" m={2} spacing={2}>
          <Grid container item md={6}  maxWidth="70%">
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleFirstNameChange}
            />
          </Grid>
          <Grid container item  md={6} maxWidth="70%">
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={handleLastNameChange}
            />
          </Grid>
          <Grid container item md={6}>
          <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={{ width: "100%" }}
          onChange={handlEmailChange}
        />
          </Grid>
          <Grid container item  md={6}>
          <TextField
          id="standard-basic"
          label="Phone Number"
          variant="standard"
          sx={{ width: "100%" }}
          onChange={handlPhoneChange}
        />
          </Grid>
          <Grid container item  md={12}>
          <TextField
          id="standard-basic"
          fullWidth
          multiline // Enable multiline input
          rows={4} // Set initial number of rows
          label="Note"
          variant="standard"
          onChange={handleNoteChange}
        />
          </Grid>
          <Grid container item  md={12}>
          <Button variant="contained" sx={{ width: "100%" }} onClick={submit}>
          Contact Now!
        </Button>
          </Grid>
        </Grid>

      </ThemeProvider>
    </Box>
  );
}
