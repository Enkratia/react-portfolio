import React from "react";

import { ContactsFAQType } from "../../../redux/backendApi/types";
import { useGetContactsFAQQuery } from "../../../redux/backendApi";

import s from "./ContactsFAQ.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { SkeletonContactsAccordion } from "../../Skeletons";

type ContactsAccordionItemProps = {
  info: ContactsFAQType;
  idx: number;
};

export const ContactsAccordionItem: React.FC<ContactsAccordionItemProps> = ({ info, idx }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemBody = e.currentTarget.nextElementSibling as HTMLDivElement;
    if (!itemBody) return;

    if (isOpen) {
      itemBody.style.height = "";
    } else {
      const height = itemBody.scrollHeight;
      itemBody.style.height = height + "px";
    }

    setIsOpen((b) => !b);
  };

  return (
    <li className={s.accordionItem}>
      <button
        onClick={onItemClick}
        className={s.accordionHead}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={`contacts-accordion-${idx}`}>
        <span className={s.accordionTitle}>{info.question}</span>

        <span
          className={`${s.accordionToggle} ${cs.toggle} ${cs.toggleMid} ${
            isOpen ? cs.toggleActive : ""
          }`}
          aria-hidden="true"></span>
      </button>

      <div className={s.accordionBody} id={`contacts-accordion-${idx}`}>
        <div className={s.accordionBodyWrapper}>{info.answer}</div>
      </div>
    </li>
  );
};

export const ContactsFAQ: React.FC = () => {
  const { data: faq, isError } = useGetContactsFAQQuery();

  if (isError) {
    console.warn("Failed to load FAQ");
    alert("Failed to load FAQ");
  }

  return (
    <div className={s.root} role="tabpanel" id="contacts-2">
      <ul className={s.accordion}>
        {!faq
          ? [...Array(8)].map((_, i) => <SkeletonContactsAccordion key={i} />)
          : faq.map((info, i) => <ContactsAccordionItem info={info} idx={i} />)}
      </ul>
    </div>
  );
};
