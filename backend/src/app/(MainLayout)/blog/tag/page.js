'use client'
import React, { useState } from "react";
import { Col } from "reactstrap";
import AllTagsTable from "@/Components/Tag/AllTagsTable";
import { tag, TagImportAPI } from "@/Utils/AxiosUtils/API";

const AllTags = () => {
  const [isCheck, setIsCheck] = useState([]);
 
  
  return (
    <Col sm="12">
      <AllTagsTable 
      url={tag} 
      moduleName="Tag" 
      isCheck={isCheck} 
      setIsCheck={setIsCheck} 
      type={"post"}
      exportButton={false}
      link="blog/tag"
      importExport={{ importUrl: TagImportAPI}} />
    </Col>
  );
};

export default AllTags;
