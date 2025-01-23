import useCreate from "@/Utils/Hooks/useCreate";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";

const EmailTab = ({ values, setFieldValue, errors, touched }) => {
  const { mutate } = useCreate("notifications/test");

  const { t } = useTranslation("common");
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="shipping-accordion-custom">
        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(1)}>
          {values["sms_methods"]?.["twilio"]?.["title"] || "Text Here"}
          <RiArrowDownLine />
        </div>
        {active == 1 && (
          <>
            <div className="rule-edit-form">
              <SimpleInputField nameList={[{ name: "[values][sms_methods][twilio][title]", placeholder: t("EnterTitle"), title: "Title" }]} />
              <CheckBoxField name="[values][sms_methods][twilio][status]" title="Status" />
              <SimpleInputField
                nameList={[
                  { name: "[values][sms_methods][twilio][twilio_sid]", placeholder: t("EnterTitle"), title: "TwilioSid" },
                  { name: "[values][sms_methods][twilio][twilio_auth_token]", placeholder: t("EnterTitle"), title: "TwilioAuthToken" },
                  { name: "[values][sms_methods][twilio][twilio_number]", placeholder: t("EnterTitle"), title: "TwilioNumber" },
                ]}
              />
            </div>
          </>
        )}
      </div>
      <div className="instruction-box">
        <div className="instruction-title mt-4">
          <h4>Here's a breakdown of each SMS key and its purpose:</h4>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Cancel order sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cancel Order SMS Notification.</td>
                <td>This SMS notification is sent when an order is canceled by either the admin or the consumer.</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][cancel_order_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Refund request sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Refund Request SMS Notification.</td>
                <td>This SMS notification is sent when a consumer requests a product return and refund</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][refund_request_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Withdraw request sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Withdrawal Request SMS Notification</td>
                <td>This SMS notification is sent when a vendor requests to withdraw funds from their wallet balance.</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][withdraw_request_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Pending order sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pending Order Reminder SMS Notification</td>
                <td>This SMS notification is sent when an order has been pending for more than 24 hours.</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][pending_order_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Place order sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order Placement SMS Notification</td>
                <td>This SMS notification is sent when a consumer places a new order.</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][place_order_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Signup Bonus sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Signup Bonus SMS Notification</td>
                <td>This SMS notification is sent to notify users about bonus points or rewards received upon signing up.</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][signup_bonus_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Update Order Status sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order Status Update SMS Notification</td>
                <td>This SMS notification is sent to inform consumers about any changes in the status of their order.</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][update_order_status_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Update refund request sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Refund Request Update SMS Notification</td>
                <td>This SMS notification is sent to inform consumers about the status of their refund request (approved or rejected).</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][update_refund_request_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Update withdraw request sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Withdrawal Request Update SMS Notification</td>
                <td>This SMS notification is sent to inform vendors about any updates to their withdrawal request (approval or rejection).</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][update_withdraw_request_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table mb-4">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3}>Vendor register sms</th>
              </tr>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Withdrawal Request Update SMS Notification</td>
                <td>This SMS notification is sent to inform vendors about any updates to their withdrawal request (approval or rejection).</td>
                <td>
                  <CheckBoxField name={`[values][sms_methods][config][vendor_register_sms]`} title={" "} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmailTab;
