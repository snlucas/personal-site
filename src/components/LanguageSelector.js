import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../features/lang/languageSlice';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const handleChangeLanguage = (lng) => {
    dispatch(setLanguage(lng));
  };

  return (
    <div>
      <button type="button" onClick={() => handleChangeLanguage('en')}>English</button>
      <button type="button" onClick={() => handleChangeLanguage('pt')}>Português</button>
    </div>
  );
};

export default LanguageSelector;
