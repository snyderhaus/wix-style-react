export const simple = `
<AutoCompleteWithLabel label="my label" options={[
  { id: 0, value: 'First option' },
  { id: 1, value: 'Second option' },
  { id: 2, value: 'Third option' },
  { id: 3, value: 'Fourth option' },
  { id: 4, value: 'Fifth option' },
]}
/>
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
