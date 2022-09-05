import "./category-item.styles.scss";
import Icon from "./category-item-icon.component";

const CategoryItem = ({ category, index }) => {
  const { imageSrc, title } = category;
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
      </div>
    </div>
  );
};

export default CategoryItem;
