import * as React from 'react';
import { mount } from 'enzyme';
import ListItemSelect from '../../src/ListItemSelect';
import { listItemSelectTestkitFactory } from '../../testkit';
import { listItemSelectTestkitFactory as listItemSelectEnzymeTestkitFactory } from '../../testkit/enzyme';

async function testkits() {
  const vanilla = listItemSelectTestkitFactory({
    dataHook: 'hi',
    wrapper: document.createElement('div'),
  });

  await vanilla.exists();

  const enzyme = listItemSelectEnzymeTestkitFactory({
    dataHook: 'hi',
    wrapper: mount(<div />),
  });
}

function ListItemSelectWithMandatoryProps() {
  return <ListItemSelect />;
}

function ListItemSelectWithAllProps() {
  return (
    <ListItemSelect
      className="some-class"
      checkbox
      dataHook="hi"
      disabled
      ellipsis
      onClick={event => {}}
      prefix=""
      selected
      size="small"
      subtitle=""
      suffix=""
      title=""
    />
  );
}
