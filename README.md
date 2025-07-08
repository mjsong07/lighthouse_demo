文章地址：https://juejin.cn/post/7524254095038382080

> 本教程主要参考 `参考developer.chrome.com的教程`
> <https://developer.chrome.com/docs/devtools/lighthouse?hl=zh-cn>

# 1.环境搭建

官方使用的是一个云线上react代码，实际效果比较卡顿，图片也无法查看。可以通过[git地址](https://github.com/mjsong07/lighthouse_demo)本地跑调试

## 本地启动

```sh
npm i # 安装
npm run develop  # 启动
```

访问 <http://127.0.0.1:1234/>

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2bebadfe3da945b2b02bcdf0846f9b67~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=HdwCccrh0SD%2Bdo1h7YOZE5AkERc%3D)

## 确认自己的chrome版本

在地址栏输入 查看自己的版本，不同版本确实命名和位置都不太一样

```js
chrome://version
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/52269e6eda814a629c8caa7c35706832~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=51yL9TEQxMLJZt%2Fh0Nl6SrvBUQ8%3D)

## 使用隐私模式启动

为了避免分析的时候，被插件的影响诊断，建议使用无痕模式启动

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2cece0ffa8a44844bd3faa54d4a5e414~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=sr8kSVfyjF89NslYI7L30LYuD2I%3D)

## 设置开发者工具 默认为中文

英语不好，可以设置为中文便于理解
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/7281636298b14867a503a370d1c377a1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=kZDHAyCbI4YGSq76xaVcBSFH1m8%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3544e17fe5224451b8ddab20484daf2d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=KayRwv6JNMI1Qw3LtsNVVo5o7D4%3D)

# 2.lighthouse分析

## 建立基准

就是通过多次生成lighthoust报表，对比差异才能明确是否被正确优化到位。

再浏览器空白右键，选择inspect/开发者工具， 打开开发者工具

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/fdd47d597b9d478c873d374b2a5010a3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=ocBY926qUwgYqeAtKpqRF7C65Hw%3D)

打开 Lighthouse 面板。它可能隐藏在 “更多面板”后面。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ea8b61fff5494136b946b46bdedfa81d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=oxd33fqGeuiUgYxGsvmkPyuE8GM%3D)

选择移动端，然后点击“分析xxx”

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/cbf76c7f3c594c44930159b2b645c316~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=g%2Bks5ErFMqwJIFlzljgWYxfUI6g%3D)

开始审查。。。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4307ba7ae4c545f8bf5ff5e2212a9082~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=50EuFnnaUh05MNxv3Z7h5YsuSuE%3D)

得到一份糟糕的结果，当然分数每次可能都不太一样，应该跟多关注下面的建议
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a2586e43eb784710a8b3f668a51fc53b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=crEBeWhCuB8VQtLFA%2Fvu3z4ZK1U%3D)

通过点击这里的按钮可以切换不同的评估建议

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6fb5fec45c6e4a518e80e39b2456de1a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=gfvTWgkCc%2F8OkBgnESKZN%2BAHhTY%3D)

给出了很多建议
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/40c8daa2f66840a78a55598fbb0f6429~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=IDiFqB9v8fTan7TjO7MOvEBB1Yc%3D)

# 3.优化

## 1.优化请求压缩

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/3db186277e384bcc914ea487e62383fb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=4V%2FAfHfjfWl5MZ%2FwCOAWXlYQQq0%3D)

这里提示我们要把服务器的资源压缩后在返回给客户端解压。

### 设置网络请求

网络请求默认不展示 解压前的资源大小
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9e909fa4a655439cbed1abd6397f5ee8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=rvuJiDlUv7yzGPxvDkdXGS3bE3o%3D)

打开网络面板，然后依次选择 settings Settings（设置）> check\_box勾选框 Use large request rows（大请求行）。

打开前后对比资源
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8db190b9904249e491e7a06eed049de1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=4b9PSdnCViWxpu37O%2FjFW3CUnX8%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8455d4198e824567bf20d1272474e85e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=teZoxg70q6vcsvQeCaYn0UvQC3E%3D)

### 修改代码

打开我们项目

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8f49243ce7154495bc0076bbb42355df~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=dt%2FYzD1lE%2F%2BXZCoeIscneur25%2Bk%3D)

```js
const fs = require('fs');
const compression = require('compression'); // 引入压缩包

app.use(compression()); // 使用压缩
app.use(express.static('build'));
```

再次请求，在网络里面看已经 看到明显的压缩了，比如lodash从 540 kB 到 96.9 kB

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1645f12093374cce8df33c86434de288~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=9syzy%2Fe9DnBh%2F%2FZzTK4c9KCstS0%3D)

请求头也增加了 gzip

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6ff1ac26fd0b4b0a9dcdb7f937e9893d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=zeC9rwHqhTT57qWo9%2FYwEJbwfAg%3D)

再次诊断
从 51 变成 52

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/71e0c8fe7e664235bceda07f3ad584e1~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=hMyMMS2EstkHil8g3q7RemcS9uM%3D)

## 2.优化图片

提示图片太大 建议调整大小
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6ac62e31d7a54b26a2e925b907c2ff4f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=oziHq%2FFevmlRsmiU%2BTXO4aDyihU%3D)

我们在url加上边缘渲染的压缩参数

### 修改代码

调整 src/model.js

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a5521c3539234962a78e4d7c6e919eda~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=vnOMYBuavlD7AE3iw%2BwSoIY9QV4%3D)

```js
 image: `https://dn-dora-document.qbox.me/pexels-clement.jpg?imageView2/1`, 
 改成 
 image: `https://dn-dora-document.qbox.me/pexels-clement.jpg?imageView2/1/w/300`,  
```

从网络请求查看 大小也从 4300k 变成了 28k

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/23a1cae3316c432a92322f4809ea92bb~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=RoM%2BcZmD3t9egvL9PNbNXABFNMM%3D)

### 建议策略

*   在构建过程中调整图片大小。
*   在构建过程中为每个图片创建多种尺寸，然后在代码中使用 `srcset`。在运行时，浏览器会负责选择最适合其所运行设备的大小。请参阅[相对大小的图片](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images?hl=zh-cn#relative_sized_images)。
*   使用图片 CDN，以便在您请求图片时动态调整图片的大小。
*   至少要优化每张图片。这通常可以带来巨大的节省。优化是指通过可缩减图片文件大小的特殊程序运行图片。如需更多提示，请参阅[图片优化必备知识](https://images.guide/)。

## 3.移除阻塞资源

呈现阻塞资源是指浏览器必须先下载、解析和执行的外部 JavaScript 或 CSS 文件，然后才能显示网页。目标是仅运行正确显示网页所需的核心 CSS 和 JavaScript 代码。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d9c5a8b4516b4705964f46b57a1b13b4~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=4AYC5NaIQGpIs2seWUAsgyXbnMM%3D)

### 确认资源是否正常被引用和使用

打开快速搜索

*   在 Mac 上，按 `Command`+`Shift`+`P`
*   在 Windows、Linux 或 ChromeOS 上，按 `Ctrl`+`Shift`+`P`

搜索 显示覆盖范围
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c635a782f52e45e090e4464e7eca33c7~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=dXL3Yr4z5hfeMKmWglXumrAyBvc%3D)

底部会显示覆盖率，点击刷新按钮开始扫描

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/5c5d8b6cdb324f8e9818f547ee68c2c9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=36k1xLZ9T3OfW65gmJXOTi9QuaU%3D)

扫描结果 红色为未使用，灰色为已经使用
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/405c9dbedab2459c81831193e3d120cd~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=5CgQ%2B2RSccGXBCrdg%2BaTsNQAvv0%3D)

点击其中一条 lodash，可以看到灰色大部分都是变量定义和注释，实际定义的方法并没有被调用

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/27cdc729ac734af19a1dfb6155de9b56~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=0O2k3JTaUyCINoCgs3vijjIxpAE%3D)

### 加入block

我们可以加入block 阻止这些资源加载看看程序是否还能正常运行。

继续快捷键 `Command`+`Shift`+`P` ，搜索 屏蔽，选择 网络请求屏蔽

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d57baf4356db43bfb555803214b291da~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=4TU677%2BzJLMuG%2FQ2vp%2FpkXat23o%3D)

底部新增 网络请求屏蔽 页签，点击+ 输入过滤条件 /libs/\*
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/0454193ae9ad4c1b9db3dae501924e29~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=coq8eJq9mD8%2BE3R32mBXG%2BEHtEY%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4d542119d4434f869a875fc3a4b79946~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=79dayed8TH3oB7p8TAg%2BZfKu2kI%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/340513084e1a422da17a4632bedd9eef~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=LakFgE8iyJywpwlwgt63FJQyS5A%3D)

刷新页面，可以看到资源已被block ，但是业务正常，可以移除多余资源

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/ce54ea0eabf445d9890fdfdddd06d7cc~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=DPNp29cxBdwNZLshcOdqVerIufk%3D)

### 修改代码

template.html

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f5bd2a2adf5e43a08847e3b3ef5f3007~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=qOwr8Z3KDGgp7NC%2F1Iov1R%2By2pI%3D)

移除

```js
    <script src="/libs/lodash.js"></script>
    <script src="/libs/jquery.js"></script>
```

[关键呈现路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path?hl=zh-cn)是指加载网页所需的代码。一般来说，您可以通过仅在网页加载期间提交关键代码，然后延迟加载所有其他代码来加快网页加载速度。

优化建议：

*   您不太可能找到可以直接移除的脚本，但您经常会发现，许多脚本在页面加载期间不需要请求，而是可以异步请求。请参阅[使用 async 或 defer](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript?hl=zh-cn#use_async_or_defer)。
*   如果您使用的是框架，请检查它是否具有正式版模式。此模式可能会使用[摇树优化](https://webpack.js.org/guides/tree-shaking/)等功能，以消除阻止关键渲染的不必要代码。

修改文件 webpack.config.js

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/bd39997be32f4859aeaffe9f1fe1af60~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=BIW0f7f8UMtUTrTWEmQjC66KKms%3D)

```js
mode: "development",
改成
mode: "production",
```

## 4.减少主线程工作

可以看到大部分都是 js阻塞执行导致。
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/482ec1643b9d4f1fb9a35c56313014ca~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=Qdol1OgUp1vZmX%2F9XllcJcMLDHQ%3D)

### performance 性能面板

js主线程要是单线程执行，如果有同步阻塞的方法会影响渲染，具体的检查 需要使用 performance 性能面板

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/213bc979219340da8afc9e3a502390f3~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=0a22dIpLwk85YHwnQgg1yYoqnHI%3D)

点击刷新按钮进行录制

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/588756c589ef49378a50a774631cab0f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=rt66e5GzVWjPCOsAd8ZPrvYI1t4%3D)

新版支持 modern模式 推荐

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2270eeb74d214797a218ecc0575e33ab~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=7WPIglD4PGVvdV%2BAX%2BkT5Klr%2F2M%3D)

这里我们重点关注 黄色的山图，这里：主要：cpu有大量运算，最底部有最终调用的js逻辑，可以看到是mineBitcoin。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d0a6607a3baa47fb851572250b44d54e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=E4qpdAJxBmekgts2WTC0P%2BkFYeM%3D)

### 修改代码

我们在项目代码全局搜索 mineBitcoin，找到在src/App.jsx 下面构造方法执行了mineBitcoin方法。里面死循环了1.5秒。我们注释该代码再运行look look。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/67416d102a4f4c23bf330bb7a0fd2c3a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=uN%2BXmbLlZPbK5vXjywpxP3nPgag%3D)

重新评分 一下飙到 87

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/376a2feb17854996b1d28de5f748f8bd~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgamFzb25feWFuZw==:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjk3MjcwNDc5NTgwMjY1MyJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1752573384&x-orig-sign=%2FY%2B1ctftURmc8zOiBDT2r80OZjI%3D)

> 可以使用 [User Timing](https://developer.mozilla.org/docs/Web/API/User_Timing_API) API 任意标记应用生命周期的特定阶段，以跟踪每个阶段所需的时间。

# 4.总结

lighthouse 是一个实操性很强的报告，我们按上面提示依次优化，就能把页面焕然一新。

# 5.源码

<https://github.com/mjsong07/lighthouse_demo>
