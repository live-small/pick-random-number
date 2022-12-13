export default function Header({ $container }) {
  const $header = document.createElement('header');
  $container.append($header);

  this.render = () => {
    $header.innerHTML = `
			<h1 class="app-title">랜덤 뽑기</h1>
			<div class="app-description">
				<span class="when-to-use">사다리타기처럼 뭔가를 랜덤으로 뽑고싶지만, 하나씩 적는 게 귀찮을 때 이용하시면 좋아요.</span>
				<div>(저도 그게 귀찮아서 만듬)</div>
				<div class="how-to-use-title">이용방법</div>
				<ul class="how-to-use-item">
					<li>1. 랜덤으로 뽑을 참여자를 적는다 (참여자를 스페이스로 구분해주세요)</li>
					<span class="input-example"> 예시: 치킨 피자 라면 족발</span>
					<li>2. 랜덤시작 버튼을 클릭한다</li>
					<li>3. 결과는 참여자와 숫자로 1:1 매칭되어 나온다</li>
				</ul>
			</div>
			
		`;
  };
}
