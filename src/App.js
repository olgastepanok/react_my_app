import './App.css';
import MyComponent1 from './components/MyComponent1';
import MyComponent2 from './components/MyComponent2';
import MyComponentWithImg from './components/MyComponentWithImg';

function App() {
  return (
    <div className="App">
        <MyComponent1 name = "MyComponent1"/>
        <MyComponent2 name = "MyComponent2"/>
        <MyComponentWithImg name = "MyComponentWithImg"/>
    </div>
  );
}

export default App;
