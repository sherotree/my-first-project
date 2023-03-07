/** @type {import('tailwindcss').Config} */
module.exports = {
  // 每个浏览器的默认css不一样，所以很多项目会引入一个初始化的css将所有浏览器的默认值改成一致
  // tailwind里面有默认进行这个操作，antd也有，但他们两个的规则不一样，tailwind的覆盖了antd的
  // 所以解决方案是禁用tailwind的默认样式
  // https://github.com/necolas/normalize.css，以前项目还会主动引用这个进行css初始化
  corePlugins: {
    preflight: false, 
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
