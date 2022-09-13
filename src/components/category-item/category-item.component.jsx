import "./category-item.styles.scss";
import Icon from "./category-item-icon.component";

const CategoryItem = ({ category, index }) => {
  const { imageSrc, title } = category;

  const date = index === 1 || index === 2 ? category.date : "";
  const location = index === 1 || index === 2 ? category.location : "";
  index = index === 1 || index === 2 ? 1 : index;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <div className="category-body-container">
        <h2>
          {title} <Icon index={index} />
        </h2>
        <p className={!date ? "hidden" : ""}>{date}</p>
        <p className={!location ? "hidden" : ""}>{location}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
