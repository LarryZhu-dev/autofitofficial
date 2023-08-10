import "../styles/Sponsor.less";
import { useState } from "react";

let sponsorsImgList = import.meta.glob("@/assets/imgs/sponsors/*.jpg|*.png", {
  eager: true,
});
let payWaysImgList = import.meta.glob("@/assets/imgs/payWays/*.jpg|*.png", {
  eager: true,
});

function SponsorItem() {
  let SponsorItemDom = Object.values(sponsorsImgList).map((item: any) => {
    return (
      <div className="SponsorItem" key={item.default}>
        <img src={item.default} alt="" />
      </div>
    );
  });
  return <>{SponsorItemDom}</>;
}
function PayWaysItem() {
  let payWaysItemDom = Object.values(payWaysImgList).map((item: any) => {
    return (
      <div className="payWaysItem" key={item.default}>
        <a href={item.default} target="_blank">
          <img src={item.default} alt="" />
        </a>
      </div>
    );
  });
  return <>{payWaysItemDom}</>;
}
function Sponsor() {
  const [isOpenPayWays, setIsOpenPayWays] = useState(0);
  function tgPayWays(e: any) {
    e.stopPropagation();
    if (isOpenPayWays) {
      setIsOpenPayWays(0);
    } else {
      setIsOpenPayWays(1000);
    }
  }
  function closePayWays(e: any) {
    e.stopPropagation();
    setIsOpenPayWays(0);
  }
  return (
    <>
      <div className="Sponsor" onClick={closePayWays}>
        <span className="title">Sponsor</span>
        <div className="SponsorList">
          <SponsorItem />
        </div>
        <div className="openPayWaysBtn" onClick={tgPayWays}>
          autofit.js 正在乞讨 {isOpenPayWays ? "（收起）" : "（打赏）"}
        </div>
        <div
          className="payWays"
          style={{
            maxHeight: isOpenPayWays + "px",
            padding: isOpenPayWays ? 80 + "px" : 0,
          }}
        >
          <span
            style={{
              opacity: isOpenPayWays,
              position: "absolute",
              top: 10,
              left: 10,
            }}
          >
            打赏不是实时更新的，您打赏后不会立即出现在赞助者列表中，如有疑问请在页面底部添加“加伊”
          </span>
          <PayWaysItem />
        </div>
      </div>
    </>
  );
}
export default Sponsor;
