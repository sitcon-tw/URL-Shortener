# SITCON 短網址服務

這個專案使用 GitHub Pages 建立一個簡單的短網址服務，開放自訂標題、摘要和 Open Graph 標籤。

## 如何建立新的短網址

1. 在 `_redirects` 資料夾中建立一個新的 Markdown 檔案。檔名將成為短網址的一部分（slug）。
   例如：`template.md` 將產生 `https://i.sitcon.org/template`

2. 在 Markdown 檔案中使用以下格式：

   ```yaml
   ---
   layout: redirect
   title: "您的自定義標題"
   description: "您的自定義描述"
   image: "/images/your-image.jpg"  # 使用相對路徑引用 repo 中的圖片
   # 或
   image: "https://example.com/your-image.jpg"  # 使用完整的 URL
   redirect_to: "https://example.com/your-long-url"
   ---
   ```

   注意：
   - 如果圖片存放在本專案的 `images` 資料夾中，請使用相對路徑（例如：`/images/your-image.jpg`）。
   - 如果要使用外部圖片，請提供完整的 URL。

3. 如果你想使用自訂圖片，請將圖片檔案上傳到 `images` 資料夾。

4. 將變更提交並推送到 GitHub 儲存庫。

5. GitHub Actions 將自動建置並部署您的新短網址。

## 技術原理

本專案使用以下技術和工具：

1. **GitHub Pages**：用於託管靜態網站。
2. **Jekyll**：靜態網站產生器，用於將 Markdown 檔案轉換為 HTML。
3. **自訂 HTML 模板**：位於 `_layouts/redirect.html`，用於產生轉址頁面。
4. **GitHub Actions**：自動化建置和部署流程。
5. **Google Tag Manager**：用於追蹤轉換效果。

### 檔案結構

```
/
├── _redirects/     # 存放 Markdown 檔案的資料夾
├── _layouts/       # 存放 HTML 模板
├── images/         # 存放圖片檔案
├── _config.yml     # Jekyll 設定檔
└── .github/workflows/  # GitHub Actions 設定
```

### 轉址機制

轉址使用 JavaScript 延遲執行，以確保 Google Tag Manager 有足夠時間載入和執行。這個延遲設定在 HTML 模板中，可以根據需要調整。

### 自動化部署

每當有新的變更推送到主分支時，GitHub Actions 會自動觸發建置流程，將 Markdown 檔案轉換為 HTML，並部署到 GitHub Pages。

## 維護注意事項

1. 確保 `_config.yml` 中的設定正確，特別是 `collections` 和 `url` 部分。

2. 如需修改轉址邏輯或 Google Tag Manager 設定，請編輯 `_layouts/redirect.html` 檔案。

3. GitHub Actions 設定檔位於 `.github/workflows/build.yml`，如需調整自動化流程，請修改此檔案。

4. 若要更新 Google Tag Manager 程式碼，請在 HTML 模板中找到相應的程式碼區塊進行修改。

5. 圖片檔案應放在 `images/` 資料夾中。請確保使用適當大小和格式的圖片，以增進網站效能。

6. 在引用圖片時，請使用相對路徑（例如：`/images/your-image.jpg`）或完整的 URL。

7. 圖片路徑支援兩種格式：
   - 相對路徑：用於引用儲存在 `images/` 資料夾中的圖片（例如：`/images/your-image.jpg`）。
   - 完整 URL：用於引用外部圖片（例如：`https://example.com/your-image.jpg`）。
   請確保在 Markdown 檔案中正確指定圖片路徑。

8. 定期檢查外部圖片連結是否有效，以確保所有短網址頁面都能正確顯示預期的圖片。

## 效能考量

1. **頁面載入時間**：由於使用 JavaScript 進行轉址，頁面可能會有短暫的顯示時間。目前設定為 500 毫秒的延遲，可以在 `_layouts/redirect.html` 中調整這個值。

2. **SEO 影響**：雖然使用 JavaScript 轉址可能會稍微影響搜尋引擎最佳化，但已經加入了適當的 meta 標籤來避免這個問題。

## 相關資源

- [GitHub Pages](https://docs.github.com/en/pages)
- [Jekyll](https://jekyllrb.com/docs/)
- [Markdown 指南](https://www.markdownguide.org/)
- [Open Graph 協議](https://ogp.me/)
