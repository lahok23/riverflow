# RiverFlow嘻哈網站

RiverFlow是一個推廣展現嘻哈文化平台，提供豐富的文化介紹，還結合了電子商務和活動售票功能，滿足嘻哈愛好者的多種需求。

## 文化推廣
1. 涵蓋了 DJ、街舞、饒舌、塗鴉和滑板等嘻哈文化的核心元素。
2. 商品販售：平台上架了多樣化的嘻哈相關商品，滿足嘻哈愛好者的購物需求。
3. 活動售票：提供各種嘻哈活動和節目的票務服務，用戶可以方便地在線購票。
4. 會員系統：用戶可以註冊並登入，管理個人資料、收藏商品、查看訂單歷史。

## 技術架構

專案採用 前後端分離 和 MVVM 架構，確保前端與後端的高效協作和動態更新。

### 前端技術
1. 框架：使用 React 作為 View 層，實現動態頁面渲染和元件化開發。
2. SCSS：使用 SCSS 管理樣式，提升樣式的可讀性和維護性。
3. 插件： Swiper、Lightbox2、SweetAlert2 提升用戶互動和視覺效果。
4. 數據處理：ViewModel 通過 hooks 與後端 API 進行溝通，動態更新資料（如產品資訊和購物車狀態）。
5. 金流整合：前端通過 ViewModel 與後端 API 交互，完成 Stripe 金流支付功能。

### 後端技術
1. 框架：Node.js + Express 負責 API 路由和邏輯處理。
2. 資料庫：使用 MySQL 作為資料庫建構。
3. 驗證與授權：透過 JWT 進行用戶身份驗證與授權。
# 資料夾結構 

```
/
│
├── /client  [前端相關文件]
│ ├── /public  [靜態文件]
│ │ ├── index.html
│ │ └── favicon.ico
│ ├── /src  [React檔案]
│ │ ├── /assets  [靜態文件：圖片／CSS等]
│ │ │ ├── /images
│ │ │ └── /styles
│ │ │ └── styles.css
│ │ ├── /components  [React元件]
│ │ │ ├── Header.js
│ │ │ └── Footer.js
│ │ ├── /pages  [React頁面級別元件]
│ │ │ ├── HomePage.js
│ │ │ └── AboutPage.js
│ │ ├── /context  [ReactContext相關元件]
│ │ │ └── UserContext.js
│ │ ├── /hooks  [自定義hooks]
│ │ │ └── useAuth.js
│ │ ├── /services  [與API通信的文件]
│ │ │ └── api.js
│ │ ├── /utils  [工具函數]
│ │ │ └── helpers.js
│ │ ├── App.js  [主應用組件：定應結構和路由]
│ │ └── index.js  [APP進入點組件：渲染DOM]
│ ├── .gitignore  [git忽略文件]
│ ├── package.json  [前端配置文件]
│ └── README.md
│
├── /server  [後端相關文件]
│ ├── /controllers  [req邏輯處理文件]
│ │ └── userController.js
│ ├── /models  [與db交互模組文件]
│ │ └── userModel.js
│ ├── /routes  [API路由文件]
│ │ └── userRoutes.js
│ ├── /middlewares  [中介文件]
│ │ └── authMiddleware.js
│ ├── /config  [配置文件]
│ │ └── database.js
│ ├── app.js  [router統合接口、中介文件配置]
│ ├── server.js  [後端server啟動文件]
│ ├── .gitignore
│ ├── package.json
│ └── README.md
│
├── /tests  [前後端測試文件]
│ ├── /client
│ │ └── App.test.js
│ └── /server
│ └── userController.test.js
│
├── .gitignore
├── package.json
├── README.md
└── .env  [環境變量配置文件]
```
