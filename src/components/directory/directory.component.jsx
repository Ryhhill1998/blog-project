import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category, i) => (
        <CategoryItem key={category.id} category={category} index={i} />
      ))}
    </div>
  );
};

export default Directory;
