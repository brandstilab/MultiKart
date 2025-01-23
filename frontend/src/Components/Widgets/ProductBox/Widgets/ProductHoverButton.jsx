import QuickViewButton from './HoverButton/QuickViewButton';
import CompareButton from './HoverButton/CompareButton';
import WishlistButton from './HoverButton/WishlistButton';

const ProductHoverButton = ({ productstate,listClass, actionsToHide}) => {
  return (
    <ul className="hover-action">
      <WishlistButton productstate={productstate} hideAction={actionsToHide}/>
      <QuickViewButton productstate={productstate} />
      <CompareButton productstate={productstate} />
    </ul>
  );
};

export default ProductHoverButton;