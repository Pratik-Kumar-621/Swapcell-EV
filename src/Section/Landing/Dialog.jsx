import React from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const DialogContact = ({ HandleClose }) => {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div className="login">
      <div className="title">Contact Us</div>
      <form onSubmit={HandleSubmit}>
        <TextField
          required
          className="input-form"
          label="Name"
          variant="outlined"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />

        <TextField
          required
          className="input-form"
          id="outlined-basic-contact"
          label="Contact"
          variant="outlined"
          type="number"
          value={values.contact}
          onChange={(e) => setValues({ ...values, contact: e.target.value })}
        />
        <TextField
          required
          className="input-form"
          id="outlined-basic-email"
          label="Email"
          variant="outlined"
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <TextField
          className="input-form"
          id="outlined-basic-message"
          label="Message"
          variant="outlined"
          type="text"
          multiline
          rows={3}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />

        <div className="buttons-dialog">
          <Button variant="outlined" color="error" onClick={HandleClose}>
            Cancel
          </Button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
          <Button variant="contained" color="success" type="submit">
            Send &nbsp; <SendIcon />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DialogContact;
