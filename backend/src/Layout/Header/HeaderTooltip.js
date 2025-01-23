import { Tooltip } from "reactstrap";
import React, { useState } from "react";

const HeaderTooltip = ({ target }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Tooltip className="no-fade" placement="bottom" isOpen={tooltipOpen} target={target} toggle={toggle}>
      {target}
    </Tooltip>
  );
};

export default HeaderTooltip;
