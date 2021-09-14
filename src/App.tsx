import { Header } from './components/Header';
import { Shelf } from './components/Shelf';
import { Slide } from './components/Slide';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Shelf />
    </div>
  );
};
