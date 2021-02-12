import { AppRouter } from 'components/router/AppRouter'
import { useCachedFetch } from 'utils/useCachedFetch';

function App() {
  useCachedFetch('/assets/projects.json');
  
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
