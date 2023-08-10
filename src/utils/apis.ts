import request from "./request"
const apis = {
  amap: {
    baseUrl: "https://restapi.amap.com/",
    getPIO(keywords: string, key: string = "59994b4df2e8d7fdfc88e23fd207d98f"): Promise<any> {
      return request.get(`${this.baseUrl}/v5/place/text`, {
        key: key,
        keywords: keywords
      })
    },
  },
  npmd: {
    downloadCount(): Promise<any> {
      return request.get(`/npmdownloads`, {
        package: "autofit.js",
        from: "2023-05-11",
        until: new Date().toISOString().slice(0, 10)
      })
    }
  },
  bMap: {
    baseUrl: "https://map.baidu.com/",
    getLocation(timeStamp: number): Promise<any> {
      return request.get(`/getLocation`, {
        qt: "ipLocation",
        t: timeStamp
      })
    }
  },
}

export default apis