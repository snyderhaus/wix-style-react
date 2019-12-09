import React from 'react';
import MessageBoxMarketerialLayout from './MessageBoxMarketerialLayout';
import Button from '../../Button';
import MessageBoxMarketerialLayoutPrivateDriverFactory from './MessageBoxMarketerialLayout.private.driver';
import { messageBoxMarketerialLayoutPrivateUniDriverFactory } from './MessageBoxMarketerialLayout.private.uni.driver';
import sinon from 'sinon';
import {
  isTestkitExists,
  isEnzymeTestkitExists,
} from '../../../test/utils/testkit-sanity';
import { messageBoxMarketerialLayoutTestkitFactory } from '../../../testkit';
import { messageBoxMarketerialLayoutTestkitFactory as enzymeMessageBoxTestkitFactory } from '../../../testkit/enzyme';
import { mount } from 'enzyme';

import { createRendererWithDriver, cleanup } from '../../../test/utils/react';
import { createRendererWithUniDriver } from '../../../test/utils/unit';
import styles from '../../Button/Button.st.css';

describe('MessageBoxMarketerialLayout', () => {
  describe('[sync]', () => {
    runTests(
      createRendererWithDriver(MessageBoxMarketerialLayoutPrivateDriverFactory),
    );
  });

  describe('[async]', () => {
    runTests(
      createRendererWithUniDriver(
        messageBoxMarketerialLayoutPrivateUniDriverFactory,
      ),
    );
  });

  function runTests(render) {
    afterEach(() => cleanup());
    const createDriver = jsx => render(jsx).driver;
    const requiredProps = {
      title: 'title',
      content: <div />,
      onClose: () => {},
    };

    describe('action buttons', () => {
      it('should display the primary button label text on top the primary button', async () => {
        const props = Object.assign({}, requiredProps, {
          primaryButtonLabel: 'primaryButtonLabel',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getPrimaryButtonText()).toBe(
          props.primaryButtonLabel,
        );
      });

      it('should display the primary button with custom theme', async () => {
        const props = Object.assign({}, requiredProps, {
          primaryButtonLabel: 'primaryButtonLabel',
          primaryButtonTheme: 'purple',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(
          await driver.isClassPresentInPrimaryButton('fullpurple'),
        ).toBeTruthy();
      });

      it('should not display the primary button if primary button label was not passed', async () => {
        const props = Object.assign({}, requiredProps, {});
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getPrimaryButton()).toBeNull();
      });

      it('should display primary button node if passed', async () => {
        const props = Object.assign(
          {},
          requiredProps,
          {
            primaryButtonNode: <Button>Hi</Button>,
          },
          {},
        );
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getPrimaryButtonNode()).toBeTruthy();
      });

      it('should not display the primary button if primary button node was passed', async () => {
        const props = Object.assign(
          {},
          requiredProps,
          {
            primaryButtonNode: <Button>Hi</Button>,
          },
          {},
        );
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getPrimaryButton()).toBeNull();
      });

      it('should display disabled primary button if primaryButtonDisabled is true', async () => {
        const props = Object.assign({}, requiredProps, {
          primaryButtonLabel: 'primaryButtonLabel',
          primaryButtonDisabled: true,
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.isPrimaryButtonDisabled()).toBeTruthy();
      });

      it('should display enabled primary button if primaryButtonDisabled is false', async () => {
        const props = Object.assign({}, requiredProps, {
          primaryButtonLabel: 'primaryButtonLabel',
          primaryButtonDisabled: false,
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.isPrimaryButtonDisabled()).toBeFalsy();
      });

      it('should display the secondary button label text on top the secondary button', async () => {
        const props = Object.assign({}, requiredProps, {
          secondaryButtonLabel: 'secondaryButtonLabel',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getSecondaryButtonText()).toBe(
          props.secondaryButtonLabel,
        );
      });

      it('should not display the secondary button if secondary button label was not passed', async () => {
        const props = Object.assign({}, requiredProps, {});
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getSecondaryButton()).toBeNull();
      });

      it(`should trigger the primary button action upon clicking the primary button`, async () => {
        const props = Object.assign({}, requiredProps, {
          onPrimaryButtonClick: sinon.spy(),
          primaryButtonLabel: 'primaryButtonLabel',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        await driver.clickOnPrimaryButton();
        expect(props.onPrimaryButtonClick.calledOnce).toBeTruthy();
      });

      it(`should trigger the secondary button action upon clicking the secondary button`, async () => {
        const props = Object.assign({}, requiredProps, {
          onSecondaryButtonClick: sinon.spy(),
          secondaryButtonLabel: 'secondaryButtonLabel',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        await driver.clickOnSecondaryButton();
        expect(props.onSecondaryButtonClick.calledOnce).toBeTruthy();
      });

      it(`should close the message dialog upon clicking the close button`, async () => {
        const props = Object.assign({}, requiredProps, {
          onClose: sinon.spy(),
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        await driver.closeMessageBox();
        expect(props.onClose.calledOnce).toBeTruthy();
      });

      it(`should theme the close button as dark when general theme is white`, async () => {
        const props = Object.assign({}, requiredProps, {
          theme: 'white',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);

        expect(
          await driver.isClassPresentInHeaderCloseButton(styles.dark),
        ).toBeTruthy();
      });
    });

    describe('general', () => {
      it(`should render title`, async () => {
        const props = Object.assign({}, requiredProps, {
          title: 'title',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getTitle()).toBe(props.title);
      });

      it(`should render the passed content in the markup`, async () => {
        const props = Object.assign({}, requiredProps, {
          content: <div data-hook="inner-div" />,
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(
          await driver.getContentBySelector('[data-hook="inner-div"]'),
        ).not.toBeNull();
      });

      it(`should render image from given imageUrl`, async () => {
        const props = Object.assign({}, requiredProps, {
          imageUrl:
            'http://www.domstechblog.com/wp-content/uploads/2015/09/wix.png',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(await driver.getImageSrc()).toBe(props.imageUrl);
      });

      it(`should render image from given component`, async () => {
        const props = Object.assign({}, requiredProps, {
          imageComponent: <div data-hook="image-component-test" />,
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(
          await driver.getContentBySelector(
            '[data-hook="image-component-test"]',
          ),
        ).not.toBeNull();
      });

      it(`should use default color theme (blue) if none was passed`, async () => {
        const props = Object.assign({}, requiredProps, {
          primaryButtonLabel: 'primaryButtonLabel',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(
          await driver.isClassPresentInPrimaryButton('fullblue'),
        ).toBeTruthy();
      });

      it(`should use color theme`, async () => {
        const props = Object.assign({}, requiredProps, {
          primaryButtonLabel: 'primaryButtonLabel',
          theme: 'purple',
        });
        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);
        expect(
          await driver.isClassPresentInPrimaryButton('fullpurple'),
        ).toBeTruthy();
      });
    });

    describe('footer children', () => {
      it(`should render the passed footer content`, async () => {
        const props = Object.assign({}, requiredProps, {
          footerBottomChildren: <div data-hook="inner-div" />,
        });

        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);

        expect(
          await driver.getContentBySelector('[data-hook="inner-div"]'),
        ).not.toBeNull();
        expect(
          await driver.getContentBySelector(
            '[data-hook="footer-layout-bottom-children"]',
          ),
        ).not.toBeNull();
      });

      it(`should not render secondary button when footer content passed`, async () => {
        const props = Object.assign({}, requiredProps, {
          footerBottomChildren: <div data-hook="inner-div" />,
        });

        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);

        expect(await driver.getSecondaryButton()).toBeNull();
      });

      it(`should not render footer's wrapper div when footer content isn't passed`, async () => {
        const props = Object.assign({}, requiredProps, {});

        const driver = createDriver(<MessageBoxMarketerialLayout {...props} />);

        expect(
          await driver.getContentBySelector(
            '[data-hook="footer-layout-bottom-children"]',
          ),
        ).toBeNull();
      });
    });

    describe('testkit', () => {
      it('should exist', () => {
        expect(
          isTestkitExists(
            <MessageBoxMarketerialLayout {...requiredProps} />,
            messageBoxMarketerialLayoutTestkitFactory,
          ),
        ).toBe(true);
      });
    });

    describe('enzyme testkit', () => {
      it('should exist', () => {
        expect(
          isEnzymeTestkitExists(
            <MessageBoxMarketerialLayout {...requiredProps} />,
            enzymeMessageBoxTestkitFactory,
            mount,
          ),
        ).toBe(true);
      });
    });
  }
});
