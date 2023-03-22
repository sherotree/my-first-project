// 实现路由 hash 存储与执行
// 在初始化完毕后需要思考两个问题：
// 1. 将路由的 hash 以及对应的 callback 函数储存
// 2. 触发路由 hash 变化后，执行对应的 callback 函数
class Routers {
  constructor() {
    this.routes = {};
    this.currentUrl = '';
  }

  // 将 path 路径与对应的 callback 函数储存
  route(path, callback) {
    this.routes[path] = callback || function () {};
  }

  // 刷新
  refresh() {
    // 获取当前 URL 中的 hash 路径
    this.currentUrl = location.hash.slice(1) || '/';
    // 执行当前 hash 路径的 callback 函数
    this.routes[this.currentUrl]();
  }
}
