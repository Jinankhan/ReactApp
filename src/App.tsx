import * as Components from './components';
const App = () => {
  return (
    <div>
      {Object.values(Components).map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );
};
export default App;
