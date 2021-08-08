# ToDream - behind the scene

It's just a todo-list, but more than todo list...

## 使用環境
- [node.js](https://nodejs.org/en/): v14.15
- [mysql](https://www.mysql.com/): v5.65

## 功能
- 使用者需要 `註冊` 與 `驗證` 才能使用此服務
- 使用者可以在首頁瀏覽自己所有的 `category` 與 `todo`
- 使用者可以 `新增`、`查看`、`刪除`、`修改` 自己的每一個 `項目`
- `項目` 包含：
  - `todo`：可以寫上之後想做的事，當事情完成可以勾選為 `已完成`
  - `category`：每個 `todo` 都會放在一個 `category` 裡面，因此每個使用者至少會有一個 `category`，可以為這個(或這些) `category` 改上自己喜歡的名字
  - `label`：作為 `category` 的輔助品之一，可以為每一個 `todo` 掛上一個以上的 `label`，告訴自己這件事多麼重要。

## API 文件
powered by swagger

## How to use
1. 使用終端機，從 github 下載此專案
    ```bash
    git clone https://github.com/stylelinz/ToDream.git
    ```
2. 在本機進入此專案
    ```bash
    cd ToDream
    ```
3. 下載本專案的相依套件
    ```bash
    npm install
    ```
4. 在資料庫伺服器進行相關設定
    ```sql
    create database to_dream;
    create database to_dream_test;
    ```
4. 設定資料庫編碼
    ```sql
    ALTER SCHEMA `to_dream` DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;
    ALTER SCHEMA `to_dream_test` DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_unicode_ci;
    ```
5. 回到終端機，進行本專案的資料庫設定與設置種子資料
    ```bash
    npx sequelize db:migrate && npx sequelize db:seed:all
    ```
6. 開始運行本專案
    ```bash
    npm run start
    ```
6. 更改 `.env.example` 相關環境變數，更改後將檔案名改為 `.env`
7. 若要結束運行，可以使用 `ctrl` + `c` 或是 `cmd` + `c` 關閉伺服器

## How to test
1. 切換至測試環境
2. 再次進行本專案的資料庫設定 (不用種子資料)
3. 開始進行測試

## Collaborators

![@timothy](https://avatars.githubusercontent.com/u/79594823?s=64&v=4)

[Timothy Liao](https://github.com/tim80411)

<img src="https://avatars.githubusercontent.com/u/69614421?s=60&v=4" width="64">

[StyleLinz](https://github.com/stylelinz)
