import { useState } from "react";
import emailjs from "emailjs-com";
import "../Contact/Contact.css";

function Contact() {
  const [status, setStatus] = useState(""); // to manage the success or error message

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission

    // Get form values explicitly
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    emailjs
      .send(
        "service_ksq8p6f",
        "template_x1myf98",
        {
          name,
          email,
          message,
        },
        "4nlB2gcdxXfIrPrXq"
      )
      .then(
        (result) => {
          setStatus("success"); // Set success status
          form.reset();

          // Reset status after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("error");
          form.reset();

          // Reset status after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <p className="raleway-font head">Get in Touch</p>
      <p className="cont IBM-font">
        Hi there! I&apos;d love to hear from you. Whether you have questions or
        feedback, <br />
        feel free to reach out. I’m here to help and will respond as soon as
        possible!
      </p>

      <div className="container mt-5 IBM-font form-div">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label input-css">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label input-css">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label input-css">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn button"
            style={{ backgroundColor: "#62BA1B" }}
          >
            Submit
          </button>

          {status && (
            <div
              className={`alert mt-3 ${
                status === "success" ? "alert-success" : "alert-danger"
              } fade-in`}
              role="alert"
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                width: "80%",
                margin: "10px auto",
                padding: "10px 20px",
                borderRadius: "5px",
                opacity: status ? 1 : 0,
                transition: "opacity 0.5s ease-out",
              }}
            >
              {status === "success" ? (
                <>
                  <span
                    role="img"
                    aria-label="success"
                    style={{ fontSize: "14px" }}
                  >
                    Your message has been sent successfully!
                    <br />
                    Thank you for reaching out, will get in touch shortly 🎉
                  </span>
                </>
              ) : (
                <>
                  <span role="img" aria-label="error">
                    Something went wrong. Please try again! 😞
                  </span>
                </>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
