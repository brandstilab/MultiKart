"use client";
import AllQnATable from "@/Components/Q&A/AllQnATable";
import { QuestionNAnswerAPI } from "@/Utils/AxiosUtils/API";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Col } from "reactstrap";


const QuestionAndAnswer = () => {
  const [isCheck, setIsCheck] = useState([]);
  const searchParams = useSearchParams();
  const statusValue = searchParams.get("status");
  const [status, setStatus] = useState(statusValue)
  return (
    <Col sm="12">
      <AllQnATable
        paramsProps={{ status: status ?? null }}
        filterHeader={{customTitle:"Q&A"}}
        differentFilter={
          <div className="show-box mb-4 d-flex overflow-custom">
            <ul className="order-tab-content">
              <li onClick={()=>setStatus(null)} className={`${!statusValue ? "active" : ""}`}><Link href={`/qna`}> All </Link></li>
              <li onClick={()=>setStatus("pending")} className={`${statusValue === "pending" ? "active" : ""}`}><Link href={{pathname: `/qna`,query: { status: "pending" },}}> pending </Link></li>
              <li onClick={()=>setStatus("answered")} className={`${statusValue === "answered"  ? "active" : ""}`}><Link href={{pathname: `/qna`,query: { status: "answered" },}}> Answered </Link></li>
            </ul>
          </div>
        }
        url={QuestionNAnswerAPI}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        keyInPermission={"question_and_answer"}
      />
    </Col>
  );
};

export default QuestionAndAnswer;