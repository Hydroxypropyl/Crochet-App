import React, { useState } from 'react';
import styles from '../styles/abbreviation.module.css';

const Abbreviation = () => {
  const uk_terms = ["Double crochet (dc)","Slip stitch (sl st)", "Half-treble crochet (htr)", "Treble crochet (tr)","Double trebble crochet (dtr)", "Magic loop/magic ring", "chain (ch)", "Decrease (dec)", "Increase (inc)" ];
  const us_terms = ["Single crochet (sc)","Slip stitch (sl st)", "Half-double crochet (hdc)","Double crochet (dc)","Treble (tr) / Triple crochet (tc)", "Magic loop/magic ring","chain (ch)","Decrease (dec)", "Increase (inc)"];
  const fr_terms = ["Maille serrée (ms)", "Maille coulée (mc)", "Demi-bride (db)","Bride (b/br)", "Double bride (db)", "Cercle magique", "maille levée/maille en l'air (ml)", "Diminution (dim)","Augmentation (aug)"];
  const dict = {
  "uk":uk_terms,
  "us":us_terms,
  "fr":fr_terms,
  }
  
  const [selectedLang1, setSelectedLang1] = useState("uk");
  const [selectedLang2, setSelectedLang2] = useState("us");

  const handleLang1Change = (event) => {
    setSelectedLang1(event.target.value);
  };

  const handleLang2Change = (event) => {
    setSelectedLang2(event.target.value);
  };

    return (
    <div className={styles.center_container}>
      <p>Abbreviation</p>
      <div className={styles.dropdown_row}>
        <label htmlFor="lang1">Select Language 1:</label>
        <select id="lang1" value={selectedLang1} onChange={handleLang1Change} className={styles.dropdown}>
          {Object.keys(dict).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <label htmlFor="lang2">Select Language 2:</label>
        <select id="lang2" value={selectedLang2} onChange={handleLang2Change} className={styles.dropdown}>
          {Object.keys(dict).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.table_container}>
        <table>
          <thead>
            <tr>
              <th>{selectedLang1}</th>
              <th>{selectedLang2}</th>
            </tr>
          </thead>
          <tbody>
            {dict[selectedLang1].map((term, index) => (
              <tr key={index}>
                <td>{term}</td>
                <td>{dict[selectedLang2][index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Abbreviation;

