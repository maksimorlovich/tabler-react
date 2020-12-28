import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
  Empty,
  Email,
  ProfilePage,
} from "./pages";

import HomePage from "./HomePage";
import FormElementsPage from "./FormElementsPage";
import PricingCardsPage from "./interface/PricingCardsPage";
import CardsDesignPage from "./interface/CardsDesignPage";
import StoreCardsPage from "./components/StoreCardsPage";
import IconPage from "./components/IconPage";
import ChartsPage from "./interface/ChartsPage";
import GalleryPage from "./GalleryPage";
import MapCardsPage from "./components/MapCardsPage";
import BlogPage from "./components/BlogPage";
import ButtonsPage from "./interface/ButtonsPage";
import EmptyPage from "./interface/EmptyPage";
import TablesPage from "./interface/TablesPage";
import ModalsPage from "./interface/ModalsPage";
import ListsPage from "./interface/ListsPage";

import "tabler-react/dist/Tabler.css";

type Props = {};

function App(props: Props) {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/400" component={Error400} />
          <Route exact path="/401" component={Error401} />
          <Route exact path="/403" component={Error403} />
          <Route exact path="/404" component={Error404} />
          <Route exact path="/500" component={Error500} />
          <Route exact path="/503" component={Error503} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/empty" component={EmptyPage} />
          <Route exact path="/buttons" component={ButtonsPage} />
          <Route exact path="/modals" component={ModalsPage} />
          <Route exact path="/tables" component={TablesPage} />
          <Route exact path="/lists" component={ListsPage} />
          <Route exact path="/cards" component={CardsDesignPage} />
          <Route exact path="/charts" component={ChartsPage} />
          <Route exact path="/email" component={Email} />
          <Route exact path="/empty-page" component={Empty} />
          <Route exact path="/form-elements" component={FormElementsPage} />
          <Route exact path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/icons" component={IconPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/maps" component={MapCardsPage} />
          <Route exact path="/pricing-cards" component={PricingCardsPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/store" component={StoreCardsPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
