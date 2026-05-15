import type { Project, StackItem } from "./projects.types";
import cssIcon from "@/assets/icons/css-icon.svg";
import htmlIcon from "@/assets/icons/html-icon.svg";
import scssIcon from "@/assets/icons/scss-icon.svg";
import viteIcon from "@/assets/icons/vite-icon.svg";
import axiosIcon from "@/assets/icons/axios-icon.svg";
import reactIcon from "@/assets/icons/react-icon.svg";
import zustandIcon from "@/assets/icons/zustand-icon.png";
import javaScriptIcon from "@/assets/icons/javascript-icon.svg";
import typeScriptIcon from "@/assets/icons/typescript-icon.svg";
import reactRouterIcon from "@/assets/icons/react-router-icon.svg";
import tanStackQueryIcon from "@/assets/icons/tanstack-query-icon.svg";
import createXPreview from "@/assets/images/createX-preview.jpg";
import createXFullPage from "@/assets/images/createX-full-page.jpg";
import positivusPreview from "@/assets/images/positivus-preview.jpg";
import positivusFullPage from "@/assets/images/positivus-full-page.jpg";
import allSmilesPreview from "@/assets/images/allSmiles-preview.jpg";
import allSmilesFullPage from "@/assets/images/allSmiles-full-page.jpg";
import futureTechPreview from "@/assets/images/futureTech-preview.jpg";
import futureTechFullPage from "@/assets/images/futureTech-full-page.jpg";

type ProjectStacks = Record<string, StackItem[]>;

export const projectStacks: ProjectStacks = {
  mainProject: [
    {
      source: htmlIcon,
      title: "HTML5",
      alt: "HTML5 иконка",
    },
    {
      source: scssIcon,
      title: "SCSS",
      alt: "SCSS иконка",
    },
    {
      source: viteIcon,
      title: "Vite",
      alt: "Vite иконка",
    },
    {
      source: typeScriptIcon,
      title: "TypeScript",
      alt: "TypeScript иконка",
    },
    {
      source: reactIcon,
      title: "React 19",
      alt: "React иконка",
    },
    {
      source: reactRouterIcon,
      title: "React Router",
      alt: "React Router иконка",
    },
    {
      source: zustandIcon,
      title: "Zustand",
      alt: "Zustand иконка",
    },
    {
      source: tanStackQueryIcon,
      title: "TanStack Query",
      alt: "TanStack Query иконка",
    },
    {
      source: axiosIcon,
      title: "Axios",
      alt: "Axios иконка",
    },
  ],
  modernProject: [
    {
      source: htmlIcon,
      title: "HTML5",
      alt: "HTML5 иконка",
    },
    {
      source: scssIcon,
      title: "SCSS",
      alt: "SCSS иконка",
    },
    {
      source: javaScriptIcon,
      title: "JavaScript",
      alt: "JavaScript иконка",
    },
  ],
  legacyProject: [
    {
      source: htmlIcon,
      title: "HTML5",
      alt: "HTML5 иконка",
    },
    {
      source: cssIcon,
      title: "CSS3",
      alt: "CSS3 иконка",
    },
    {
      source: javaScriptIcon,
      title: "JavaScript",
      alt: "JavaScript иконка",
    },
  ],
};

export const mainProjectDetails = [
  `Полный CRUD и массовые операции с атомарной обработкой`,

  `Фильтрация, поиск и валидация данных`,

  `Анонимная авторизация пользователя и синхронизация с
   базой данных Supabase`,

  `Обработка клиентских, сетевых и серверных ошибок с многочисленными
   пользовательскими toast-уведомлениями`,

  `Отображение состояний загрузки и синхронизации данных`,

  `На выбор 2 режима optimistic обновлений (snapshot-based и patch-based)`,

  `Поддержка non-optimistic режима обновлений`,

  `Переключение темы и параллакс эффекта`,

  `Устойчивый интерфейс: поддержание актуального состояния данных
   при любых сетевых и серверных сбоях`,

  `Лампа-индикатор текущего состояния соединения приложения с сервером`,

  `Адаптация интерфейса под мобильные устройства (Android и Iphone)`,

  `Дополнительные режимы для тестирования: Offline Mode (тест
   интерфейса автономно от сервера), Block Server Mutations
   (тест rollbacks), Chaotic Server Mode
   (тест устойчивости интерфейса к большинству типов ошибок)`,

  `Чистая и поддерживаемая архитектура
   с разделением ответственности`,
] as const;

export const projects: Project[] = [
  {
    id: "project-FutureTech",
    title: "FutureTech (многостраничный)",
    imagePreview: futureTechPreview,
    imageFull: futureTechFullPage,
    stackItems: projectStacks.modernProject,
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/wellnice-x/future-tech",
      },
      {
        href: "https://future-tech-xi-gray.vercel.app/index.html",
        iconName: "goToSite",
        iconTitle: "Открыть веб-сайт проекта",
      },
    ],
  },
  {
    id: "project-Positivus",
    title: "Positivus",
    imagePreview: positivusPreview,
    imageFull: positivusFullPage,
    stackItems: projectStacks.modernProject,
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/wellnice-x/positivus",
      },
    ],
  },
  {
    id: "project-CreateX",
    title: "CreateX",
    imagePreview: createXPreview,
    imageFull: createXFullPage,
    stackItems: projectStacks.modernProject,
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/wellnice-x/create-x",
      },
    ],
  },
  {
    id: "project-AllSmiles",
    title: "AllSmiles (древний проект)",
    imagePreview: allSmilesPreview,
    imageFull: allSmilesFullPage,
    stackItems: projectStacks.legacyProject,
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/wellnice-x/all-smiles",
      },
    ],
  },
];
