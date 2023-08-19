import "./app.css";
import Loading from "./components/Loading";
import React, { Suspense } from "react";

const Header = React.lazy(() => import("./components/Header"));
const Main = React.lazy(() => import("./components/Main"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Main />
    </Suspense>
  );
};

export default App;
