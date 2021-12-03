# ReactJS Lecture Notes

>### Not: JSX geriye yanlızca 1 tane parent element dönebilir.!
Yanlış bir örnek:
```jsx
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
    </div>
    <h2>Hello World! 2</h2>
  );
```
Doğrusu:
```jsx
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
      <h2>Hello World! 2</h2>
    </div>
  );
```

#### **JSX içerisinde normal HTML özellikleri syntax olarak farklı..** Örnek:
```jsx
<div class="div">Div</div> // Hata verir.
<div className="div">Div</div> // JSX için doğru syntax.
```
