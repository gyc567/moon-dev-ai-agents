# 哥，你的 AI 交易系统部署指南

## 🚀 推荐方案：Railway（最简单）

```bash
# 1. 安装 Railway CLI
npm install -g @railway/cli

# 2. 登录并部署
railway login
railway link
railway up

# 3. 设置环境变量
railway variables set ANTHROPIC_KEY=your_key
railway variables set OPENAI_KEY=your_key
# ... 其他环境变量
```

## 🔥 Vercel 替代方案（如果你坚持要用 Vercel）

### 方案 A：创建回测结果展示页面
```bash
# 创建前端项目展示回测图表
mkdir -p frontend
cd frontend
npm init -y
npm install next react react-dom
# 编写页面展示回测结果
```

### 方案 B：API 包装（不推荐长期运行）
```javascript
// api/trading.js (Vercel Serverless Function)
export default async function handler(req, res) {
  // 调用 Python 脚本
  // 但会有超时限制，不适合交易系统
}
```

## ⚠️ 哥的关键问题

Vercel 的限制：
- 函数执行超时（10秒-60秒）
- 无持久化进程
- 不适合长时间运行的交易循环

**建议：** 用 Railway 部署 Python 主程序，同时用 Vercel 部署前端展示页面。

