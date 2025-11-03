# ⚡ 快速开始 - Moon Dev AI Agents 部署

哥，这里是 5 分钟部署指南！

## 🎯 推荐方案: Railway + Vercel

### 方案 A: 自动化脚本 (最简单)

```bash
# 一键部署所有！
./deploy-all.sh
```

这个脚本会：
1. ✅ 部署 Python 后端到 Railway
2. ✅ 部署前端到 Vercel
3. ✅ 配置所有环境变量

---

### 方案 B: 手动分步部署

#### 1️⃣ Railway 部署后端

```bash
# 安装 Railway CLI
npm install -g @railway/cli

# 登录
railway login

# 初始化项目
railway init

# 设置环境变量 (复制你的 .env)
railway variables set ANTHROPIC_KEY=your_key
railway variables set OPENAI_KEY=your_key
# ... 其他变量

# 部署！
railway up
```

#### 2️⃣ Vercel 部署前端

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 部署到 Vercel
vercel

# 完成！
```

---

## 📁 项目结构

```
moon-dev-ai-agents/
├── src/                    # Python 交易系统
│   ├── main.py            # 主入口
│   ├── agents/            # 48+ AI 代理
│   ├── config.py          # 配置
│   └── nice_funcs.py      # 核心函数
│
├── frontend/              # Next.js 前端
│   ├── app/               # 页面
│   ├── components/        # 组件
│   └── package.json       # 依赖
│
├── DEPLOYMENT.md          # 详细部署文档
├── QUICK_START.md         # 这个文件 🚀
├── deploy-railway.sh      # Railway 部署脚本
├── deploy-vercel.sh       # Vercel 部署脚本
├── deploy-all.sh          # 一键部署脚本 ⭐
├── railway.json           # Railway 配置
├── Dockerfile             # Docker 配置
└── vercel.json            # Vercel 配置
```

---

## 🔑 环境变量清单

你需要在 `.env` 文件或 Railway 中设置这些变量：

### AI 服务
- `ANTHROPIC_KEY` - Anthropic Claude API
- `OPENAI_KEY` - OpenAI API
- `DEEPSEEK_KEY` - DeepSeek API
- `GROQ_API_KEY` - Groq API
- `GEMINI_KEY` - Google Gemini API

### 交易 APIs
- `BIRDEYE_API_KEY` - BirdEye API
- `MOONDEV_API_KEY` - Moon Dev API
- `COINGECKO_API_KEY` - CoinGecko API

### 区块链
- `SOLANA_PRIVATE_KEY` - Solana 私钥
- `HYPER_LIQUID_ETH_PRIVATE_KEY` - Hyperliquid 私钥
- `RPC_ENDPOINT` - Solana RPC

### 系统配置
- `SLEEP_BETWEEN_RUNS_MINUTES` - 循环间隔 (默认 15)
- `USE_AI_CONFIRMATION` - AI 确认 (默认 true)

---

## 🚨 重要提示

### ❗ 安全第一
- **永远不要**把 API 密钥提交到 Git
- **永远不要**在前端暴露密钥
- 使用环境变量存储所有密钥

### 📊 成本估算
- **Railway**: $5-20/月 (Python 后端)
- **Vercel**: 免费 (前端展示)
- **总计**: $5-20/月 (很合理!)

### 🔧 故障排除

**Railway 问题:**
```bash
railway logs      # 查看日志
railway restart   # 重启应用
railway status    # 查看状态
```

**Vercel 问题:**
```bash
cd frontend && npm run build  # 本地构建测试
vercel logs                   # 查看日志
```

---

## 🎉 完成！

部署后你将得到：

✅ **Railway**: 持续运行的 Python 交易系统  
✅ **Vercel**: 美观的前端仪表板  
✅ **48+ AI 代理**: 持续分析市场  
✅ **150+ 策略**: 自动交易决策  

---

## 📞 获取帮助

- 📖 详细文档: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 💬 Discord: Moon Dev 社区
- 🐛 Issues: GitHub Issues

**记住**: 
- Railway = 持久化 Python 进程
- Vercel = 静态前端托管

这是最佳实践! 🚀
