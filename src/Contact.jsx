import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2052288361187!2d73.92870987496292!3d18.519625682573736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f243f053e3%3A0xe6a53b5cb4aa97ca!2sSeasons%20Mall!5e0!3m2!1sen!2sin!4v1751369581782!5m2!1sen!2sin"
        width="100%"
        height="450"
        styel={{ border: "0" }}
        allowfullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xdkzbbdl"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder=" Enter Your Username"
              name="username"
              required
              autoComplete="off"
              // value=""
            />
            <input
              type="email"
              placeholder=" Enter Your Email"
              name="Email"
              required
              autoComplete="off"
              // value=""
            />
            <textarea
              name=" Message"
              id=""
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder=" Enter Your Message"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
export default Contact;
