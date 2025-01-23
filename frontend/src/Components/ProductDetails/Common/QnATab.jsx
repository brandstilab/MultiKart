import NoDataFound from "@/Components/Widgets/NoDataFound";
import AccountContext from "@/Context/AccountContext";
import request from "@/Utils/AxiosUtils";
import { QuestionAnswerAPI } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiEditLine } from "react-icons/ri";
import QuestionAnswerModal from "./AllModal/QuestionAnswerModal";
import LikeDisLike from "./LikeDisLike";

const QnATab = ({ productState }) => {
  const { accountData } = useContext(AccountContext);
  const [modal, setModal] = useState("");
  const [editData, setEditData] = useState();
  const { t } = useTranslation("common");
  const { data, isLoading, refetch } = useQuery([QuestionAnswerAPI], () => request({ url: QuestionAnswerAPI, params: { product_id: productState?.product?.id } }), {
    enabled: productState?.product?.slug ? true : false,
    refetchOnWindowFocus: false,
    select: (res) => res?.data?.data,
  });
  const onEditClick = (data) => {
    setEditData(data);
    setModal("qna");
  };
  const { mutate: updateQnA, isLoading: updateLoader } = useUpdate(QuestionAnswerAPI, editData?.id, false, "Question Update Successfully", (resData) => {
    if (resData?.status == 200 || resData?.status == 201) {
      refetch();
      setModal("");
    }
  });
  return (
    <>
      <div className="post-question-box">
        <h4>
          {t("HaveDoubtsRegardingThisProduct")} ?
          <a
            onClick={() => {
              setEditData("Add");
              setModal("qna");
            }}
          >
            {t("PostYourQuestion")}
          </a>
        </h4>
      </div>
      <div className="question-answer">
        <ul>
          {data?.length > 0 ? (
            data?.map((qna, i) => (
              <li key={i}>
                <div className="question-box">
                  <h5>Q{i + 1}</h5>
                  <h6 className="font-weight-bold que">{qna?.question}</h6>
                  <ul className="link-dislike-box">
                    {qna?.consumer_id == accountData?.id && !qna?.answer ? (
                      <li>
                        <a onClick={() => onEditClick(qna)}>
                          <span>
                            <RiEditLine />
                          </span>
                        </a>
                      </li>
                    ) : null}
                    <LikeDisLike qna={qna} refetch={refetch} />
                  </ul>
                </div>
                <div className="answer-box">
                  <h5>A{i + 1}</h5>
                  <p className="ans">{qna?.answer ? qna?.answer : t("Replysoon")} </p>
                </div>
              </li>
            ))
          ) : (
            <NoDataFound customClass="no-data-added" title="NoQuestionPostedYet" description="ThereAreCurrentlyNoQuestionForThisProduct" />
          )}
        </ul>
        <QuestionAnswerModal modal={modal} setModal={setModal} productState={productState} update={{ editData: editData, updateQnA: updateQnA, updateLoader: updateLoader }} refetch={refetch} />
      </div>
    </>
  );
};

export default QnATab;
