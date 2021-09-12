import { Header } from './components/Header';
import { Slide } from './components/Slide';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Slide />
    </div>
  );
};
