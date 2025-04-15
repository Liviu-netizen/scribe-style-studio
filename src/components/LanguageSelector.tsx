
import React from 'react';
import { useLanguage, Language } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('en')}
        className={cn(
          "text-sm px-2 py-1 rounded transition-colors",
          language === 'en' 
            ? "bg-navy-700 text-white" 
            : "text-slate-300 hover:text-white"
        )}
        aria-label={t("language.select") + " English"}
      >
        EN
      </button>
      <span className="text-slate-400">/</span>
      <button
        onClick={() => handleLanguageChange('ro')}
        className={cn(
          "text-sm px-2 py-1 rounded transition-colors",
          language === 'ro' 
            ? "bg-navy-700 text-white" 
            : "text-slate-300 hover:text-white"
        )}
        aria-label={t("language.select") + " Romanian"}
      >
        RO
      </button>
    </div>
  );
};

export default LanguageSelector;
