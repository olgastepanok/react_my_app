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

function App() {
    const property = true;
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

  return (
    <div className="App">
        <div className="HomeWork6">
            <h1>Homework 6</h1>
            <MyStyledForm/>
        </div>
        <div className="HomeWork5">
            <h1>Homework 5</h1>
            <MyFormPart1/>
            <MyFormPart2/>
        </div>
        <div className="HomeWork4">
            <h1>Homework 4</h1>
            <LifeCycleComponent/>
            <LanguageComponent/>
        </div>
        <div className="HomeWork1">
            <h1>Homework 1</h1>
            <MyComponent1 name="MyComponent1"/>
            <MyComponent2 name="MyComponent2"/>
            <MyComponentWithImg name="MyComponentWithImg"/>
        </div>
        <div className="HomeWork2">
            <h1>Homework 2</h1>
            {property ? <MyComponent3/> : <MyComponent4 property="true"/>}
            <MyComponent4 name="Alex" property="false"/>
            <MyComponent4 name="Max" property="false"/>
        </div>
        <div className="HomeWork3">
            <h1>Homework 3</h1>
            <MyListComponentAntdUnique items={items}/>
            <MyListComponentWithUuid items={items}/>
            <MyCounterComponent/>
        </div>
    </div>
  );
}

export default App;
