# AI × Q 编辑室 · Google Apps Script 版

公开网站继续使用 GitHub Pages / Jekyll。管理后台运行在你的 Google Apps Script 账号下，草稿存进独立的 Drive 文件夹，通过 GitHub API 重新发布现有文章。第二个独立 Apps Script 项目只接收访客记录，写入私有 Google Sheets。无需另外租用 Node 主机。

## 两个部署项目

| 项目 | 要部署的文件 | 执行身份 | 谁能访问 |
| --- | --- | --- | --- |
| 私有管理后台 | `apps-script/admin/Code.gs`、`Index.html`、`appsscript.json` | 部署者 `USER_DEPLOYING` | 仅自己 `MYSELF` |
| 公开统计接收器 | `apps-script/collector/Code.gs`、`appsscript.json` | 部署者 `USER_DEPLOYING` | 任何人（包含未登录） `ANYONE_ANONYMOUS` |

**两个项目必须分开创建。** 公开统计项目没有文章编辑 RPC、GitHub 令牌或 Drive 权限。它只能写入指定统计表，网页上不提供统计内容读取接口。管理项目每次 RPC 都验证当前 Google 用户与项目部署者相同。

代码中的个人后台登录由 Google 完成，不再需要自设后台密码。令牌仅保存在管理项目的脚本属性中，不回显到页面或写入日志。

## 初始化与连接

1. 在 Apps Script 创建管理项目，分别放入 admin 目录的三个文件。设置中启用“在编辑器显示 appsscript.json”，粘贴清单；清单声明了 Drive v3 高级服务。使用默认 Google Cloud 项目时，该服务对应 API 会自动启用。
2. 部署为网页应用：以自己身份执行，访问者为“仅自己”。首次运行时由你完成 Google 授权。
3. 打开后台“连接与设置”，点击“初始化工作空间”。程序创建独立 Drive 文件夹和一份带 Views / Audit 工作表的统计表。它不会改动既有研究资料。
4. 创建细粒度 GitHub 仓库令牌，只授权 `xuehaisheng/ai-qualitative-research` 的 Contents 读写和 Actions 读取。在后台的密码型输入框中填写；不要把令牌发到聊天或提交进仓库。默认仓库和目标分支为该仓库的 main。
5. 先合并本 PR 的活动/成员共用数据与模板改造，再使用正式 main 内容。若 main 还没有这些数据，后台会给出提示。
6. 创建第二个统计项目，放入 collector 目录的两个文件。将初始化时显示的统计表标识填入该项目的脚本属性 `STATS_SHEET_ID`。
7. 在统计项目编辑器运行 `verifyCollector`，由你授权表格访问。部署网页应用：以自己身份执行，访问者为所有人（含未登录）。若 Workspace 管理员不允许匿名部署，应使用允许此部署的个人账号或其他接收服务。
8. 把统计项目的 `/exec` 部署地址填回私有后台“公开统计接收地址”。这是保存连接说明；启用前台还需下一步。
9. 将同一个地址填入 `_data/analytics.json` 的 `endpoint`，提交并等 Pages 构建成功。空字符串保持统计关闭。

后台需要访问由它创建的 Drive 文件（`drive.file`）、Google 表格、外部 GitHub API 及当前账号邮箱。管理项目的 Google 表格权限范围由 Apps Script 的 Spreadsheet 服务决定；Google 首次授权页面会列出实际权限。统计项目只申请 Google 表格权限。

## 编辑已经发表的内容

- 列表及编辑器读取 GitHub main 的当前文件；不会用旧的 Google 草稿静默覆盖远端文章。
- 点击保存时，仅更新 Drive 草稿。已发表网页继续展示原版。
- 地址标识在内容首次保存后保持不变。原文件路径、既有文章地址、双语正文、未展示的头部字段及未改动的日期时间都会保留。
- 发布前重新读取 main，比较每条草稿最初的原文版本。有外部修改时停止发布，提示你核对。
- 发布使用 GitHub Git Data API：新建内容 blobs → 基于当前树生成一棵新树 → 创建一个提交 → 非强制更新 main。多条草稿和附件在同一个提交中发布。
- GitHub Pages 随后重新构建。后台区分“GitHub 提交已完成”和“Pages 已上线”，提供状态查询及构建链接。
- 发布失败保留草稿。写入成功但网络响应丢失时，会通过提交 SHA 核对远端；Drive 中保存发布回执，避免下一次重复提交已成功的改动。

## 草稿与附件

草稿是独立 Drive 文件夹中的 JSON 文档。Google Drive 不承载公开的正式文章；正式文章仍在 GitHub。

支持日英编辑、Markdown 工具、HTML/Liquid 内容保留、有效的 JPG/PNG/WebP/GIF 与 PDF 附件（10MB 内）。预览在浏览器用随部署打包的 DOMPurify 清理；上传但尚未发布的图片可预览。附件随发布提交写入 `assets/uploads/`，不需要向读者公开 Drive 权限。

撤回草稿会移到 Drive 回收站，公开原文保持不变。归档已发表内容需要发布后才从网站移除；历史保留在 Git。备份按钮导出可阅读的 JSON 草稿快照，完整附件还需备份 Drive 工作文件夹。

## 访问统计

前台脚本向公开接收器发送轻量的 `text/plain` beacon，无需读者登录 Google。跨域上报不依赖读取 Apps Script 的重定向响应，也不把发送成功等同于统计服务已接受。匿名事件以页面实例 ID 去重；乱序或重复上报不会反复增加页面访问量。

- 访问量：不同页面实例数。
- 访客：随机浏览器标识去重，标识 30 天过期；不能等同于精确人数。
- 有效阅读：笔记详情的前台活跃 ≥30 秒且读到正文 ≥50%。
- 回访比例：所选区间内有两个及以上会话的访客比例，不是按首访日期划分的 cohort 留存。
- 来源仅保存域名；不保存 IP、完整 User-Agent、完整来源网址或 URL 查询参数。
- 保留 180 天，每天由统计接收器在其自身锁内清理；后台只读，不与接收器争抢统计行写入。
- 每天最多接收 20,000 个新页面实例，并对同一浏览器标识做基础限流。匿名浏览器上报仍可能被伪造或拦截，不适合作为严格审计数据。
- 遵循 DNT / GPC；统计从正式接入后开始，无历史数据时保持空状态。

Apps Script 有执行时间、并发和服务调用配额。当前按个人维护、小规模研究网站设计；访问量明显增加后，应迁移接收存储或做每日聚合。首次接入后应实测你的 Google 账号匿名访问、浏览器拦截和记录写入情况，再宣布正式启用。

## 修改代码与测试

直接部署目录 `apps-script/` 已包含依赖，不需要在 Google 环境运行 npm。改源码时在本地执行：

```bash
cd management
npm ci
npm run build:gas
npm test
```

`gas-src/` 是服务端源码，`public/` 是共用界面。`build-gas.mjs` 将 YAML、Markdown 与 DOMPurify 连同界面打包成可直接放进 Apps Script 的文件，库许可证保留在产物中。

GAS 测试在隔离环境中执行真实打包代码，模拟 Google Drive、Sheets 与 GitHub：身份与范围隔离、双语重发与地址保留、草稿冲突、外部修改、拒绝推送及响应丢失恢复、附件预览、匿名记录去重与有效阅读。Google OAuth、Drive 高级服务、实际匿名部署与 Pages 上线仍需真实账号端到端验证。

`server.mjs` 和 `lib/` 是上一版 Node 本地实现，保留作本地界面验证与对照；它们不参与 Apps Script 部署，也不是现在所需的正式主机。
