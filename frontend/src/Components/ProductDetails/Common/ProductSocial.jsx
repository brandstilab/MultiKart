
import ThemeOptionContext from '@/Context/ThemeOptionsContext';
import { useTranslation } from "react-i18next";
import { useContext } from 'react';
import { RiFacebookFill, RiLinkedinFill, RiMailFill, RiTwitterFill, RiWhatsappFill } from 'react-icons/ri';

const ProductSocial = ({ productState }) => {
  const { themeOption } = useContext(ThemeOptionContext);
  
  const { t } = useTranslation( 'common');
  const baseUrl = process?.env?.FRONT_URL;
  const shareOnFacebook = (slug) => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl + "/" + '/product/' + slug)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const shareOnTwitter = (slug) => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(baseUrl + "/" + '/product/' + slug)}`;
    window.open(twitterShareUrl, '_blank');
  };

  const shareOnLinkedIn = (slug) => {
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl +"/" + '/product/' + slug)}`;
    window.open(linkedInShareUrl, '_blank');
  };

  const shareOnWhatsApp = (slug) => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(baseUrl + "/" +'/product/' + slug)}`;
    window.open(whatsappShareUrl, '_blank');
  };

  const shareViaEmail = (slug) => {
    const subject = 'Check out this awesome product!';
    const body = `I thought you might be interested in this product: ${baseUrl + "/" +'/product/' + slug}`;
    const emailShareUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailShareUrl; // Use location.href to open the default email client
  };
  return (
    
    <>
    {themeOption?.product?.social_share && productState?.product?.social_share ? (
      <div className='share-option'>
        <div className='product-title mt-0'>
          <h4>{t("ShareIt")}</h4>
        </div>
        <ul className='product-social'>
          <li>
            <a onClick={() => shareOnFacebook(productState?.product?.slug)}>
              <RiFacebookFill />
            </a>
          </li>
          <li>
            <a onClick={() => shareOnTwitter(productState?.product?.slug)}>
              <RiTwitterFill />
            </a>
          </li>
          <li>
            <a onClick={() => shareOnLinkedIn(productState?.product?.slug)}>
              <RiLinkedinFill />
            </a>
          </li>
          <li>
            <a onClick={() => shareOnWhatsApp(productState?.product?.slug)}>
              <RiWhatsappFill />
            </a>
          </li>
          <li>
            <a onClick={() => shareViaEmail(productState?.product?.slug)}>
              <RiMailFill />
            </a>
          </li>
        </ul>
      </div>  ): null}
    </>
  );
};

export default ProductSocial;
