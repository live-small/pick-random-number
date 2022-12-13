import { csStudyParticipants } from '../constants.js';
import { hasSpace, isEmptyString } from '../utils.js';

export default function Form({ $container, onRandom }) {
  const $form = document.createElement('form');
  $container.append($form);

  this.render = () => {
    $form.innerHTML = `
		<label class="form-container">
			<input class="input" autofocus id="participants" placeholder="참여할 사람을 입력하세요"></input>
			<button class="random-start-button">랜덤시작</button>
		</label>
		`;
  };

  $form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!onRandom) return;

    const $input = document.getElementById('participants');
    if (!$input) return;

    const participants = $input.value.trim();
    $input.value = '';

    if (isEmptyString(participants)) {
      onRandom(csStudyParticipants);
    } else {
      if (!hasSpace(participants)) {
        alert('스페이스로 참여자를 구분해주세요. \n예시: 치킨 피자 족발');
        return;
      }
      onRandom(participants.split(' '));
    }
  });
}
