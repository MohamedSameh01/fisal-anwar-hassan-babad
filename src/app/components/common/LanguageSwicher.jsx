import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState("ar");

  return (
    <div className="flex items-center space-x-1 rtl:space-x-reverse ">
      <select
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
        className="px-2 border border-secondary-color rounded-lg focus:ring-2 focus:ring-main-color cursor-pointer"
      >
        <option value="ar" className="bg-background-color">
          العربية 🇸🇦
        </option>
        <option value="en">English en</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
