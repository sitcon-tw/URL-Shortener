# SITCON 短網址服務

使用 Cloudflare Workers 建立的 SITCON 短網址服務。可使用網址包括 https://i.sitcon.org 與 https://sitcon.org 兩個網域。

使用請編輯 `links.json`：

```json
{
  "ig": "https://www.instagram.com/sitcon.tw"
}
```

push 會自動完成部署。可透過 <https://sitcon.org/ig> 或 <https://i.sitcon.org/ig> 來存取該連結。

## 原理

在去 GitHub Pages 之前，Cloudflare 會先在中途檢查這是不是在 `links.json` 裡的短網址，如果有就進行轉址，沒有的話就會繼續前往 GitHub Pages。