# ReactJS Lecture Notes

>### Not: JSX geriye yanlızca 1 tane parent element dönebilir.!
Yanlış bir örnek:
```js
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
    </div>
    <h2>Hello World! 2</h2>
  );
```
Doğrusu:
```js
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
      <h2>Hello World! 2</h2>
    </div>
  );
```