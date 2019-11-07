/* eslint-disable */

class TableToolbarExample extends React.Component {
  data = [
    { firstName: 'Meghan', lastName: 'Bishop', status: 'Single' },
    { firstName: 'Sara', lastName: 'Porter', status: 'Married' },
    { firstName: 'Deborah', lastName: 'Rhodes', status: "It's complicated" },
    { firstName: 'Walter', lastName: 'Jenning', status: 'Married' },
  ];

  filterOptions = [
    { id: '', value: 'All Statuses' },
    { id: 'Single', value: 'Single' },
    { id: 'Married', value: 'Married' },
    { id: "It's complicated", value: "It's complicated" },
  ];

  state = {
    activeFilter: '',
    activeSearch: '',
  };

  _getFilteredData = () => {
    const { activeFilter, activeSearch } = this.state;
    return this.data.filter(({ firstName, lastName, status }) => {
      if (activeFilter && status !== activeFilter) {
        return false;
      }

      const searchData = [firstName, lastName, status].join(' ').toLowerCase();
      const searchQuery = activeSearch.trim().toLowerCase();
      if (searchQuery && searchData.indexOf(searchQuery) === -1) {
        return false;
      }

      return true;
    });
  }

  render() {
    const data = this._getFilteredData();
    return (
      <Card>
        <Table
          data={data}
          columns={[
            { title: 'First', render: row => row.firstName },
            { title: 'Last', render: row => row.lastName },
            { title: 'Status', render: row => row.status },
          ]}
          showSelection
        >
          <Table.ToolbarContainer>
            {selectionContext =>
              selectionContext.selectedCount === 0
                ? this._renderMainToolbar()
                : this._renderActionsToolbar({ ...selectionContext })
            }
          </Table.ToolbarContainer>
          <Table.Content />
          {!data.length && (
            <Table.EmptyState
              subtitle={
                <Text>
                  {'There are no search results matching '}
                  <Text weight="normal">{`"${this.state.activeSearch}"`}</Text>
                </Text>
              }
            />
          )}
        </Table>
      </Card>
    );
  }

  _renderMainToolbar = () => {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.Title>My Table</TableToolbar.Title>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item>
            <TableToolbar.Label>
              Filter by
              <div style={{ width: 175 }}>
                <Dropdown
                  options={this.filterOptions}
                  selectedId={this.state.activeFilter}
                  roundInput
                  onSelect={({ id }) => this.setState({ activeFilter: id })}
                  popoverProps={{ appendTo: 'window' }}
                />
              </div>
            </TableToolbar.Label>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <div style={{ width: 200 }}>
              <Search
                value={this.state.activeSearch}
                onChange={e => this.setState({ activeSearch: e.target.value })}
              />
            </div>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };

  _renderActionsToolbar = ({ selectedCount, getSelectedIds }) => (
    <TableToolbar>
      <TableToolbar.ItemGroup position="start">
        <TableToolbar.Item>
          <TableToolbar.SelectedCount>{`${selectedCount} Selected`}</TableToolbar.SelectedCount>
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
      <TableToolbar.ItemGroup position="end">
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Upload />}
            onClick={() => window.alert(`Exporting selectedIds=${getSelectedIds()}`)}
          >
            Export
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Duplicate />}
            onClick={() => window.alert(`Duplicating selectedIds=${getSelectedIds()}`)}
          >
            Duplicate
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Item layout="button">
          <Button
            skin="light"
            prefixIcon={<Icons.Edit />}
            onClick={() => window.alert(`Editing selectedIds=${props.getSelectedIds()}`)}
          >
            Edit
          </Button>
        </TableToolbar.Item>
        <TableToolbar.Divider />
        <TableToolbar.Item>
          <Search
            expandable
            value={this.state.activeSearch}
            onChange={e => this.setState({ activeSearch: e.target.value })}
          />
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  );
}
