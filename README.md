# Web Orin
https://web-orin.vercel.app/

## サービス概要
当アプリは、仏壇にある「チーン」と鳴らすあの「お鈴」をWebで鳴らせるサービスです

## 制作した背景
バックエンドとフロントエンドを分離した構成を組み、Webアプリケーションがどのように通信し、動作しているのかを簡単なアプリの製作を通して理解することを目的として開発しました。

## 実装機能
- ベルボタンでお鈴の音が鳴る
- サイドメニュー
  - お鈴が鳴らされた回数
  - タイマー機能
  - コメント機能
</br>
<img src="https://github.com/user-attachments/assets/13ebce83-ac9f-4afe-8cfa-499ec46ae8be" width="250">
<img src="https://github.com/user-attachments/assets/9187ef8f-4fd0-42df-90ec-172d18d0bef7" width="250">
</br>
<img src="https://github.com/user-attachments/assets/3982e8ff-4b6c-4196-b283-35197403f555" width="250">
<img src="https://github.com/user-attachments/assets/b4142fb6-ada8-4b43-a26f-820fde39ace3" width="250">
</br>

## 使用技術

### バックエンド
- Ruby 3.3
- Rails 7.2（API モード）
- PostgreSQL（Neon）

### フロントエンド
- React
- TypeScript
- Vite

### インフラ / ホスティング
- Vercel（フロントエンド）
- Render（バックエンド）
- Neon（PostgreSQL）

### 開発環境
- Docker（Rails, Nginx）
- Node.js
- PostgreSQL（Neon development ブランチ）
