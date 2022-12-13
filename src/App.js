import Header from './components/Header.js';
import Form from './components/Form.js';
import Result from './components/Result.js';
import { randomMatchingPersonAndNumber } from './random.js';

export default function App({ $container }) {
  const headerComponent = new Header({ $container });

  const formComponent = new Form({
    $container,
    onRandom: (people) => {
      const randomResult = randomMatchingPersonAndNumber(people);
      resultComponent.setState(randomResult);
    },
  });

  const resultComponent = new Result({
    $container,
    initialState: '',
  });

  this.turnOn = () => {
    headerComponent.render();
    formComponent.render();
  };
}
