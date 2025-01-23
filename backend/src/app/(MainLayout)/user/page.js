"use client"
import React, { useState } from "react";
import { Col } from "reactstrap";
import { UserExportAPI, UserImportAPI, user } from "@/Utils/AxiosUtils/API";
import AllUsersTable from "@/Components/User/AllUsersTable";

const AllUsers = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllUsersTable
        url={user}
        moduleName="User"
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        exportButton={true}
        importExport={{ importUrl: UserImportAPI, exportUrl: UserExportAPI ,sampleFile:"users.csv" }}
      />
    </Col>
  );
};

export default AllUsers;
