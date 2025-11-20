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
  { icon: "devicon-html5-plain colored", label: "HTML" },
  { icon: "devicon-css3-plain colored", label: "CSS" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-sass-original colored", label: "Sass" },
  { icon: "devicon-react-original colored", label: "React" },
  { icon: "devicon-redux-original colored", label: "Redux" },
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: "devicon-jquery-plain", label: "JQuery" },
  { icon: "devicon-nextjs-original-wordmark", label: "Next.JS" },
  { icon: "devicon-typescript-plain", label: "Typescript" },
  { icon: "devicon-threejs-original", label: "Three.js" },
  { icon: "devicon-nodejs-plain-wordmark colored", label: "NodeJS" },
  { icon: "devicon-express-original colored", label: "Express JS" },
  { icon: "devicon-postman-plain colored", label: "Postman" },
  { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
  { icon: "devicon-bootstrap-plain-wordmark colored", label: "Bootstrap" },
  { icon: "devicon-materialui-plain colored", label: "MUI" },
  { icon: "devicon-tailwindcss-original colored", label: "Tailwind" },
  { icon: "devicon-photoshop-plain colored", label: "Photoshop" },
  { icon: "devicon-figma-plain", label: "Figma" },
  { icon: "devicon-jira-plain colored", label: "Jira" },
];

export const petProjectsData = [
  {
    name: "Сайт c рецептами",
    git: "https://github.com/annieversaryyyyy/Recipe-App.git",
    url: "https://healthy-recipe-one.vercel.app/",
    description:
      "Этот сайт позволяет пользователям просматривать рецепты, редактировать их, также добавлять свои рецепты если юзер залогинен",
    tech: ["Next.js", "Typescript", "HeroUI", "PostgreSQL", "Tailwind"],
  },
  {
    name: "Post App",
    git: "https://github.com/annieversaryyyyy/React-Post-App.git",
    url: "https://react-post-app-gray.vercel.app/",
    description: `Сайт с полностью реализованным CRUD-функционалом: пользователи могут создавать, просматривать, редактировать и удалять посты. Проект использует Firebase для хранения данных, поддерживает уведомления (toast), пагинацию и удобный интерфейс.`,
    tech: ["React", "Firebase", "Axios", "React Router DOM"],
  },
  {
    name: "Country Info App",
    git: "https://github.com/annieversaryyyyy/country-weather-border-info-app.git",
    url: "https://country-info-app-nu.vercel.app/",
    description: `Простой сайт на ванильном JS, которое позволяет узнать информацию о любой стране,
     включая погоду в столице и данные о соседних странах.`,
    tech: ["JS", "HTML", "CSS"],
  },
  {
    name: "Coctail Search App",
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
  {
    name: "Social Feed App",
    git: "https://github.com/annieversaryyyyy/posts-app.git",
    url: false,
    description: `Аналог социальной сети с лентой новостей, которое работает с кастомным API. Пользователи могут просматривать посты других людей: их сообщения, email, имя, фамилию и время создания поста.`,
    tech: ["JS", "Bootstrap"],
  },
  {
    name: "Сайт для магазина на тильде",
    url: "https://mistica.tilda.ws/",
    description:
      "Онлайн-магазин ювелирных изделий,с возможностью оформить заказ через сайт",
    tech: ["Tilda"],
  },
];
