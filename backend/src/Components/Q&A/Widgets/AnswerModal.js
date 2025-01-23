import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input, Table } from "reactstrap";
import ShowModal from "../../../Elements/Alerts&Modals/Modal";
import Btn from "../../../Elements/Buttons/Btn";

const AnswerModal = ({ fullObj, modal, setModal, refetch }) => {
  const { t } = useTranslation("common");
  const [answer, setAnswer] = useState(fullObj?.answer);
  const onSubmit = () => {
    //   Put your logic here
    setModal(false);
  };
  return (
    <ShowModal open={modal} setModal={setModal} close={true} title={"Answers"} noClass={true}>
      <div className="qa-modal">
        <div className="border mb-4">
          <Table className="table all-package theme-table no-footer">
            <tbody>
              <tr>
                <td className="text-start fw-semibold">{t("Question")}</td>
                <td className="text-start">{fullObj?.question}</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">{t("Answers")}</td>
                <td className="text-start">
                  <Input type="textarea" placeholder="Enter Answers" value={answer} onChange={(e) => setAnswer(e?.target?.value)} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <div className="button-box">
            <Btn title="Close" className="btn btn-md fw-bold" onClick={() => setModal(false)} />
            <Btn title="Submit" className="btn btn-md btn-theme fw-bold" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </ShowModal>
  );
};

export default AnswerModal;
