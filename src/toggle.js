import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DARK_CLASS = "dark";

const DarkToggle = () => {
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)"
        },
        undefined,
        prefersDark => {
            setIsDark(prefersDark);
        }
    );

    const [isDark, setIsDark] = useState(systemPrefersDark);
    const toggleDarkMode = (checked: boolean) => {
        setIsDark(checked);
      };

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS)
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
        }
    }, [isDark]);

    return (
        <DarkModeSwitch
            checked={isDark}
            className="button"
            style={{ marginBottom: '2rem' }}
            onChange={toggleDarkMode}
            size={30}
        />
    );
};

export default DarkToggle;