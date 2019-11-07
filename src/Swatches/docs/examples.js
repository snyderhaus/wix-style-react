export const simple = `<Box width="204px"> <Swatches colors={['red', '#fff', 'magenta']}/></Box>`;

export const nocolor = `<Box width="204px"><Swatches showClear/></Box>`;

export const columns = `<Box width="204px"><Swatches colors={['#000', '#fff', 'magenta', 'turquoise', 'beige', 'yellow', '#f9f9f9']} columns={4} gap={10}/></Box>`;

export const add = `<Box width="204px"><Swatches  showAddButton addButtonMessage="New Color"/></Box>`;

export const full = `
class SwatchesExamples extends React.Component {
  state = {
    selected: null,
    colors: ['red', 'cyan', '#f9f9f9'],
  }

  selectColor = (color) => {
    this.setState({ selected: color })
  }

  addColor = (color) => {
    const { colors } = this.state
    this.setState({colors: [...colors, color]})
  }

  render() {
    const { selected, colors } = this.state;
    return (
      <Box width="204px">
      <Swatches
        showClear
        showAddButton
        showClearMessage="Clear Color"
        addButtonMessage="New Color"
        onAdd={this.addColor}
        selected={selected}
        onClick={this.selectColor}
        onChange={color => {
          console.log('Color changed', color);
        }}
        onCancel={() => {
          console.log('Cancel picking color');
        }}
        colors={colors}
      />
      </Box>
    );
  }
}`;
