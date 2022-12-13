export default function Header({ $container }) {
  const $header = document.createElement('header');
  $container.append($header);

  this.render = () => {
    $header.innerHTML = `
			<h1>랜덤 뽑기</h1>
			<span>사다리타기처럼 뭔가를 랜덤으로 뽑고싶지만, 하나씩 적는 게 귀찮을 때 이용하시면 좋아요.</span>
			<div>이용방법</div>
			<ul>
				<li>1. 랜덤으로 뽑을 참여자를 적는다</li>
				<li>2. 랜덤시작 버튼을 클릭한다</li>
				<li>3. 결과는 참여자 - 숫자로 매칭되어 나온다</li>
			</ul>
		`;
  };
}
