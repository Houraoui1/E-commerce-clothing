import { NavLink } from "react-router-dom";
import ProductCart from "../Product Cart/ProductCart";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <NavLink
        to={`/shop/${title}`}
        className="title"
        onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
        >
        {title.toUpperCase()}
      </NavLink>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;
