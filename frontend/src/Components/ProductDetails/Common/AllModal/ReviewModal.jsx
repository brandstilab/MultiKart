import RatingBox from "@/Components/Collection/CollectionSidebar/RatingBox";
import Avatar from "@/Components/Widgets/Avatar";
import CustomModal from "@/Components/Widgets/CustomModal";
import SimpleInputField from "@/Components/Widgets/InputFields/SimpleInputField";
import { placeHolderImage } from "@/Components/Widgets/Placeholder";
import Btn from "@/Elements/Buttons/Btn";
import { ReviewAPI } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { YupObject, nameSchema } from "@/Utils/Validation/ValidationSchema";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { ModalFooter } from "reactstrap";

const ReviewModal = ({ modal, setModal, productState, refetch }) => {
  const { t } = useTranslation("common");
  const { mutate, isLoading } = useCreate(productState?.product?.user_review ? `${ReviewAPI}/${productState?.product.user_review.id}` : ReviewAPI, false, false, false, (resDta) => {
    if (resDta.status == 200 || resDta.status == 201) {
      refetch();
      setModal(false);
    }
  });
  return (
    <CustomModal modal={modal ? true : false} setModal={setModal} classes={{ modalClass: "theme-modal-2", title: productState?.product?.user_review ? "EditReview" : "Writeareview" }}>
      <Formik
        initialValues={{ rating: productState?.product?.user_review?.rating, description: productState?.product?.user_review?.description, product_id: productState?.product?.id, review_image_id: "" }}
        validationSchema={YupObject({
          rating: nameSchema,
        })}
        onSubmit={(values) => {
          if (productState?.product?.user_review) {
            values["_method"] = "PUT";
          }
          mutate(values);
        }}
      >
        {({ values, setFieldValue, errors }) => (
          <Form className="product-review-form">
            <div className="product-wrapper">
              <div className="product-image">
                <Avatar data={productState?.product?.product_thumbnail ? productState?.product?.product_thumbnail : placeHolderImage} customImageClass="img-fluid" name={productState?.product?.name} />
              </div>
              <div className="product-content">
                <h5 className="name">{productState?.product?.name}</h5>
                <div className="product-review-rating">
                  <label>{"Rating"}</label>
                  <div className="product-rating">
                    {/* <ProductBox1Rating totalRating={productState?.product?.rating_count} /> */}
                    <h6 className="rating-number">{productState?.product?.rating_count?.toFixed(2) || 0}</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="review-box">
              <div className="product-review-rating">
                <label>{"Rating"}</label>
                <div className="product-rating">
                  <RatingBox totalRating={productState?.product?.user_review?.rating} clickAble={true} setFieldValue={setFieldValue} name={"rating"} />
                </div>
              </div>
            </div>
            <div className="review-box">
              <SimpleInputField nameList={[{ name: "description", placeholder: t("EnterDescription"), type: "textarea", toplabel: "ReviewContent", rows: 3 }]} />
            </div>
            <ModalFooter className="pt-0">
              <Btn className="btn btn-md btn-outline fw-bold " title="Cancel" type="button" onClick={() => setModal("")} />
              <Btn className="btn-solid" title="Submit" type="submit" loading={Number(isLoading)} />
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </CustomModal>
  );
};

export default ReviewModal;
