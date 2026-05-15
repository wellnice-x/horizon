import styles from "./Header.module.scss";
import SunIcon from "@/assets/icons/sun.svg?react";
import MoonIcon from "@/assets/icons/moon.svg?react";
import Dropdown from "../Dropdown";
import Navigation from "../Navigation";
import ThemeToggle from "../ThemeToggle";
import SettingsIcon from "@/assets/icons/settings-icon.svg?react";
import NavigationIcon from "@/assets/icons/navigation-icon.svg?react";
import ParallaxToggle from "../ParallaxToggle";
import ParallaxOnIcon from "@/assets/icons/parallax-on-icon.svg?react";
import ParallaxOffIcon from "@/assets/icons/parallax-off-icon.svg?react";
import AnimationsToggle from "../AnimationsToggle";
import AnimationsOnIcon from "@/assets/icons/animations-on-icon.svg?react";
import AnimationsOffIcon from "@/assets/icons/animations-off-icon.svg?react";
import { useEffect, useState } from "react";

type HeaderProps = {
  className?: string;
};

const navigationItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contacts" },
];

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header}
      ${isScrolled ? styles.headerScrolled : ""} 
      ${className ?? ""}`}
    >
      <a href="/" aria-label="Главная страница" title="На главную страницу">
        <img
          className={styles.logo}
          src="/logo.png"
          alt="Лого сайта"
          width={150}
          height={150}
        />
      </a>
      <div className={styles.actionsWrapper}>
        <div className={styles.desktopNavigation}>
          <Navigation items={navigationItems} />
        </div>
        <div className={styles.mobileNavigation}>
          <Dropdown
            buttonTitle="Navigation"
            buttonIcon={<NavigationIcon />}
            menuTitle="Навигация"
          >
            <Navigation items={navigationItems} />
          </Dropdown>
        </div>
        <Dropdown
          className={styles.dropDown}
          buttonTitle="Настройки"
          buttonIcon={<SettingsIcon />}
          menuTitle="Интерфейс"
        >
          <div className={styles.buttonsWrapper}>
            <ParallaxToggle
              title="Переключить параллакс"
              enabledParallaxIcon={<ParallaxOnIcon />}
              disabledParallaxIcon={<ParallaxOffIcon />}
            />
            <AnimationsToggle
              title="Переключить анимации"
              enabledAnimationsIcon={<AnimationsOnIcon />}
              disabledAnimationsIcon={<AnimationsOffIcon />}
            />
            <ThemeToggle
              title="Поменять тему"
              lightThemeIcon={<SunIcon />}
              darkThemeIcon={<MoonIcon />}
            />
          </div>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
