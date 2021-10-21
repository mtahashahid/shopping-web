import "./App.css";
// import "antd/dist/antd.css";
import { Navbar, Homepage, ProductDetails } from "./components";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="routes">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/ProductDetails">
              <ProductDetails />
            </Route>
          </Switch>
        </Layout>
      </div>
    </div>
  );
}

export default App;
