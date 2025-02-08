import { useState } from "react";
import emailjs from "emailjs-com";
import "../Contact/Contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

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
          from_name: name,
          email,
          message,
          reply_to: email,
        },
        "4nlB2gcdxXfIrPrXq"
      )
      .then(
        (result) => {
          setStatus("success");
          form.reset();

          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("error");
          form.reset();
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <div className="contact py-1" id="contact">
      <div className="container">
        <p className="ralemont-font head text-center">Get in Touch</p>
        <p className="cont mont-font text-center mb-4">
          Feel free to reach out if you have any questions, project inquiries,
          or collaboration opportunities.
        </p>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 mont-font">
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white rounded shadow-sm form-mob"
            >
              <div className="mb-3">
                <label
                  className="form-label input-css text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control w-100"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label input-css text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control w-100"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label input-css text-dark"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="form-control w-100"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn button w-100"
                style={{ backgroundColor: "#62BA1B" }}
              >
                Submit
              </button>

              {status && (
                <div
                  className={`alert mt-3 ${
                    status === "success" ? "alert-success" : "alert-danger"
                  }`}
                  role="alert"
                  style={{
                    textAlign: "center",
                    fontSize: "1.2rem",
                    borderRadius: "5px",
                  }}
                >
                  {status === "success" ? (
                    <>
                      Your message has been sent successfully! <br />
                      Thank you for reaching out. 🎉
                    </>
                  ) : (
                    <>Something went wrong. Please try again! 😞</>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
