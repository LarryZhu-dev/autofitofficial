import "../styles/FriendlyLinks.less";
import meWeChat from "@/assets/imgs/me/weChat.jpg";
function FriendlyLinks() {
  return (
    <>
      <div className="FriendlyLinks">
        <span className="title">Friendly Links</span>
        <span className="empty">暂无内容</span>
        <div className="contantMe">
          <span>成为加伊的朋友</span>
          <img src={meWeChat} alt="" />
        </div>
      </div>
    </>
  );
}
export default FriendlyLinks;
