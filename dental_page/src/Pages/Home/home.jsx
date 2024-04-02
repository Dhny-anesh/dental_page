import React, { useEffect, useState } from "react";
import NavButton from "../../components/btn";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
function HomePage() {
  const { t, i18n } = useTranslation();

  // This effect runs once on component mount and changes the language to Hindi
  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <div className="text-center p-8 mx-4 w-3/4">
      <h1 className="font-serif text-4xl font-bold text-indigo-600 leading-tight">
        {t('home.title')}
      </h1>
      <h2 className="font-sans text-2xl font-medium text-gray-700 leading-snug">
        {t('home.subtitle')}
      </h2>
      <p className="font-sans text-gray-500 text-lg italic mt-2">
        {t('homePage.tagline')}
      </p>
      <NavButton text={t('home.button')} destination="/info"/>
    </div>
  );
}

export default HomePage;