# MathCode

识图 / 文档转 LaTeX。从 [Andyyyds](https://github.com/yydsxwh/Andyyyds) 的 `@andyyyds/mathcode` 产品迁出，保留登录、支付和站点壳，保证会员、按页计费和微信履约可用。

## 功能

- 公式截图、PDF、Word / WPS、PPT、Excel、Markdown 转 LaTeX
- 拖拽、选文件、Ctrl+V / 长按粘贴
- 识别前可写微调提示词；可设定题型之间空几行、半页或一页
- 本页 XeLaTeX 预览并下载 PDF，也可送进 Overleaf / VS Code
- 先付再转：未开会员 0.5 元/页；会员 30 元/月含 150 页
- 站长账号不限次免费
- 微信支付（Native / JSAPI / H5）履约发页，订单重放幂等

## 技术栈

- Next.js 16 + TypeScript + Tailwind CSS
- Prisma + SQLite
- Cookie Session（jose + bcryptjs）
- 工作区包：`@andyyyds/mathcode`（产品）+ `@andyyyds/shared`（登录 / 支付 / 权限）

## 快速开始

```bash
cp .env.example .env
npm install
npm run db:reset
npm run dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)（首页即 MathCode）。公开 URL 仍为 `/products/mathcode`。

### 演示账号

| 角色 | 邮箱 | 密码 |
|------|------|------|
| 学员 | student@yyds.local | 123456 |
| 讲师 | teacher@yyds.local | 123456 |
| 管理员 | admin@yyds.local | 123456 |

本地支付可把 `.env` 里的 `PAYMENT_MODE` 设为 `mock`。

识别模型默认走系统设置里的翻译 Key，也可用环境变量覆盖：

```
MATHCODE_API_KEY=
MATHCODE_API_BASE=
MATHCODE_MODEL=
```

## 目录

- `packages/mathcode` 识图转 LaTeX：页面、API、额度、PDF、办公文档解析
- `packages/shared` 登录、支付、权限、国际化等公共能力
- `src/app` 站点路由与 API 薄封装（URL 不变）
- `src/components` 站点壳 UI（导航、装修、支付页等）
- `prisma` 数据模型与种子数据
