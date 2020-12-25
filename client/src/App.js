import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./component/routing/PrivateRoute";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import Blogs from "./component/blogs/Blogs";
import Blog from "./component/blogs/Blog";
import Navbar from "./component/layout/Navbar";
import Drawer from "./component/layout/Drawer";
import Dashboard from "./component/dashboard/Dashboard";
import TrendingSideBar from "./component/trending/TrendingSideBar";
import TrendingBlogs from "./component/trending/TrendingBlogs";
import ProfileContainer from "./component/profile/ProfileContainer";
import Search from "./component/search/Search";
import Setting from "./component/setting/Setting";
import CreateBlog from "./component/blogs/CreateBlog";

// Redux
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";
import { getBlogs } from "./redux/actions/blog";

// utils
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getBlogs());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Drawer />
        <TrendingSideBar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/search' component={Search} />
          <PrivateRoute exact path='/create' component={CreateBlog} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/blog' component={Blog} />
          <PrivateRoute exact path='/blogs' component={Blogs} />
          <PrivateRoute exact path='/profile' component={ProfileContainer} />
          <PrivateRoute exact path='/setting' component={Setting} />

          {/* <Route exact path='/trending' component={TrendingBlogs} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
