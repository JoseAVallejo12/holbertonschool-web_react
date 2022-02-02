export function createTable(data: Object): HTMLTableElement {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const keysValues = Object.entries(data);

  const ths = keysValues
    .map((item) => `<th scope="col">${capitalize(item[0])}</th>`)
    .join('');
  thead.innerHTML = ths;

  const tds = keysValues.map((item) => `<td>${item[1]}</td>`).join('');
  tbody.innerHTML = tds;

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

function capitalize(header: string): string {
  return header.charAt(0).toUpperCase() + header.slice(1);
}

export function addStyles() {
  const css = `
    body {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    table {
      border-collapse: collapse;
      width: fit-content;
      margin: 10px;
      display: block;
    }
    table, th, td {
      border: 1px solid black;
      padding: 5px;
    }
  `;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}
