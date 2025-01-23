"use client";
import React, { useState } from "react";
import { Col } from "reactstrap";
import { AttributeExportAPI, AttributeImportAPI, attribute } from "@/Utils/AxiosUtils/API";
import AllAttributesTable from "@/Components/Attribute/AllAttributesTable";

const AllAttributes = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllAttributesTable
        url={attribute}
        moduleName="Attribute"
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        exportButton={true}
        importExport={{ importUrl: AttributeImportAPI, exportUrl: AttributeExportAPI ,sampleFile:"attributes.csv" ,instructionsAndSampleFile:true ,instructions:"attributes-bulk-import-instructions.txt" }}
      />
    </Col>
  );
};

export default AllAttributes;
