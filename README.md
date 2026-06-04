# AI × 質的研究

这是一个适合放到 GitHub Pages 的静态站点骨架，已经从“单一 HTML 文件”整理成了更适合长期维护的结构。

你现在可以把它理解成三层：

- 页面骨架：`index.html`、`articles.html`、`_layouts/`
- 样式和交互：`assets/css/main.css`、`assets/js/main.js`
- 内容数据：`_data/` 和 `_posts/`

## 以后怎么更新

### 1. 改首页文案和按钮

编辑：

- `_data/site.yml`

这个文件里放了：

- 站点标题、副标题
- 导航文字
- 首页各区块文案
- 联系方式区块

如果你只想改“趣旨”“AIリテラシー”“联系方式”这些内容，主要改这个文件就够了。

### 2. 改成员信息

编辑：

- `_data/members.yml`

每个成员可以填写：

- `name`
- `role`
- `affiliation`
- `bio`
- `profile_url`

现在放的是示例内容，之后直接替换成真实信息即可。

### 3. 改活动信息

编辑：

- `_data/events.yml`

里面分成：

- `upcoming`
- `archive`

你可以分别维护“即将举行”和“过往记录”。

### 4. 发文章 / 研究笔记

编辑或新增：

- `_posts/YYYY-MM-DD-slug.md`

例如：

- `_posts/2026-04-10-first-note.md`

文章头部格式参考现在这个示例文件：

- `_posts/2026-04-02-site-launch.md`

最少可以保留这些字段：

```md
---
title: "文章标题"
title_en: "English title"
summary_ja: "首页和列表页显示的摘要"
summary_en: "English summary"
---
```

正文直接用 Markdown 写就可以。

## GitHub Pages 怎么部署

如果你准备把它放到 GitHub Pages，建议这样做：

1. 新建一个 GitHub 仓库。
2. 把这个目录里的文件全部上传上去。
3. 到 GitHub 的 `Settings > Pages`。
4. 选择 `Deploy from a branch`。
5. 选择你的分支，一般是 `main`，目录选根目录 `/`。
6. 保存后等待 GitHub 构建完成。

### 关于 `baseurl`

如果你的仓库名不是 `你的用户名.github.io`，而是普通项目仓库，比如：

- `https://github.com/你的用户名/ai-qualitative-site`

那就需要把 `_config.yml` 里的这两项改一下：

```yml
url: "https://你的用户名.github.io"
baseurl: "/ai-qualitative-site"
```

如果你的仓库名就是 `你的用户名.github.io`，通常可以保持：

```yml
url: ""
baseurl: ""
```

## 本地预览

这个项目已经带了 `Gemfile`。如果你的电脑安装了 Ruby，可以在项目目录运行：

```bash
bundle install
bundle exec jekyll serve
```

然后打开本地地址预览。

如果你暂时不想折腾本地环境，也可以直接先传到 GitHub Pages 上看效果。

## 关于“后台联动”

GitHub Pages 本身是静态托管，不提供真正的服务器后台，所以常见做法是：

- 表单提交：接 Google Forms、Formspree、Basin 之类
- 数据库型内容：接 Supabase、Firebase、Airtable
- 研究资料管理：接 Notion、Google Sheets、Airtable
- 成员或活动列表：先继续放在 `_data/*.yml`，最省事

也就是说：

- “文章更新”这件事，现在已经可以靠 Markdown 解决
- “成员/活动/链接更新”这件事，现在已经可以靠 YAML 数据文件解决
- “真正的后台”如果以后需要，再接外部服务就可以

## 你下一步最适合做什么

我建议你先做这三件事：

1. 把 `_data/members.yml` 换成真实成员信息。
2. 把 `_data/site.yml` 里的邮箱和链接换掉。
3. 再写 1 到 2 篇 `_posts/` 里的真实文章。

这样你就会很快从“网页原型”进入“能持续更新的网站”阶段。
