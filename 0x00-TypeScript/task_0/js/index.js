export const drawTables = (data) => {
  const body = document.querySelector('body');
  const tables = [];
  addStyle();

  if (data instanceof Array) {
    data.forEach((item, index) => {
      tables.push(createTable('table', item));
    })
  }
  tables.forEach(table => body.appendChild(table));
}

function createTable(tableName, data) {
  const table = document.createElement(tableName);
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerNames = Object.keys(data);

  const ths = headerNames.map(name => `<th scope="col">${name}</th>`).join('');
  thead.innerHTML = ths;

  const tds = headerNames.map(key => `<td>${data[key]}</td>`).join('');
  tbody.innerHTML = tds;

  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}

function addStyle() {
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
