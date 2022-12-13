import { csStudyParticipants } from '../constants.js';
import { isEmptyString } from './utils.js';

export default function Form({ $container, initialState, onRandom }) {
  const $form = document.createElement('form');
  $container.append($form);
  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    $form.innerHTML = `
		<label>
			<input autofocus id="participants" value="${this.state}" placeholder="참여할 사람을 입력하세요"></input>
			<button>랜덤시작</button>
		</label>
		`;
  };

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!onRandom) return;

    const $input = document.getElementById('participants');
    if (!$input) return;

    const participants = $input.textContent.trim();
    if (isEmptyString(participants)) {
      onRandom(csStudyParticipants);
    } else {
      onRandom(participants);
    }
  });
}
