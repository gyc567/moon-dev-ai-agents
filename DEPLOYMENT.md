# 🚀 Moon Dev AI Agents - 部署指南

哥，你的 AI 交易系统部署方案！

## 📦 方案 1: Railway + Vercel (推荐)

### Part A: Railway 部署 Python 交易系统

#### 步骤 1: 安装 Railway CLI
```bash
npm install -g @railway/cli
```

#### 步骤 2: 登录并初始化
```bash
# 登录 Railway
railway login

# 在项目根目录初始化
railway init
```

#### 步骤 3: 配置环境变量
```bash
# 设置所有必要的 API 密钥
railway variables set ANTHROPIC_KEY=your_anthropic_api_key
railway variables set OPENAI_KEY=your_openai_api_key
railway variables set DEEPSEEK_KEY=your_deepseek_api_key
railway variables set GROQ_API_KEY=your_groq_api_key
railway variables set GEMINI_KEY=your_gemini_api_key

# 设置交易 API
railway variables set BIRDEYE_API_KEY=your_birdeye_key
railway variables set MOONDEV_API_KEY=your_moondev_key
railway variables set COINGECKO_API_KEY=your_coingecko_key

# 设置区块链
railway variables set SOLANA_PRIVATE_KEY=your_solana_private_key
railway variables set HYPER_LIQUID_ETH_PRIVATE_KEY=your_hyperliquid_key
railway variables set RPC_ENDPOINT=your_rpc_endpoint

# 设置配置
railway variables set SLEEP_BETWEEN_RUNS_MINUTES=15
railway variables set USE_AI_CONFIRMATION=true
```

#### 步骤 4: 创建 railway.json
```bash
cat > railway.json << 'RAILWAY_EOF'
{
  "build": {
    "builder": "nixpacks"
  },
  "deploy": {
    "startCommand": "python src/main.py",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100,
    "restartPolicyType": "on_failure",
    "restartPolicyMaxRetries": 10
  }
}
RAILWAY_EOF
```

#### 步骤 5: 部署！
```bash
railway up
```

#### ✅ Railway 优势:
- ✅ 原生支持 Python
- ✅ 持久化进程 (完美适合交易循环)
- ✅ 简单的环境变量管理
- ✅ 自动重启和故障恢复
- ✅ 透明的日志查看
- ✅ 按使用量计费

---

### Part B: Vercel 部署前端展示

#### 步骤 1: 进入前端目录
```bash
cd frontend
```

#### 步骤 2: 安装依赖
```bash
npm install
```

#### 步骤 3: 本地测试
```bash
npm run dev
# 打开 http://localhost:3000
```

#### 步骤 4: 部署到 Vercel
```bash
# 方法 1: 使用 Vercel CLI
npm install -g vercel
vercel

# 方法 2: Git 集成
# 1. 推送代码到 GitHub
git add .
git commit -m "Add frontend dashboard"
git push origin main

# 2. 在 Vercel 网站导入项目
# 访问 https://vercel.com/dashboard
# 点击 "New Project" → 选择你的 GitHub 仓库
# 设置构建设置: Root Directory = frontend
```

#### 步骤 5: Vercel 配置
```bash
cat > frontend/vercel.json << 'VERCEL_EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
VERCEL_EOF
```

#### ✅ Vercel 优势:
- ✅ 免费 CDN
- ✅ 全球边缘网络
- ✅ 零配置部署
- ✅ 自动 HTTPS
- ✅ 自定义域名
- ✅ 完美的前端展示

---

## 🗄️ 方案 2: Railway 完整部署

如果你想要一个统一的解决方案：

### 步骤 1: 创建 Dockerfile
```bash
cat > Dockerfile << 'DOCKER_EOF'
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY src/ ./src/
COPY .env_example ./

EXPOSE 8000

CMD ["python", "src/main.py"]
DOCKER_EOF
```

### 步骤 2: Railway 部署
```bash
railway up --detach
```

### 步骤 3: 配置反向代理
在 Railway 中设置：
- 前端: `your-app.vercel.app`
- 后端: `your-app.railway.app/api`

---

## 📊 方案 3: Heroku 替代方案

如果 Railway 不可用：

### 安装 Heroku CLI
```bash
# macOS
brew install heroku/brew/heroku

# Ubuntu
curl https://cli-assets.heroku.com/install.sh | sh
```

### 部署
```bash
heroku create moon-dev-ai-agents
heroku config:set ANTHROPIC_KEY=your_key
heroku config:set OPENAI_KEY=your_key
git push heroku main
```

---

## 🔧 环境变量完整清单

### AI 服务
```
ANTHROPIC_KEY=sk-ant-...
OPENAI_KEY=sk-...
DEEPSEEK_KEY=...
GROQ_API_KEY=...
GEMINI_KEY=...
```

### 交易 APIs
```
BIRDEYE_API_KEY=...
MOONDEV_API_KEY=...
COINGECKO_API_KEY=...
```

### 区块链
```
SOLANA_PRIVATE_KEY=...
HYPER_LIQUID_ETH_PRIVATE_KEY=...
RPC_ENDPOINT=https://...
```

### 系统配置
```
SLEEP_BETWEEN_RUNS_MINUTES=15
USE_AI_CONFIRMATION=true
ACTIVE_AGENTS=...
```

---

## 🎯 推荐部署架构

```
┌─────────────────┐
│   Vercel        │
│  (Frontend)     │
│   Dashboard     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Railway       │
│  (Backend)      │
│   Trading Bot   │
└─────────────────┘
```

### 优势:
1. **Railway** 运行 Python 交易系统 (持久进程)
2. **Vercel** 展示前端界面 (静态托管)
3. **分离关注点** (展示 vs 业务逻辑)
4. **最佳性能** (各自使用最佳平台)

---

## 🚨 重要注意事项

### 1. 安全
- ❌ **永远不要**在前端暴露 API 密钥
- ✅ 使用环境变量存储所有密钥
- ✅ 定期轮换 API 密钥

### 2. 监控
```bash
# Railway 日志
railway logs

# Railway 状态
railway status

# Railway 重启
railway restart
```

### 3. 成本估算
- **Railway**: ~$5-20/月 (根据使用量)
- **Vercel**: 免费 (个人项目)
- **总计**: ~$5-20/月 (非常合理)

### 4. 扩展性
- Railway 可以轻松扩展到多个实例
- Vercel 自动处理 CDN 和缓存
- 支持自定义域名和 SSL

---

## 🎉 快速开始

哥，最快的部署方式：

```bash
# 1. Railway (后端)
npm install -g @railway/cli
railway login
railway init
railway variables set ANTHROPIC_KEY=your_key
railway up

# 2. Vercel (前端)
cd frontend
npm install
vercel

# 完成！你的交易系统就上线了！
```

---

## 📞 需要帮助？

- Railway 文档: https://docs.railway.app
- Vercel 文档: https://vercel.com/docs
- Discord: Moon Dev 社区

**记住**: Railway 处理持久化 Python 进程，Vercel 处理静态前端展示。这是最佳实践！
