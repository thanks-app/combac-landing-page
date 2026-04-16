import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "ar", name: "العربية", flag: "🇹🇳" },
];

function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const lang = window.location.pathname.split("/")[1];
    if (["fr", "ar"].includes(lang)) {
      setCurrentLang(lang);
    } else {
      setCurrentLang("en");
    }
  }, []);

  const changeLanguage = (code: string) => {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    
    let newPath = "/";
    
    // Check if the first segment is a language code
    const firstSegment = pathSegments[0];
    const isLangSegment = ["fr", "ar", "en"].includes(firstSegment);
    
    if (code === "en") {
      // If switching to English, remove the language segment if it exists
      if (isLangSegment) {
        newPath = "/" + pathSegments.slice(1).join("/");
      } else {
        newPath = currentPath;
      }
    } else {
      // If switching to fr/ar
      if (isLangSegment) {
        newPath = "/" + code + "/" + pathSegments.slice(1).join("/");
      } else {
        newPath = "/" + code + currentPath;
      }
    }

    // Clean up trailing slash and double slashes
    newPath = newPath.replace(/\/+/g, "/");
    if (newPath.length > 1 && newPath.endsWith("/")) {
        newPath = newPath.slice(0, -1);
    }

    window.location.href = newPath;
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
        <GlobeAltIcon className="h-5 w-5" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40 mt-4 border border-base-200"
      >
        {languages.map((lang) => (
          <li key={lang.code}>
            <button
              className={currentLang === lang.code ? "active" : ""}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSelector;
