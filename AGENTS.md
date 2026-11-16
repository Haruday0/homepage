# 開発ルール (haruday0.com)

このプロジェクト（Vite + React + TypeScript）で実装・変更を行う際は、以下の制約を厳守すること。

## スタイリング & Tailwind CSS v4
- Tailwind CSS v4 の CSS ファースト記法（`src/index.css` での `@import "tailwindcss";`、`@theme`、`@custom-variant` 等）のみを使用する。
- **`tailwind.config.js`（`.ts` / `.cjs` / `.mjs` を含む）は絶対に作成しないこと。**
- フォントは `Geist Sans` + `LINE Seed JP`（`font-sans`）および `Geist Mono`（`font-mono`）を使用する。

## UI ライブラリ (`@heroui/react` v3)
- UI コンポーネントは **`@heroui/react`（v3）のみ** を使用する。
- 旧 `@nextui-org/react` の使用は禁止。
- HeroUI v3 の公式仕様に従い、CSS 側で `@import "@heroui/styles";` を読み込み、`<HeroUIProvider>` によるラップや `@heroui/theme` 用の `@plugin` / `@source` 指定は行わないこと（Compound Component API を使用）。

## テーマ & カラー
- **ダークテーマ専用**（`index.html` の `<html lang="ja" class="dark">` を前提とする）。
- 白背景（`bg-white`）や固定色のハードコーディングは禁止し、`bg-background`、`bg-surface`、`text-foreground`、`text-muted`、`border-white/10` などのセマンティックトークン・透過色を使用すること。

## アイコン
- アイコンは **`@phosphor-icons/react`** と **`@icons-pack/react-simple-icons`** のみを使用する。
- **`lucide-react` のインストールおよび使用は禁止。**

## デザイン原則
- 過剰なグラデーションや派手な装飾を避ける。
- **Bento Grid・適切な余白・タイポグラフィのコントラスト**によって、洗練されたミニマルなデザインにすること。
