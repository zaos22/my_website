import React from 'react';
import { useTranslation } from 'react-i18next';
import SpainFlag from '../../img/flags/spain.png';
import USAFlag from '../../img/flags/usa.png';
import GermanyFlag from '../../img/flags/germany.png';
import CataloniaFlag from '../../img/flags/catalonia.png';
import './style.css';

function LanguageSelector() {
    const { i18n } = useTranslation();
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    const flagSrc = () => {
      switch (i18n.language) {
        case 'es':
          return SpainFlag;
        case 'ca':
          return CataloniaFlag;
        case 'de':
          return GermanyFlag;
        default:
          return USAFlag;
      }
    };
  
    return (
      <div className="language-selector-container">
        <img src={flagSrc()} alt="Flag" className="flag-icon" />
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          defaultValue={i18n.language}
          className="language-selector"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="ca">CA</option>
          <option value="de">DE</option>
        </select>
      </div>
    );
  }
  
  export default LanguageSelector;
  
