# React.Children.map

如果你看react官方文档，你讲看到这句话“children are an opaque data structur”。他们基本告诉你`props.children` 可以是任何类型，例如数据，函数，对象，等等。因此你可以传递任何东西，你可以从不用关心他们。

React提供了一些操纵子元素的辅助方法，使用这些方法可以很简单无疼地操作子元素。这些方法在`React.children`下。

## 遍历子元素

1. `React.children.map`

2. `React.children.forEach`

上面两个是`React.Children`常见的辅助方法

```jsx
class IngoreFirstChild extends React.Component {
  render () {
    const children = this.props.children;
    return (
      <div>
        {
            React.Children.map(children, (child, i) => {
              if ( i < 1 ) return;
              return child;
            })
        }
      </div>
    );
  }
}
```

这个`<IgnoreFirstChild/>`组件当map的时候，会忽略掉第一个，返回其他的

```jsx
<IgnoreFirstChild>
  <h1>First</h1>
  <h1>Second</h1>
</IgnoreFirstChild>
```

![img](https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/2020-05-26-134938.png)

下面这个例子，我们也可以使用this.props.children.map。但是如果一个人传递一个函数作为它的子元素，会发生什么呢? this.props.children将不是一个数组而是一个函数。我们会遇到错误。

![](https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/2020-05-26-135117.png )

使用React.Children.map函数，不会遇到任何问题:

```jsx
<IgnoreFirstChild>
  {() => <h1>First</h1>} // Ignored
</IgnoreFirstChild>
```

