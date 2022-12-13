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
			<table>
				<thead>
					<tr>참여자</tr>
					<tr>랜덤 번호</tr>
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
