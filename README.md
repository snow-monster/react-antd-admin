### 敲黑板，划重点！！！

鉴于本卢瑟饱受某些admin库的过度封装以及面条式使用方式，本基础模板不做过度封装，亦不做任何炫技封装

### 代码组织理念

  1， 组件化 与 模板化结合， 知乎大神参考：
  
  2， 基础UI及简单模块的复用通过组建化，大业务板块，页面模块 模板化
  
  3， hooks 只用来组织状态逻辑，effects逻辑， 不能用来组织UI层配置
  
  4， UI可以通过配置化解决，例如schema 配置
  
  
### 代码分层理念
  1，参考 nestjs springboot angular
  
  2,
  
  module
  
    service
    
    view
    
    
  

Snow-Admin-Vue3 是一个基于 Vite, 采用 Vue3.2+、Vue-Router、Pinia、Ant-Design-Vue 3 +、TypeScript 的后台解决方案，目标是为开发中大型项目提供开箱即用的解决方案。包括二次封装组件、、hooks、动态菜单、权限校验、按钮级别权限控制等功能。项目会使用前端较新的技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习 vue3、vite、ts 等主流技术。该项目会持续跟进最新技术，并将其应用在项目中。
