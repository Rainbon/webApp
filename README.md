# webApp 知识点总结

### triggerHandler
triggerHandler() 方法触发被选元素的指定事件类型。但不会执行浏览器默认动作，也不会产生事件冒泡。
**与 trigger() 方法相比的不同之处**
* 它不会引起事件（比如表单提交）的默认行为
* .trigger() 会操作 jQuery 对象匹配的所有元素，而 .triggerHandler() 只影响第一个匹配元素。
* 由 .triggerHandler() 创建的事件不会在 DOM 树中冒泡；如果目标元素不直接处理它们，则不会发生任何事情。
* 该方法的返回的是事件处理函数的返回值，而不是具有可链性的 jQuery 对象。此外，如果没有处理程序被触发，则这个方法返回 undefined。

**在trigger 的函数中最后添加 `return false` 也可以阻止冒泡**

### 