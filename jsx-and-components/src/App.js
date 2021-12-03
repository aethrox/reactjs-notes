import './App.css';

function App() {
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

export default App;
