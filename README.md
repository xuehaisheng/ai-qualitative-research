# AI × 質的研究

面向 AI 与质性研究的日英双语网站。公开页面由 Jekyll 构建，通过 GitHub Pages 发布；管理后台采用 Google Apps Script，草稿保存到 Drive，访客记录保存到 Sheets。

## 编辑与发布

后台部署和初始化说明见 [management/README.md](management/README.md)。管理项目只允许站长本人访问；匿名统计使用另一个独立项目。

- 后台可以新增、编辑、归档研究笔记、知识点、活动和成员。
- 保存草稿不会改动公开网站；点击发布后更新 GitHub main，Pages 构建完成后生效。
- 已发表文章的地址保持不变，发布前检查原文是否被其他地方改过。
- 统计从接入后开始，未接入时不会显示演示数据。

## 内容位置

| 内容 | 文件 |
| --- | --- |
| 研究笔记 | `_posts/YYYY-MM-DD-slug.md` |
| 知识点 | `_wiki/slug.md` |
| 活动 | `_data/events.json` |
| 成员 | `_data/members.json` |
| 文献 | `_data/papers.yml` 等现有文献文件 |
| 统计接收地址 | `_data/analytics.json` |
| 首页 | `index.html` |
| 共用页面布局 | `_layouts/`、`_includes/` |

活动与成员的日英字段共用同一份数据，首页与活动列表自动读取；首页仅展示三条过去记录。原有文献内容和文章正文不因后台部署自动改写。

## 本地验证

前台需要 Ruby / Bundler：

```bash
bundle install
bundle exec jekyll serve
```

后台源码构建和测试需要本地 Node（仅用于开发，不需要租用 Node 主机）：

```bash
cd management
npm ci
npm run build:gas
npm test
```

Apps Script 的直接部署文件已生成在 `management/apps-script/`。运行中的 Google 项目凭据、项目属性和草稿不应提交到公开仓库。
