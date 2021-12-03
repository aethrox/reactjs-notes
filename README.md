### ReactJS Lecture Notes

# React Nedir?

React bir JavaScript kütüphanesi olup web uygulamaları için hızlı ve interaktif kullanıcı arayüzleri oluşturmada kullanılır.

Açık kaynak kodlu, bileşen bazlı ve front-end bir kütüphane olan React, sadece uygulamanın görünüm katmanından sorumludur.

React, Jordan Walke adında Facebook’ta çalışan bir yazılım mühendisi tarafından geliştirilmiştir.

# JSX ve Component

>### Not: JSX geriye yanlızca 1 tane parent element döndürebilir.!
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
### *Örnek bir component yapısı*: (Class-Based Component)
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

export default User; // Component sınıfından miras alınmış yeni bir 'User' component (class) yapımızı dışarıya aktarıyoruz. 
```

### *Örnek bir component yapısı*: (Function-Based Component)
```jsx
import React from 'react';

function Navbar(){ //Eğer component yapımız sabit bir yapı olacaksa yani herhangi bir state barındırmayacak ise "function-based" component yapısı kullanmamız çok daha sağlıklı olur.
    return (
        <div>
            <h3>User App</h3>
        </div>
    )
}

export default Navbar
```

### Örnek bir stil ekleme işlemi:
```jsx
    return ( 
      // stil yapımızı yine HTML içerisindeki gibi fakat '=' ifadesinden sonra '{{}}' yapısının içerisine yazıyoruz aşağıda görüldüğü gibi.. 
      //'{{}}' ve bu yapımızın ismine "Embedding Expressions" diyoruz.
      <div>
        <h1 style={{color: "red", fontSize: "32px"}}>App Component</h1>
      </div>
    );
```

# Props

## **Props nedir?**
"props" yapısı bizim verilerimizi bir component'den diğer component'e aktarılmasını sağlar. ve sayfa içerisindeki veri yapılarımızı daha dinamik bir hale getirir.

### **Örnek props kullanımı:**
```jsx
//App.js
<Navbar title="User App"/> 
//buradaki "Navbar" bir component. "title" kısmı bizim anahtar kelimemiz (key) "User App" ise verimiz (value)
//verimizi diğer component yapımıza aktardığımıza göre şimdi birde nasıl kullanıldığına bakalım.

//Navbar.js
function Navbar(props){
    return ( // gördüğünüz gibi props yapımızı bir parametre olarak aldık.
        <div>
            <h3>Props içerisindeki title değerimiz: {props.title}</h3>
        </div>
    )
}
```

## **Default props ve PropTypes**
* propTypes - Verinin tipini ve gereklimi gereksizmi olduğunu belirtmek için kullanılıyor.
* defaultProps - Verilerin varsayılan değerlerini ayarlamak için kullanılıyor.
```jsx
import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props){
    return (
        <div>
            <h3>Props içerisindeki title değerimiz: {props.title}</h3>
        </div>
    )
}

Navbar.propTypes = { //title değerimizin gerekliliğini yani zorunluluğunu belirttik.
    title: PropTypes.string.isRequired
}

Navbar.defaultProps  = { //title değerimizin varsayılan değerini belirttik.
    title: "Default App"
}
export default Navbar
```

# State

## **State nedir?**
JavaScript’te bir değer saklayacağımız zaman nasıl ki değişken oluşturmak için var-let-const tanımlamalarından yararlanıyorsak, React componentlerinde de değer saklamak için state’ten yararlanırız.

Bir butona tıkladıktan sonra bir değeri güncellemek için, kullanıcı tarafından girilmiş bir input değerini saklamak için veya bir servisten dönen sonucu depolamak/kaydetmek gibi birçok farklı durumda state’i kullanılabiliriz.

#### Önemli bağlantılar:
[**JSX Emmet support | Medium**]("https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c")
