import React, { Component } from "react";
import FaceBookLogo from "./Images/twitter-black-shape.svg";
import LinkedinLogo from "./Images/linked-in-logo-of-two-letters.svg";
import Email from "./Images/envelope.svg";
import UnichrisLogo from "../unichris logo.png";
import FooterStyle from "./Footer.module.css";
import CustomImage from "../Reuseable.component/Image.component/Image";
import CustomLink from "../Reuseable.component/Link.component/Link";
const TopArea = ({
  social_media_contact_wrapper,
  school_hint,
  school_phone_contact,
  social_media_logos,
  motto
}) => {
  return (
    <div className={social_media_contact_wrapper}>
      <div className={school_hint}>
        <CustomImage src={UnichrisLogo} alt={UnichrisLogo} />
        <div className={motto}>
          <h4>unichris library</h4>
          <p>my home! our home!!</p>
        </div>
      </div>
      <br />
      <Contacts
        school_phone_contact={school_phone_contact}
        social_media_logos={social_media_logos}
      />
    </div>
  );
};
const Contacts = ({ school_phone_contact, social_media_logos }) => {
  const phoneArray = [
    "090-377-57032",
    "090-377-57033",
    "090-377-57036",
    "090-377-57037"
  ];
  const logoArray = [FaceBookLogo, LinkedinLogo, Email];
  return (
    <div>
      <p>
        want to go on research of all sort,
        <br />
        here is the right we serve you what <br />
        that your questions current journals <br />
        you wish to acces and more
      </p>
      <br />
      <div className={school_phone_contact}>
        <h3>phone number</h3>
        <br />
        {phoneArray.map((numbers, i) => (
          <i key={i}>{numbers}</i>
        ))}
      </div>
      <div className={social_media_logos}>
        <br />
        {logoArray.map((socialHandle_logos, i) => (
          <CustomLink
            key={i}
            url={"/"}
            text={
              <CustomImage
                src={socialHandle_logos}
                alt={"social media handle logo"}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

const Services = ({ service_wrapper, service_links_wrapper }) => {
  const serviceListArray = [
    "About unchris",
    "Admmision",
    "Employment",
    "Courses",
    "Jupeb program",
    "Icbt centre"
  ];
  return (
    <div className={service_wrapper}>
      <h3>services</h3>
      <br />
      <div className={service_links_wrapper}>
        {serviceListArray.map((schoolOffers, i) => (
          <CustomLink url={"/"} text={schoolOffers} key={i} />
        ))}
      </div>
    </div>
  );
};

const Categories = ({ footer_categories, categories_list }) => {
  const categories_listArray = [
    "fiction books",
    "non-fiction",
    "newspaper",
    "journal",
    "encyclopedias",
    "history"
  ];
  return (
    <div className={footer_categories}>
      <h3>categories</h3>
      <br />
      <div className={categories_list}>
        {categories_listArray.map((libraryHoldings, i) => (
          <CustomLink url={"/"} text={libraryHoldings} key={i} />
        ))}
      </div>
    </div>
  );
};
const EasyLink = ({
  footer_easy_links,
  categories_list,
  school_email_link
}) => {
  const easyLinkArray = [
    "books on literature",
    "books on social sciences",
    "books on mass communication"
  ];
  return (
    <div className={footer_easy_links}>
      <h3>easy links</h3>
      <br />
      <div className={categories_list}>
        {easyLinkArray.map((eBooks, i) => (
          <CustomLink url={"/"} text={eBooks} key={i} />
        ))}
      </div>
      <div className={school_email_link}>
        <a href="mailto:princewillchime43@gmail.com? subject=subject text">
          email
        </a>
      </div>
    </div>
  );
};
class Footer extends Component {
  render() {
    const {
      footer_wrapper,
      social_media_contact_wrapper,
      school_hint,
      school_phone_contact,
      social_media_logos,
      service_wrapper,
      service_links_wrapper,
      footer_categories,
      categories_list,
      footer_easy_links,
      school_email_link,
      copy_write,
      motto
    } = FooterStyle;
    return (
      <footer>
        <div>
          <div className={footer_wrapper}>
            <TopArea
              social_media_contact_wrapper={social_media_contact_wrapper}
              school_hint={school_hint}
              school_phone_contact={school_phone_contact}
              social_media_logos={social_media_logos}
              motto={motto}
            />
            <Services
              service_wrapper={service_wrapper}
              service_links_wrapper={service_links_wrapper}
            />
            <Categories
              footer_categories={footer_categories}
              categories_list={categories_list}
            />
            <EasyLink
              footer_easy_links={footer_easy_links}
              school_email_link={school_email_link}
              categories_list={categories_list}
            />
          </div>
          <div className={copy_write}>
            <h4>copyright 2019 christopher university</h4>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
