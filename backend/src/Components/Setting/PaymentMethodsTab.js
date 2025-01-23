import { SettingPaymentMethodTab } from "@/Data/TabTitleListData";
import { Fragment, useState } from "react";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";


const PaymentMethodsTab = ({ errors, touched }) => {

  const paymentMethodsProvider = {
    PaypalProvider: {
      paypal: ["client_id", "client_secret", "sandbox_mode", "status", "title"]
    },
    CcAvenueProvider:{
      ccavenue: ["title", "status", "access_code", "merchant_id", "sandbox_mode", "working_key" ] 
    },
    StripeProvider: {
      stripe: ["key", "secret", "status", "title"],
    },
    RazorpayProvider: {
      razorpay: ["key", "secret", "status", "title"],
    },
    CashOnDeliveryProvider: {
      status: ["status", "title"],
    },
    MollieProvider: {
      mollie: ["secret_key", "status", "title"]
    },
    InstaMojoProvider: {
      instamojo: ["client_id", "client_secret", "salt_key", "sandbox_mode", "status", "title"]
    },
    PhonepeProvider: {
      phonepe: ["merchant_id", "salt_index", "salt_key", "sandbox_mode", "status", "title"]
    },
    bkashProvider:{
      bkash:["title","status","app_key","password","username","app_secret","sandbox_mode"]
    },    
    paystackProvider:{
      paystack:["title","status","public_key","secret_key","sandbox_mode"]
    },    
    sslcommerzProvider:{
      sslcommerz:["title","status","store_id","sandbox_mode","store_password"]
    },   
    flutter_waveProvider:{
      flutter_wave:["title","status","public_key","secret_key","sandbox_mod","secret_hash"]
    },   
    bank_transferProvider:{
      bank_transfer:["title","status"]
    },
    

  }
  const toggleInputs = ["status", "sandbox_mode"];
  const [active, setActive] = useState();
  
  const { t } = useTranslation( 'common');
  return (
    <div className="inside-horizontal-tabs payment-accordion-tab">
      {SettingPaymentMethodTab.map((paymentMethod, ind) => (
        <div className="shipping-accordion-custom" index={ind}>
          <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== ind && ind)}>
            {t(paymentMethod.title)}{active === ind ? <RiArrowUpSLine /> :<RiArrowDownSLine />}
          </div>
          {active === ind && (
            <>{Object.keys(paymentMethodsProvider[paymentMethod.key]).map((key) => (
              <div className="shipping-accordion-box" key={key}>
                {paymentMethodsProvider[paymentMethod.key][key].map((item) => (
                  <Fragment key={item}>{toggleInputs.includes(item) ? <CheckBoxField name={`[values][payment_methods][${key}][${item}]`} title={item} /> : <SimpleInputField nameList={[{ name: `[values][payment_methods][${key}][${item}]`, title: item }]} />}</Fragment>
                ))}
              </div>
            ))
            }</>
          )}
        </div>)
      )} 
    </div>
  );
};

export default PaymentMethodsTab;
