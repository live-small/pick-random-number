export default function Result({ $container, initialState }) {
  const $resultContainer = document.createElement('article');
  $container.append($resultContainer);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    $resultContainer.innerHTML = `
			<h2 class="result-title">결과</h2>
			<table>
				<thead>
					<tr>
						<th>참여자</th>
						<th>랜덤번호</th>
					</tr>
				</thead>
				<tbody>
					${this.state
            .map(({ person, randomNumber }) => {
              return `
							<tr>
								<td>${person}</td>
								<td>${randomNumber}</td>
							</tr>
						`;
            })
            .join('')}
				</tbody>
			</table>
		`;
  };
}
