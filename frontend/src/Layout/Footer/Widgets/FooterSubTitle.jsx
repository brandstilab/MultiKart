import { Href } from "@/Utils/Constants";
import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";

const FooterSubTitle = ({ data, customContent, classes }) => {
  return (
    <Col className={classes?.colClass ? classes?.colClass : ""}>
      <div className="sub-title">
        <div className="footer-title"></div>
        {!customContent && (
          <div className="footer-contant">
            <ul>
              {data?.map((item, i) => (
                <li key={i}>
                  <Link href={Href}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Col>
  );
};

export default FooterSubTitle;
