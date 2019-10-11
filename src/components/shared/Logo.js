import React from "react";
import { Icon } from "antd";
import cn from "classnames";

const Logo = ({ shortcut }) => (
  // <div
  //   className="logo"
  //   style={{ fontSize: "1.2rem", color: "#fff", padding: "15px" }}
  // >
  //   <Icon type="apple" style={{ marginRight: "12px" }} />
  //   <span style={{ fontWeight: "bold" }}>K POINT</span>
  // </div>
  <>
    <div className={cn("wrapper__logo--shortcut", { show: shortcut })}>
      <span class="logo--k">K</span>
      <span class="logo--p">P</span>
    </div>
    <div className={cn("wrapper__logo--full", { show: !shortcut })}>
      <div class="logo--k">K</div>
      <div class="logo--no">nowledge</div>
      <div class="logo--point">Point</div>
    </div>
  </>
);

export default Logo;
