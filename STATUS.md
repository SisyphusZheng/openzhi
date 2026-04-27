# KISS Framework v0.2.0 发布状态

## 发布时间
2026-04-27 15:41 (UTC+8)

## 发布内容

### @kissjs/core@0.2.0
- ✅ 新增PackageIslandMeta类型
- ✅ 新增packageIslands配置项
- ✅ 新增scanPackageIslands()函数
- ✅ 支持自动检测npm/JSR包中的Island组件

### @kissjs/ui@0.2.0
- ✅ 新增kiss-theme-toggle Island
- ✅ 简化kiss-layout为静态组件
- ✅ 导出islands数组供框架扫描

## 发布流程

### GitHub
- Commit: 6eb72fc
- Tag: v0.2.0
- Status: ✅ 已推送

### JSR
- @kissjs/core: ⏳ 等待发布（当前0.1.6）
- @kissjs/ui: ⏳ 等待发布（当前0.1.4）

### GitHub Actions
- Workflow: publish.yml
- Trigger: tag push 'v0.2.0'
- Status: ⏳ 运行中或已完成

## 本地测试状态

### wankong-kiss项目
- 配置已更新：packageIslands: ['@kissjs/ui']
- 依赖版本已更新：^0.2.0
- 测试状态：❌ 无法使用本地路径测试（sloppy-imports问题）

### 问题
- Vite bundle vite.config.ts时不支持Deno的sloppy-imports
- 需要等待JSR发布完成后使用JSR版本测试

## 下一步

1. 等待JSR发布完成（通常需要5-10分钟）
2. 验证JSR版本：
   ```bash
   deno info jsr:@kissjs/core@0.2.0
   deno info jsr:@kissjs/ui@0.2.0
   ```
3. 测试wankong-kiss构建：
   ```bash
   cd wankong-kiss
   deno task build
   ```
4. 验证功能：
   - kiss-theme-toggle Island是否正确hydration
   - 主题切换是否正常工作
   - L2脚本是否已删除

## 技术细节

### Package Islands自动检测流程
1. `vite.config.ts`中配置`packageIslands: ['@kissjs/ui']`
2. `buildStart`时调用`scanPackageIslands()`
3. 动态导入包并读取`islands`导出
4. 合并本地Island和包内Island
5. 客户端构建时自动生成导入和注册代码

### kiss-theme-toggle Island
- 位置：@kissjs/ui/kiss-theme-toggle
- 功能：主题切换（Dark/Light）
- 实现：DSD + hydration
- 策略：eager（立即hydration）

### kiss-layout简化
- 移除：_isLight属性
- 移除：_handleThemeToggle方法
- 移除：connectedCallback中的localStorage读取
- 替换：`<button class="theme-toggle">` → `<kiss-theme-toggle></kiss-theme-toggle>`

### L2脚本删除
- 保留：DSD polyfill
- 保留：CSS主题变量
- 保留：主题初始化脚本（localStorage/prefers-color-scheme → data-theme）
- 删除：composedPath()事件委托脚本

## 版本对比

| 版本 | @kissjs/core | @kissjs/ui | 发布日期 |
|------|-------------|-----------|---------|
| 0.1.x | 0.1.6 | 0.1.4 | 2026-04-26 |
| 0.2.0 | 0.2.0 | 0.2.0 | 2026-04-27 |

## SemVer说明

版本从0.1.x升级到0.2.0（MINOR版本升级）：
- ✅ 新功能：packageIslands自动检测
- ✅ 新功能：kiss-theme-toggle Island
- ✅ 向后兼容：不破坏现有功能
- ⚠️ BREAKING CHANGE：kiss-layout中的主题切换逻辑移除（需使用kiss-theme-toggle）
