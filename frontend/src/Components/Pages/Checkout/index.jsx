"use client";
import WrapperComponent from "@/Components/Widgets/WrapperComponent";
import AccountContext from "@/Context/AccountContext";
import CartContext from "@/Context/CartContext";
import SettingContext from "@/Context/SettingContext";
import ThemeOptionContext from "@/Context/ThemeOptionsContext";
import Loader from "@/Layout/Loader";
import request from "@/Utils/AxiosUtils";
import { AddToCartAPI, AddressAPI } from "@/Utils/AxiosUtils/API";
import Breadcrumbs from "@/Utils/CommonComponents/Breadcrumb";
import useCreate from "@/Utils/Hooks/useCreate";
import { emailSchema, idCreateAccount, nameSchema, phoneSchema } from "@/Utils/Validation/ValidationSchema";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { Fragment, useContext, useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import * as Yup from "yup";
import CheckoutForm from "./CheckoutForm";
import CheckoutSidebar from "./CheckoutSidebar";
import DeliveryAddress from "./DeliveryAddress";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from "./PaymentOptions";

const CheckoutContent = () => {
  const { accountData, refetch } = useContext(AccountContext);
  const { settingData } = useContext(SettingContext);
  const [address, setAddress] = useState([]);
  const [modal, setModal] = useState("");
  const access_token = Cookies.get("uat");
  let cart = Cookies.get("cartData");

  const path = usePathname();
  const router = useRouter();
  const { cartProducts } = useContext(CartContext);

  useEffect(() => {
    accountData?.address.length > 0 && setAddress((prev) => [...accountData?.address]);
  }, [accountData]);

  const { mutate, isLoading } = useCreate(AddressAPI, false, false, "Address Added successfully", (resDta) => {
    setAddress((prev) => [...prev, resDta?.data]);
    refetch();
    setModal("");
  });

  // Calling Add to Cart API
  const { data: addToCartData, isLoading: addToCartLoader, refetch: addToCartRefatch } = useQuery([AddToCartAPI], () => request({ url: AddToCartAPI }, router), { enabled: false, refetchOnWindowFocus: false, cacheTime: 0, select: (res) => res?.data });

  useEffect(() => {
    access_token && !addToCartLoader && addToCartRefatch();
  }, [addToCartLoader, access_token]);

  const { isLoading: themLoad } = useContext(ThemeOptionContext);

  const addressSchema = Yup.object().shape({
    title: nameSchema,
    street: nameSchema,
    city: nameSchema,
    country_code: nameSchema,
    phone: nameSchema,
    pincode: nameSchema,
    country_id: nameSchema,
    state_id: nameSchema,
  });

  if (themLoad) return <Loader />;
  return (
    <Fragment>
      <Breadcrumbs title={"Checkout"} subNavigation={[{ name: "Checkout" }]} />
      <WrapperComponent classes={{ sectionClass: "section-b-space checkout-section-2", fluidClass: "container" }} noRowCol={true}>
        <div className="checkout-page checkout-form">
          <Formik
            initialValues={{
              products: [],
              shipping_address_id: "",
              billing_address_id: "",
              points_amount: "",
              wallet_balance: "",
              coupon: "",
              delivery_description: "",
              delivery_interval: "",
              payment_method: "",
              create_account: false,
              name: "",
              email: "",
              country_code: "91",
              phone: "",
              password: "",
              shipping_address: {
                title: "",
                street: "",
                city: "",
                country_code: "91",
                phone: "",
                pincode: "",
                country_id: "",
                state_id: "",
              },
              billing_address: {
                same_shipping: false,
                title: "",
                street: "",
                city: "",
                country_code: "91",
                phone: "",
                pincode: "",
                country_id: "",
                state_id: "",
              },
            }}
            validationSchema={Yup.object().shape({
              name: nameSchema,
              email: emailSchema,
              phone: phoneSchema,
              password: idCreateAccount,
              shipping_address: addressSchema,
              billing_address: addressSchema,
            })}
            onSubmit={mutate}
          >
            {({ values, setFieldValue, errors }) => (
              <Form className="checkout-form">
                <Row className="g-sm-4 g-3">
                  <Col lg="7">
                    <div className="left-sidebar-checkout">
                      <div className="checkout-detail-box">
                        {settingData?.activation?.guest_checkout && !access_token && (
                          <div className="checkout-form-section">
                            <CheckoutForm values={values} setFieldValue={setFieldValue} errors={errors} />
                          </div>
                        )}
                        {access_token && (
                          <div className="checkout-detail-box">
                            <ul>
                              {!addToCartData?.is_digital_only && <DeliveryAddress key="shipping" type="shipping" title={"Shipping"} values={values} updateId={values["consumer_id"]} setFieldValue={setFieldValue} address={address} modal={modal} mutate={mutate} isLoading={isLoading} setModal={setModal} />}
                              <DeliveryAddress key="billing" type="billing" title={"Billing"} values={values} updateId={values["consumer_id"]} setFieldValue={setFieldValue} address={address} modal={modal} mutate={mutate} isLoading={isLoading} setModal={setModal} />
                              {!addToCartData?.is_digital_only && <DeliveryOptions values={values} setFieldValue={setFieldValue} />}
                              <PaymentOptions values={values} setFieldValue={setFieldValue} />
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </Col>
                  <CheckoutSidebar addToCartData={addToCartData} values={values} setFieldValue={setFieldValue} errors={errors} />
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </WrapperComponent>
    </Fragment>
  );
};

export default CheckoutContent;
