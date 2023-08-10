import { useEffect, useState } from "react";
import reactLogoText from "./assets/logo/text.svg";
import reactLogoBg from "./assets/logo/bg.svg";
import "./styles/App.less";
import apis from "./utils/apis";

import Sponsor from "./components/Sponsor";
import FriendlyLinks from "./components/FriendlyLinks";
// import { toast } from "react-toastify";

async function getNpmDownloadCount() {
  return await apis.npmd.downloadCount();
}
function goReadMe() {
  window.open("https://github.com/LarryZhu-dev/autofit.js", "_blank");
}

function App() {
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const res = await getNpmDownloadCount();
      let count = 0;
      for (let item of Object.values(res["autofit.js"])) {
        count += Number(item);
      }
      setDownloadCount(count);
    }

    fetchData();
  }, []);
  return (
    <>
      <div className="scrollView">
        <div className="App">
          <div className="logoBox">
            <div className="logo"></div>
            <img src={reactLogoText} className="logoImg text" />
            <img src={reactLogoBg} className="logoImg bg" />
          </div>
          <h1 className="title">autofit.js</h1>
          <div className="card">
            <p>
              迄今为止最易用的前端自适应工具 <code>2.18kb after gzip</code>
            </p>
            <button onClick={goReadMe} className="readmebtn">
              <span className="iconfont icon-githublogo"></span>
              Read Me
            </button>
          </div>
          <div className="infos">
            <div className="githubStar">
              <a
                href="https://github.com/LarryZhu-dev/autofit.js"
                target="_blank"
              >
                <span className="iconfont icon-githublogo"></span>
                <span>{(437 / 1000).toFixed(2) + "k"}</span>
              </a>
            </div>
            <div className="npmDownload">
              <a
                href="https://www.npmjs.com/package/autofit.js"
                target="_blank"
              >
                <span className="iconfont icon-npm"></span>
                <span>{(downloadCount / 1000).toFixed(2) + "k"}</span>
              </a>
            </div>
            <div className="juejin">
              <a
                href="https://juejin.cn/post/7224015103481118757"
                target="_blank"
              >
                <span className="iconfont icon-juejin"></span>
                <span>{(3569 / 1000).toFixed(2) + "k"}</span>
              </a>
            </div>
          </div>
        </div>
        <Sponsor />
        <FriendlyLinks />
      </div>
    </>
  );
}

export default App;
