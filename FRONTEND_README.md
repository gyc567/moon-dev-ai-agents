# Moon Dev Dashboard - 前端技术说明

## 快速开始

```bash
cd frontend
npm install
npm run dev
# 打开 http://localhost:3000
```

## 功能特性

1. 主页仪表板 - 策略性能总览
2. 图表页面 - 回测结果可视化
3. AI 代理页面 - 48+ 代理状态监控
4. 策略页面 - 150+ 策略管理

## 技术栈

- Next.js 14 (React 框架)
- TypeScript (类型安全)
- App Router (最新路由)
- Vercel (静态部署)

## 部署到 Vercel

```bash
# 方法 1: Vercel CLI
npm install -g vercel
vercel

# 方法 2: Git 集成
# 推送代码到 GitHub，在 Vercel 导入项目
```

## 项目结构

```
frontend/
├── app/           # Next.js 页面
├── components/    # React 组件
├── public/        # 静态资源
└── package.json   # 依赖配置
```

## 更多详情

请查看 QUICK_START.md 和 DEPLOYMENT.md
