import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./components/utils/appstore";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Body />
    </div>
    </Provider>
  );
}

export default App;
