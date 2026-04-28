## 接触异步
1. 异步判断方式：
    堆栈中是否有：promise.then
2. 确定加密参数：
    sign - response
3. 搜索interceptors  一般屏蔽掉axios数据
4. 定位加密位置：
    1.请求加密搜索：interceptors.request.use 或者 interceptors.request
    2.响应加密搜索：interceptors.response.use 或者 interceptors.response
5. 断点调试

n.unshift(r.fulfilled, r.rejected) r.fulfilled 是请求成功所执行 r.rejected 是请求不成功所执行