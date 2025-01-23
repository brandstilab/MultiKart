import { useTranslation } from "react-i18next";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

const EmailTab = ({ values, setFieldValue, errors, touched }) => {
  const handleNonSubmitButton = () => {
    setFieldValue("submitButtonClicked", true);
    const notificationsTest = {
      email: values?.email,
      mail_encryption: values?.mail_encryption,
      mail_mailer: values?.mail_mailer,
      mail_from_address: values?.values?.email?.mail_from_address,
      mail_from_name: values?.values?.email?.mail_encryption,
      mail_host: values?.values?.email?.mail_host,
      mail_password: values?.values?.email?.mail_password,
      mail_username: values?.values?.email?.mail_username,
      mail_port: values?.values?.email?.mail_port,
      mailgun_domain: values?.values?.email?.mailgun_domain,
      mailgun_secret: values?.values?.email?.mailgun_secret,
    };
    // Put your logic here
  };
  const { t } = useTranslation("common");
  return (
    <>
      <SearchableSelectInput
        nameList={[
          {
            title: "Mailer",
            name: "mail_mailer",
            inputprops: {
              name: "mail_mailer",
              id: "mail_mailer",
              options: [
                { id: "sendmail", name: "SendMail" },
                { id: "smtp", name: "SMTP" },
                { id: "mailgun", name: "MailGun" },
              ],
            },
          },
        ]}
      />
      {values?.["mail_mailer"] == "mailgun" ? (
        <SimpleInputField
          nameList={[
            { name: "[values][email][mailgun_domain]", title: "MailgunDomain", placeholder: t("EnterMailGunDomain") },
            { name: "[values][email][mailgun_secret]", title: "MailgunSecret", placeholder: t("EnterMailGunSecret") },
          ]}
        />
      ) : (
        <>
          <SimpleInputField
            nameList={[
              { name: "[values][email][mail_host]", title: "Host", placeholder: t("EnterMailHost") },
              { name: "[values][email][mail_port]", title: "Port", placeholder: t("EnterMailPort"), type: "number" },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                title: "Encryption",
                name: "mail_encryption",
                inputprops: {
                  name: "mail_encryption",
                  id: "mail_encryption",
                  options: [
                    { id: "ssl", name: "SSL" },
                    { id: "tls", name: "TLS" },
                  ],
                },
              },
            ]}
          />
          <SimpleInputField
            nameList={[
              { name: "[values][email][mail_username]", title: "Username", placeholder: t("EnterMailUsername") },
              { name: "[values][email][mail_password]", title: "Password", type: "password", placeholder: t("EnterMailPassword") },
              { name: "[values][email][mail_from_name]", title: "MailFromName", placeholder: t("EnterMailFromName") },
              { name: "[values][email][mail_from_address]", title: "MailFromAddress", placeholder: t("EnterMailFromAddress") },
            ]}
          />
        </>
      )}
      <hr />
      <h4 className="fw-semibold mb-3 txt-primary w-100">{t("Testemail")}</h4>
      <SimpleInputField nameList={[{ name: "email", title: "to_mail", type: "email", placeholder: t("enter_email") }]} />
      <button type="button" name="email" disabled={(touched?.email && errors?.email) || !touched?.email} title="SendEmail" className="btn btn-animation  ms-auto" onClick={handleNonSubmitButton}>
        {t("SendEmail")}
      </button>
      <div className="instruction-box">
        <div className="instruction-title">
          <h4>Instruction</h4>
          <p style={{ color: "red" }}>When setting up your email system (SMTP), make sure to do it carefully. If it's not done right, you'll encounter errors when placing orders, registering new users, or sending newsletters.</p>
        </div>
        <div className="list-box">
          <h5>If you're not using SSL:</h5>
          <ul>
            <li>Choose "sendmail" for the Mail Driver if you run into problems with SMTP.</li>
            <li>Use the Mail Host settings provided by your email service's manual.</li>
            <li>Set the Mail port to 587.</li>
            <li>If there are issues with TLS, set the Mail Encryption to SSL.</li>
          </ul>
        </div>
        <div className="list-box">
          <h5>If you're using SSL:</h5>
          <ul>
            <li>Again, choose "sendmail" if there are issues with SMTP.</li>
            <li>Use the Mail Host settings provided by your email service's manual.</li>
            <li>Set the Mail port to 465.</li>
            <li>Set the Mail Encryption to SSL.</li>
          </ul>
        </div>
        <div className="instruction-title mt-4">
          <h4>Here's a list of emails grouped by category and their respective uses:</h4>
        </div>
        <div className="table-responsive email-table">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>User Account Management</th>
              </tr>
              <tr>
                <th>Template</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Send a One-Time Password (OTP) to users who request a password reset.</td>
                <td>Email the user a One-Time Password (OTP) when they request a password reset.</td>
              </tr>
              <tr>
                <td>Signup Welcome</td>
                <td>Send a welcome email with information about the signup bonus or other perks to new users.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>User Communication</th>
              </tr>
              <tr>
                <th>Template</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visitor Inquiry</td>
                <td>Forward visitor messages to admin through email.</td>
              </tr>
              <tr>
                <td>System Test</td>
                <td>Send a test email to confirm email configuration settings.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Vendor Management</th>
              </tr>
              <tr>
                <th>Template</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Vendor Notification</td>
                <td>Notify admin when a new vendor registers on the platform.</td>
              </tr>
              <tr>
                <td>Withdrawal Request</td>
                <td>Withdrawal Request</td>
              </tr>
              <tr>
                <td>Withdrawal Status Update</td>
                <td>Inform vendors when their withdrawal request has been processed and the status (approved or rejected).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Order Management</th>
              </tr>
              <tr>
                <th>Template</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Order Confirmation</td>
                <td>Notify admin, vendor, and consumer when a new order is placed.</td>
              </tr>
              <tr>
                <td>Order Cancellation</td>
                <td>Inform admin, vendor, and consumer if an order is canceled.</td>
              </tr>
              <tr>
                <td>Refund Request</td>
                <td>Notify admin and vendor when a consumer requests a product return and refund.</td>
              </tr>
              <tr>
                <td>Refund Decision</td>
                <td>Inform consumers about the outcome of their refund request (approved or denied).</td>
              </tr>
              <tr>
                <td>Order Status Update</td>
                <td>Notify consumers when the status of their order changes.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive email-table">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>Order Monitoring</th>
              </tr>
              <tr>
                <th>Template</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pending Order Alert</td>
                <td>Notify admin and vendor if an order remains unprocessed for more than 24 hours.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmailTab;
