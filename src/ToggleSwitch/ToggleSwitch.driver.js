import { toggleSwitchDriverFactory as coreToggleSwitchDriverFactory } from 'wix-ui-core/drivers/vanilla';
import { StylableDOMUtil } from '@stylable/dom-test-kit';
import style from './ToggleSwitch.st.css';

const toggleSwitchDriverFactory = ({ element, eventTrigger }) => {
  const coreToggleSwitchDriver = coreToggleSwitchDriverFactory({
    element,
    eventTrigger,
  });
  const stylableDOMUtil = new StylableDOMUtil(style, element);

  return {
    ...coreToggleSwitchDriver,
    /** Get Toggle Switch size */
    getSize: () => stylableDOMUtil.getStyleState(element, 'size'),

    /** Get Toggle Switch skin */
    getSkin: () => stylableDOMUtil.getStyleState(element, 'skin'),
  };
};

export default toggleSwitchDriverFactory;
