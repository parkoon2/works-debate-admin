import React from "react";
import cn from "classnames";

const Logo = ({ shortcut }) => (
  <>
    <div className={cn("wrapper__logo--shortcut", { show: shortcut })}>
      <span className="logo--k">K</span>
      <span className="logo--p">P</span>
    </div>
    <div className={cn("wrapper__logo--full", { show: !shortcut })}>
      <div className="logo--k">K</div>
      <div className="logo--point">p</div>
      <div className="logo--admin">admin</div>
      {/* <span>어드민</span> */}
      {/* <div className="logo--no">nowledge</div>
      <div className="logo--point">Point</div> */}
    </div>
  </>
);

export default Logo;
