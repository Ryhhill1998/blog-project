import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "About us",
      imageSrc: `${process.env.PUBLIC_URL}/images/photo.png`,
    },
    {
      id: 2,
      title: "Reviews",
      imageSrc: `${process.env.PUBLIC_URL}/images/photo.png`,
    },
    {
      id: 3,
      title: "Recipes",
      imageSrc: `${process.env.PUBLIC_URL}/images/photo.png`,
    },
    {
      id: 4,
      title: "Lifestyle",
      imageSrc: `${process.env.PUBLIC_URL}/images/photo.png`,
    },
    {
      id: 5,
      title: "Contact us",
      imageSrc: `${process.env.PUBLIC_URL}/images/photo.png`,
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
