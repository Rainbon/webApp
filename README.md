# webApp 知识点总结

### triggerHandler
triggerHandler() 方法触发被选元素的指定事件类型。但不会执行浏览器默认动作，也不会产生事件冒泡。
**与 trigger() 方法相比的不同之处**
* 它不会引起事件（比如表单提交）的默认行为
* .trigger() 会操作 jQuery 对象匹配的所有元素，而 .triggerHandler() 只影响第一个匹配元素。
* 由 .triggerHandler() 创建的事件不会在 DOM 树中冒泡；如果目标元素不直接处理它们，则不会发生任何事情。
* 该方法的返回的是事件处理函数的返回值，而不是具有可链性的 jQuery 对象。此外，如果没有处理程序被触发，则这个方法返回 undefined。

**在trigger 的函数中最后添加 `return false` 也可以阻止冒泡**

### test-valid test-componentBase test-H5内容
完成 
* 内容组织、添加页面、添加组件
* 整合fullPage支持页面切换
* 链式调用

### $.extend()的用法 使方法参数更灵活
在做ＪＳ开发时，我们将第三方复杂的插件进行封装，然后对外公开一个很简单的方法接口，这是开发时常用的方法，在ＪＳ里，我们的方法参数通常使用JQ的$.extend 扩展方法来实现

``````
function extend(arr) {
    arr = $.extend({ name: 'zzl', sex: 'male', age: 31 }, arr || {});
    alert("[Name:]" + arr.name + "[Sex:]" + arr.sex + "[Age:]" + arr.age);
}
``````
如果我们没有为arr指定值，它会把默认的值进行输出，如果我们为arr对象的某个属性赋值，它只修改了指定属性的值，对象的其它值保持为原来的默认值.

````
<a href="#" onclick="extend();return false;">extends</a>
<a href="#" onclick="extend({name:'占占'});return false;">extends</a>
````

