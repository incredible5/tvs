import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailsPage from "./Containers/DetailsPage";

import Homepage from "./Containers/HomePage";
import LoginPage from "./Containers/LoginPage";

import { getData } from "./services/data.services";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("userData") ? (
        <Component {...props} />
      ) : (
        <LoginPage {...props} />
      )
    }
  />
);

function App() {
  const [mounted, setMounted] = useState(false);

  const fetchData = () => {
    getData()
      .then((res) => {
        const data =
          res.data && res.data.TABLE_DATA && res.data.TABLE_DATA.data;
        if (data) {
          localStorage.setItem("data", JSON.stringify(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!mounted) {
    fetchData();
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Homepage} />
        <PrivateRoute path="/details/:rowId" exact component={DetailsPage} />
        <PrivateRoute path="*" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
