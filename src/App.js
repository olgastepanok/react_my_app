import './App.css';
import MyComponent1 from './components/homework1/MyComponent1';
import MyComponent2 from './components/homework1/MyComponent2';
import MyComponent3 from './components/homework2/MyComponent3';
import MyComponent4 from './components/homework2/MyComponent4';
import MyComponentWithImg from './components/homework1/MyComponentWithImg';
import MyListComponentWithUuid from './components/homework3/MyListComponentWithUuid';
import MyListComponentAntdUnique from './components/homework3/MyListComponentAntdUnique';
import MyCounterComponent from './components/homework3/MyCounterComponent';
import LifeCycleComponent from './components/homework4/LifeCycleComponent';
import LanguageComponent from './components/homework4/LanguageComponent';
import MyFormPart1 from './components/homework5/MyFormPart1';
import MyFormPart2 from './components/homework5/MyFormPart2';
import MyStyledForm from './components/homework6/MyStyledForm';
import MyToDoList from "./components/homework7/MyToDoList";
import ErrorPage from "./components/homework9/ErrorPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calculator from "./components/homework9/Calculator";
import ErrorBoundary from "./components/homework9/ErrorBoundary";
import ComponentWithContext from "./components/homework10/ComponentWithContext";
import ComponentWithCommonState from "./components/homework11/ComponentWithCommonState";
 import {Clock} from "./components/homework12/Clock/Clock";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/homework1",
    component: Homework1
  },
  {
    path: "/homework2",
    component: Homework2
  },
  {
    path: "/homework3",
    component: Homework3
  },
  {
    path: "/homework4",
    component: Homework4
  },
  {
    path: "/homework5",
    component: Homework5
  },
  {
    path: "/homework6",
    component: Homework6
  },
  {
    path: "/homework7",
    component: Homework7
  },
  {
    path: "/homework8",
    component: Homework8,
    routes: [
      {
        path: "/homework8/link1",
        exact: true,
        component: Link1
      },
      {
        path: "/homework8/link2",
        exact: true,
        component: Link2
      }
    ]
  },
  {
    path: "/homework9",
    component: Homework9
  },
  {
    path: "/homework10",
    component: Homework10
  },
  {
    path: "/homework11",
    component: Homework11
  },
  {
    path: "/homework12",
    component: Homework12
  },
];

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/homework2">Homework 2</Link>
          </li>
          <li>
            <Link to="/homework3">Homework 3</Link>
          </li>
          <li>
            <Link to="/homework4">Homework 4</Link>
          </li>
          <li>
            <Link to="/homework5">Homework 5</Link>
          </li>
          <li>
            <Link to="/homework6">Homework 6</Link>
          </li>
          <li>
            <Link to="/homework7">Homework 7</Link>
          </li>
          <li>
            <Link to="/homework8">Homework 8</Link>
          </li>
          <li>
            <Link to="/homework9">Homework 9</Link>
          </li>
          <li>
            <Link to="/homework10">Homework 10</Link>
          </li>
          <li>
            <Link to="/homework11">Homework 11</Link>
          </li>
          <li>
            <Link to="/homework12">Homework 12</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function HomePage() {
  return <div className="HomePage">
    <h1>Home Page</h1>
  </div>;
}

function Homework1() {
  return <div className="HomeWork1">
    <h1>Homework 1</h1>
    <MyComponent1 name="MyComponent1"/>
    <MyComponent2 name="MyComponent2"/>
    <MyComponentWithImg name="MyComponentWithImg"/>
  </div>;
}
function Homework2() {
  const property = true;
  return <div className="HomeWork2">
    <h1>Homework 2</h1>
    {property ? <MyComponent3/> : <MyComponent4 property="true"/>}
    <MyComponent4 name="Alex" property="false"/>
    <MyComponent4 name="Max" property="false"/>
  </div>;
}

function Homework3() {
  const items = [
    {
      value:"value1"
    },
    {
      value:"value2"
    },
    {
      value:"value3"
    },
    {
      value:"value4"
    },
    {
      value:"value2"
    },
    {
      value:"value4"
    },
  ];
  return <div className="HomeWork3">
    <h1>Homework 3</h1>
    <MyListComponentAntdUnique items={items}/>
    <MyListComponentWithUuid items={items}/>
    <MyCounterComponent/>
  </div>;
}

function Homework4() {
  return <div className="HomeWork4">
    <h1>Homework 4</h1>
    <LifeCycleComponent/>
    <LanguageComponent/>
  </div>;
}

function Homework5() {
  return <div className="HomeWork5">
    <h1>Homework 5</h1>
    <MyFormPart1/>
    <MyFormPart2/>
  </div>;
}

function Homework6() {
  return <div className="HomeWork6">
    <h1>Homework 6</h1>
    <MyStyledForm/>
  </div>;
}

function Homework7() {
  return <div className="HomeWork7">
    <h1>Homework 7</h1>
    <MyToDoList/>
  </div>;
}

function Homework8({routes}) {
  return <div className="HomeWork8">
    <ul>
      <li>
        <Link to="/homework8/link1">Link 1</Link>
      </li>
      <li>
        <Link to="/homework8/link2">Link 2</Link>
      </li>
    </ul>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </div>;
}

function Homework9() {
  return <div className="HomeWork9">
    <h1>Homework 9</h1>
    <ErrorBoundary>
      <Calculator/>
    </ErrorBoundary>
  </div>;
}

function Homework10() {
  return <div className="HomeWork10">
    <h1>Homework 10</h1>
    <ComponentWithContext/>
  </div>;
}
function Homework11() {
  return <div className="HomeWork11">
    <h1>Homework 11</h1>
    <ComponentWithCommonState/>
  </div>;
}

function Homework12() {
  return <div className="HomeWork12">
    <h1>Homework 12</h1>
    <Clock/>
  </div>;
}

function Link1() {
  return <h3>Link 1</h3>;
}

function Link2() {
  return <h3>Link 2</h3>;
}

export default App;
