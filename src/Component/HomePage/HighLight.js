import React from "react";
import LibraryServices from "./LibraryServices";
import HighLightStyles from "./CssFile/HighLight.module.css";
//function for study and researchers hints
const Text = () => {
  return (
    <div>
      <p>
        we welcome students and researchers of all ages from complete beginners
        to experienced academics and whether your research is for personal,
        formal learning or work. our knowledgeable and friendly librarians and
        archivists can help you with everything from investigating your family
        tree, exploring local history to writing a book, studying for an exam.
        We are always pleased to suggesst resources to help you and ways to
        develop your research further. The libratry is a centre of excellence
        for knowledge and discobery, with a vast collection of reference
        resources covering every topic under the sun including books, journals,
        periodicals and other publications. There are study spaces, wifi and
        computer available throughout the building, offering you a comfortable
        environment with everything on hand in which to study or carry out
        research.
      </p>
      <br />
    </div>
  );
};
const HighLights = () => {
  //destructured styles
  const { research } = HighLightStyles;

  return (
    <div className={research}>
      <div>
        <h2>Study and research at the library of christopher university</h2>
        <br />
        <Text /> <br />
        <br />
      </div>
      <LibraryServices />
    </div>
  );
};

export default HighLights;
