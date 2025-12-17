export const aboutMeData = {
  title: "Привет!",
  subtitle: `я Анна, фронтенд-разработчик.`,
  description: `Мне 22 года,живу в городе Бишкек.Постоянно учусь и прокачиваю навыки в веб-разработке. 
    Хочу стать частью команды, где смогу применять полученные знания на реальных проектах, 
    развиваться профессионально и вносить вклад в любимое дело.
    Помимо программирования люблю ходить в походы и играть в игры :)`,
};

export const educationInfoData = {
  description: `Прошла курс frontend разработки в одной из лучших школ программирования в Кыргызстане. 
  Обучение длилось 15 месяцев.
    В рамках курса приобрела прочные знания в HTML, CSS, JavaScript, React, Git и командной работе.
    Учебный процесс был приближен к реальной разработке - с проектами, спринтами и код-ревью.
    По окончанию курса получила диплом по специализации JavaScript Developer.`,
};

export const workExpData = {
  title: `Attractor School ESDP:`,
  description: `Во время производственной практики принимала участие в командной разработке коммерческого веб-сайта 
    для образовательной платформы, предоставляющей онлайн-курсы по различным направлениям. 
    Проект выполнялся по заказу реального клиента и длился 3 месяца. 
    Получила ценный опыт работы в команде, взаимодействия с заказчиком и разработки функционального продукта от идеи до релиза.`,
};

export const skillsData = [
  { icon: "devicon-html5-plain colored", label: "HTML", key: "main" },
  { icon: "devicon-css3-plain colored", label: "CSS", key: "main" },
  {
    icon: "devicon-javascript-plain colored",
    label: "JavaScript",
    key: "main",
  },
  { icon: "devicon-sass-original colored", label: "Sass", key: "main" },
  { icon: "devicon-react-original colored", label: "React", key: "main" },
  { icon: "devicon-redux-original colored", label: "Redux", key: "main" },
  { icon: "devicon-git-plain colored", label: "Git", key: "main" },
  { icon: "devicon-jquery-plain", label: "JQuery", key: "main" },
  { icon: "devicon-nextjs-original-wordmark", label: "Next.JS", key: "learn" },
  { icon: "devicon-typescript-plain", label: "Typescript", key: "learn" },
  { icon: "devicon-threejs-original", label: "Three.js", key: "main" },
  {
    icon: "devicon-nodejs-plain-wordmark colored",
    label: "NodeJS",
    key: "main",
  },
  {
    icon: "devicon-express-original colored",
    label: "Express JS",
    key: "main",
  },
  { icon: "devicon-postman-plain colored", label: "Postman", key: "main" },
  { icon: "devicon-mongodb-plain colored", label: "MongoDB", key: "main" },
  {
    icon: "devicon-bootstrap-plain-wordmark colored",
    label: "Bootstrap",
    key: "main",
  },
  { icon: "devicon-materialui-plain colored", label: "MUI", key: "main" },
  {
    icon: "devicon-tailwindcss-original colored",
    label: "Tailwind",
    key: "main",
  },
  { icon: "devicon-photoshop-plain colored", label: "Photoshop", key: "main" },
  { icon: "devicon-figma-plain", label: "Figma", key: "main" },
  { icon: "devicon-jira-plain colored", label: "Jira", key: "main" },
];

export const petProjectsData = [
  {
    name: "Сайт c рецептами",
    git: "https://github.com/annieversaryyyyy/Recipe-App.git",
    url: "https://healthy-recipe-one.vercel.app/",
    description:
      "Этот сайт позволяет пользователям просматривать рецепты, редактировать их, также добавлять свои рецепты если юзер залогинен",
    tech: [
      "Next.js",
      "Typescript",
      "HeroUI",
      "PostgreSQL",
      "Tailwind",
      "Zustand",
    ],
  },
  {
    name: "Post App",
    git: "https://github.com/annieversaryyyyy/React-Post-App.git",
    url: "https://react-post-app-gray.vercel.app/",
    description: `Сайт с полностью реализованным CRUD-функционалом: пользователи могут создавать, просматривать, редактировать и удалять посты. Проект использует Firebase для хранения данных, поддерживает уведомления (toast), пагинацию и удобный интерфейс.`,
    tech: ["React", "Firebase", "Axios", "React Router DOM", "REST API"],
  },
  {
    name: "Cocktail Search App",
    git: "https://github.com/annieversaryyyyy/Coctail-Search-App.git",
    url: "https://coctail-search-app.vercel.app/",
    description: `Сайт для поиска и просмотра информации о коктейлях
    с возможностью открыть подробную информацию об ингредиентах и рецепте в модальном окне.`,
    tech: ["JS", "HTML", "CSS"],
  },
  {
    name: "Сайт для заказа еды",
    git: "https://github.com/annieversaryyyyy/Food-Ordering-System.git",
    url: "https://food-ordering-system-jet-mu.vercel.app/",
    description:
      "Простой сайт который позволяет просматривать меню товаров, добавлять их в заказ и управлять содержимым корзины.",
    tech: ["React + Vite", "Tailwind"],
  },
];
