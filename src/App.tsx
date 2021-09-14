import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Newsletter } from './components/Newsletter';
import { Shelf } from './components/Shelf';
import { Slide } from './components/Slide';

export const App = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Shelf />
      <Newsletter />
      <Footer />
    </div>
  );
};
