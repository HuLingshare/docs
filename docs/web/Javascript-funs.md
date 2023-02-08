# 常用函数

## 获取数据类型

::: tip
:tada: 类型判断 返会Array,Function,String,Object,Date,Symbol 等
:::

```js
function toRawType() {
  Object.prototype.toString.call(value).slice(8, -1)
}
```

## 判断是否是对象
```js
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
```

## 判断是否是正则对象

```js
function isRegExp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]'
}
```

## 策略者模式

```js
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null) //创建一个新的对象
  var list = str.split(',') //按字符串,分割
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true //map 对象中的[name1,name2,name3,name4]  变成这样的map{name1:true,name2:true,name3:true,name4:true}
  }
  return expectsLowerCase
    ? function (val) {
        return map[val.toLowerCase()]
      } //返回一个柯里化函数 toLowerCase转换成小写
    : function (val) {
        return map[val]
      } //返回一个柯里化函数 并且把map中添加一个 属性键
}

// 检查属性是否为保留属性
const isReservedAttribute = makeMap('key,ref,slot,slot-scope,is')
isReservedAttribute('is') // true
```

## 判断数组、对象的值是否相等

```js
function looseEqual(a, b) {
  if (a === b) {
    return true
  } //如果a和b是完全相等 则true
  var isObjectA = isObject(a)
  var isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    //如果a和都是对象则让下走
    try {
      var isArrayA = Array.isArray(a)
      var isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        //如果a和b都是数组
        // every  条件判断
        return (
          a.length === b.length &&
          a.every(function (e, i) {
            //如果a长度和b长度一样的时候
            return looseEqual(e, b[i]) //递归
          })
        )
      } else if (!isArrayA && !isArrayB) {
        //或者a和b都不是数组
        var keysA = Object.keys(a) // 获取到a的key值 变成一个数组
        var keysB = Object.keys(b) // 获取到b的key值 变成一个数组
        //他们的对象key值长度是一样的时候  则加载every 条件函数
        return (
          keysA.length === keysB.length &&
          keysA.every(function (key) {
            //递归 a和b的值
            return looseEqual(a[key], b[key])
          })
        )
      } else {
        //如果不是对象跳槽循环
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      //如果不是对象跳槽循环
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    //b和a 都不是对象的时候
    //把a和b变成字符串，判断他们是否相同
    return String(a) === String(b)
  } else {
    return false
  }
}
```