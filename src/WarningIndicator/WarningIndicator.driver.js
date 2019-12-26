import { tooltipTestkitFactory } from 'wix-ui-core/dist/src/testkit';

export const warningIndicatorDriverFactory = ({ element }) => {
  const tooltipTestkit = tooltipTestkitFactory({
    wrapper: element,
  });
  return {
    exists: () => !!element,
    isShown: () => tooltipTestkit.isContentElementExists(),
    mouseEnter: () => tooltipTestkit.mouseEnter(),
    getWarningMessage: () => tooltipTestkit.getContentElement().textContent,
  };
};
