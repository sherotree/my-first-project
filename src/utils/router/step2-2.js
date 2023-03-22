// 完整实现 hash Router
// 做个判断，如果是后退的话，我们只需要执行回调函数，不需要添加数组和移动指针

// 实现后退功能
// 需要创建一个数组 history 来存储国王的 hash 路由，并创建一个指针 currentIndex 来
// 随着后退和前进功能移动来指向不同的 hash 路由
class Routers {
  constructor() {
    // 储存 hash 与 callback 键值对
    this.routes = {};
    // 当前 hash
    this.currentUrl = '';
    // 记录出现过的 hash
    this.history = [];
    // 作为指针，默认指向 this.history 的末尾，根据后退前进指向 history 中不同的 hash
    this.currentIndex = this.history.length - 1;
    this.refresh = this.refresh.bind(this);
    this.backOff = this.backOff.bind(this);
    // 默认不是后退操作
    this.isBack = false;
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  route(path, callback) {
    this.routes[path] = callback || function () {};
  }

  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    if (!this.isBack) {
      if (this.currentIndex < this.history.length - 1) {
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(this.currentUrl);
        this.currentIndex++;
      }
    }
    // 将当前 hash 路由推入数组储存
    this.history.push(this.currentUrl);
    // 指针向前移动
    this.currentIndex++;
    this.routes[this.currentUrl]();
    this.isBack = false;
  }

  // 后退功能
  backOff() {
    this.isBack = true;
    // 如果指针小于 0 的话，就不存在对应 hash 路由了，因此锁定指针为 0 即可
    this.currentIndex <= 0 ? (this.currentIndex = 0) : this.currentIndex--;
    // 随着后退， location.hash 也应该随之变化
    location.hash = `#${this.history[this.currentIndex]}`;
    // 执行指针目前指向 hash 路由对应的 callback
    this.routes[this.history[this.currentIndex]]();
  }
}
