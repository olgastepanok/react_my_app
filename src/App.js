import './App.css';
import MyComponent1 from './components/homework1/MyComponent1';
import MyComponent2 from './components/homework1/MyComponent2';
import MyComponent3 from './components/homework2/MyComponent3';
import MyComponent4 from './components/homework2/MyComponent4';
import MyComponentWithImg from './components/homework1/MyComponentWithImg';

function App() {
    const property = true;
  return (
    <div className="App">
        <MyComponent1 name="MyComponent1"/>
        <MyComponent2 name="MyComponent2"/>
        <MyComponentWithImg name="MyComponentWithImg"/>
        {property ? <MyComponent3/> : <MyComponent4 property="true"/>}
        <MyComponent4 name="Alex" property="false"/>
        <MyComponent4 name="Max" property="false"/>
    </div>
  );
}

export default App;
