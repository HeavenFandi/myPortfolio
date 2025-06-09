import emailjs from "emailjs-com";
import { useState } from "react";
const useContact = () => {
   const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.send("service_g1cbxab", "template_yvny1hp", {
      user_name: formDetails.firstName + " " + formDetails.lastName,
      user_email: formDetails.email,
      message: formDetails.message,
      phone: formDetails.phone
    }, "eMmIqdJxKQVZIgok7")
      .then((result) => {
        console.log(result.text);
        setStatus({ success: true, message: " Message delivered!" });
        setButtonText("Send");
        setFormDetails({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
        setStatus({ success: false, message: "Transmission failed, try again." });
        setButtonText("Send");
      });
  };

  return {handleSubmit,buttonText,status,onFormUpdate,formDetails}
}

export default useContact
