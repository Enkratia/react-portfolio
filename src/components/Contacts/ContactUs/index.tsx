import { IMaskInput } from "react-imask";

import React from "react";

import { useGetContactUsQuery } from "../../../redux/backendApi";

import { useValidateForm } from "../../../util/customHooks";
import { ContactsSkeleton } from "../../../components";

import s from "./ContactUs.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Mail, Messenger, Phone, Twitter } from "../../../iconComponents";

const contactIcons = [
  <Phone aria-hidden="true" />,
  <Mail aria-hidden="true" />,
  <Messenger aria-hidden="true" />,
  <Twitter aria-hidden="true" />,
];

export const ContactUs: React.FC = () => {
  const phoneRef = React.useRef(null);
  const { isValidText, validateText, isValidEmail, validateEmail } = useValidateForm();

  const { data: contacts, isLoading, isError } = useGetContactUsQuery();

  if (isError) {
    return;
  }

  return isLoading ? (
    <ContactsSkeleton />
  ) : (
    <div className={s.root} role="tabpanel" id="contacts-0">
      <div className={s.content}>
        <h3 className={s.title}>
          If you have any questions, concerns or comments, we would love to hear from you! Submit
          your query using any of the methods below:
        </h3>

        {/* <!-- Contacts --> */}
        <ul className={s.contacts}>
          {contacts &&
            contacts.map((contact, i) => (
              <li key={i} className={s.contactsItem}>
                <a href={contact.href} className={s.contactsLink}>
                  {contactIcons[i]}
                  {contact.text}
                </a>
              </li>
            ))}
        </ul>

        {/* <!-- Form --> */}
        <form className={s.form}>
          <h3 className={s.title}>Or get in touch with us by completing the below form:</h3>

          {/* <!-- Fields --> */}
          <div className={s.fields}>
            {/* <!-- Field1 --> */}
            <div className={s.field}>
              <label htmlFor="contact-us-name" className={s.label}>
                Full Name*
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
                <input
                  onChange={(e) => validateText(e.target.value, 0)}
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  placeholder="Your full name"
                  id="contact-us-name"
                  name="contact-us-name"
                />
              </div>
            </div>

            {/* <!-- Field2 --> */}
            <div className={s.field}>
              <label htmlFor="contact-us-email" className={s.label}>
                Email*
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidEmail]}`} data-validity="email">
                <input
                  onChange={(e) => validateEmail(e.target.value)}
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  placeholder="Your working email"
                  id="contact-us-email"
                  name="contact-us-email"
                />
              </div>
            </div>

            {/* <!-- Field3 --> */}
            <div className={s.field}>
              <label htmlFor="contact-us-phone" className={s.label}>
                Phone
              </label>

              <div className={cs.inputWrapper}>
                <IMaskInput
                  ref={phoneRef}
                  mask="(000) 000 00 00"
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  placeholder="Your phone number"
                  id="contact-us-phone"
                  name="contact-us-phone"
                />
              </div>
            </div>

            {/* <!-- Field4 --> */}
            <div className={s.field}>
              <label htmlFor="contact-us-subject" className={s.label}>
                Subject
              </label>

              <div className={cs.inputWrapper}>
                <input
                  type="text"
                  className={`${s.input} ${cs.input}`}
                  placeholder="Title your message"
                  id="contact-us-subject"
                  name="contact-us-subject"
                />
              </div>
            </div>

            {/* <!-- Field5 --> */}
            <div className={s.field}>
              <label htmlFor="contact-us-message" className={s.label}>
                Message*
              </label>

              <div className={`${cs.inputWrapper} ${cs[isValidText[1]]}`}>
                <textarea
                  onChange={(e) => validateText(e.target.value, 1)}
                  className={`${s.textarea} ${cs.input}`}
                  placeholder="Write your message here"
                  id="contact-us-message"
                  name="contact-us-message"></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Submit --> */}
          <button className={`${s.submit} ${cs.btn} ${cs.btnLg}`}>Send message</button>
        </form>
      </div>
    </div>
  );
};
