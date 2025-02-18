function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">The best sneakers store</p>
          </div>
        </div>
        <div>
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span>1205 UAH</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="user" />
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>

        <div className="d-flex ">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
            <h5>Men's Nike Blazer Mid '77 Vintage</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
            <h5>Men's Nike Blazer Mid '77 Vintage</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
            <h5>Men's Nike Blazer Mid '77 Vintage</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg"></img>
            <h5>Men's Nike Blazer Mid '77 Vintage</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>12 999 UAH</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
