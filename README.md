# ReactJS Lecture Notes

>### Not: JSX geriye yanlızca 1 tane parent element dönebilir.!
*Yanlış*:
```jsx
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
    </div>
    <h2>Hello World! 2</h2>
  );
```
*Doğru*:
```jsx
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
      <h2>Hello World! 2</h2>
    </div>
  );
```

#### **JSX içerisinde normal HTML özellikleri syntax olarak farklı..**
*Örnek*:
```jsx
<div class="div">Div</div> // Hata verir.
<div className="div">Div</div> // JSX için doğru syntax.
```

#### ***JSX ifadeleri içerisinde javascript ifadeleri kullanımı.***
*Örnek*:
```jsx
function App() { // {} içerisine javascript ifademizi yazıyoruz.
  const test = 33;
  const isAuth = true;
  return (
    <div className="App">
      <h1>Hello World! JSX and Component</h1>
      {1+1}
      <h2>{"Hello".toUpperCase()}</h2>
      <h2>{test}</h2>
      <div>
        {
          isAuth ? <p>Kullanıcı doğrulandı!</p> : null //<p>Kullanıcı Doğrulanamadı!</p>
        }
      </div>
    </div>
  );
}
```
### *Örnek bir component yapısı*:
```jsx
import React, { Component } from 'react' // içeriye react'ın component sınıfını alıyoruz.

class User extends Component { // Component yapısı miras alıyoruz.
    render() { // component yapımızı işlemek için fonksiyonumuz.
        return ( // JSX yapımızı geriye döndüyoruz.
            <div>
                <form>
                    <input type="text"></input>
                    <button>Gönder</button>
                </form>
            </div>
        )
    }
}

export default User; // ve Component sınıfından miras alınmış yeni bir 'User' component (class) yapımızı dışarıya aktarıyoruz. 
```