import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/appstore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Videoplayer from "./components/Videoplayer";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        { path: "watch", element: <Videoplayer /> },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
