const tableDriverFactory = async (component, page) => {
  const tableContent = await component.$('[data-hook="table-content"]');

  return {
    element: () => component,
    exists: async () => !!(await component),
    getCellTextValue: async (row = 0, column = 0) => {
      const cell = await tableContent.$(
        `[data-table-row]:nth-child(${row + 1}) td:nth-child(${column + 1})`,
      );
      return await page.evaluate(_cell => _cell.innerText, cell);
    },
    getRowsCount: async () =>
      (await tableContent.$$('[data-table-row="dataTableRow"]')).length,
  };
};

export default tableDriverFactory;
