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
    window.addEventListener('load', this.refresh, false);
    window.addEventListener('hashchange', this.refresh, false);
  }

  route(path, callback) {
    this.routes[path] = callback || function () {};
  }

  refresh() {
    this.currentUrl = location.hash.slice(1) || '/';
    // 将当前 hash 路由推入数组储存
    this.history.push(this.currentUrl);
    // 指针向前移动
    this.currentIndex++;
    this.routes[this.currentUrl]();
  }

  // 后退功能
  backOff() {
    // 如果指针小于 0 的话，就不存在对应 hash 路由了，因此锁定指针为 0 即可
    this.currentIndex <= 0 ? (this.currentIndex = 0) : this.currentIndex--;
    // 随着后退， location.hash 也应该随之变化
    location.hash = `#${this.history[this.currentIndex]}`;
    // 执行指针目前指向 hash 路由对应的 callback
    this.routes[this.history[this.currentIndex]]();
  }
}

// 在后退的时候我们往往需要点击两下
// 问题在于,我们每次在后退都会执行相应的 callback ,这会触发 refresh() 执行,
// 因此每次我们后退, history 中都会被 push 新的路由 hash,
// currentIndex 也会向前移动,这显然不是我们想要的。
