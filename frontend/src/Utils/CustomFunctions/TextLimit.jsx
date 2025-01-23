import React from "react";

const TextLimit = ({ value, maxLength, tag, classes }) => {
  if (!value) {
    return "";
  }

  let summarizedValue = value.substring(0, maxLength);

  if (value.length > maxLength) {
    summarizedValue += "...";
  }

  if (containsHtmlTags(value)) {
    const sanitizedValue = sanitizeAndTrustHtml(summarizedValue);

    if (tag == "p") {
      return <p className={classes ? classes : ""} dangerouslySetInnerHTML={sanitizedValue} />;
    } else {
      return <div className={classes ? classes : ''} dangerouslySetInnerHTML={sanitizedValue} />;
    }
  } else {
    if (tag == "p") {
      return <p className={classes ? classes : ""}>{summarizedValue}</p>;
    } else {
      return <div className={classes ? classes : ''}>{summarizedValue}</div>;
    }
  }
};

const containsHtmlTags = (value) => {
  const htmlRegex = /<[a-z][\s\S]*>/i;
  return htmlRegex.test(value);
};

const sanitizeAndTrustHtml = (htmlString) => {
  return { __html: htmlString };
};

export default TextLimit;
