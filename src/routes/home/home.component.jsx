import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "About",
      imageSrc: `${process.env.PUBLIC_URL}/images/photo.png`,
    },
    {
      id: 2,
      title: "Snackwallah",
      date: "Friday, August 12th",
      location: "Newcastle Upon Tyne",
      imageSrc: `${process.env.PUBLIC_URL}/images/snackwallah/starter.png`,
    },
    {
      id: 3,
      title: "Khai Khai",
      date: "Sunday, August 14th",
      location: "Newcastle Upon Tyne",
      imageSrc: `${process.env.PUBLIC_URL}/images/khaikhai/broccoli.png`,
    },
    {
      id: 4,
      title: "Lifestyle",
      imageSrc: `${process.env.PUBLIC_URL}/images/lifestyle.png`,
    },
    {
      id: 5,
      title: "Contact",
      imageSrc: `${process.env.PUBLIC_URL}/images/contact-us.png`,
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
