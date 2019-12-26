export const simple = `
<AutoCompleteWithLabel 
  label="my label" 
  options={[
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fourth option' },
    { id: 4, value: 'Fifth option' },
  ]}
  onSelect={() => {}}
  onChange={() => {}}
  />
`;

export const native = `
class ControlledAutoComplete extends React.Component {
  state = { value: '' }

  onSelect = (option) => {
    this.setState({ value: option.value });
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <AutoCompleteWithLabel
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fifth option' },
          { id: 4, value: 'Fourth option' },
        ]}
        value={value}
        onChange={this.onChange}
        onSelect={this.onSelect}
        native
        label="my autocomplete"
      />
    );
  }
}
`;

export const controlled = `
class ControlledAutoCompleteWithLabel extends React.Component {
  state = { value: 'First option' }

  onSelect = (option) => {
    this.setState({ value: option.value });
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <AutoCompleteWithLabel
        options={[
          { id: 0, value: 'First option' },
          { id: 1, value: 'Second option' },
          { id: 2, value: 'Third option' },
          { id: 3, value: 'Fourth option' },
          { id: 4, value: 'Fifth option' },
        ]}
        value={value}
        label="my label"
        onChange={this.onChange}
        onSelect={this.onSelect}
      />
    );
  }
}
`;

export const states = `
<Layout cols={2}>
  <AutoCompleteWithLabel label="my label" options={[
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fourth option' },
    { id: 4, value: 'Fifth option' },
  ]}
  disabled
  />
  <AutoCompleteWithLabel label="my label" options={[
    { id: 0, value: 'First option' },
    { id: 1, value: 'Second option' },
    { id: 2, value: 'Third option' },
    { id: 3, value: 'Fourth option' },
    { id: 4, value: 'Fifth option' },
  ]}
  status="error"
  statusMessage="This field is required"
  />
</Layout>
`;
