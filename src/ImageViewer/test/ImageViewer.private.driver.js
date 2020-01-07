import { dataHooks } from '../constants';

const imageViewerPrivateDriver = ({ element, eventTrigger }) => {
  const byHook = dataHook => element.querySelector(`[data-hook="${dataHook}"]`);

  return {
    simulateImageLoad: () => {
      const imageElement = byHook(dataHooks.image);
      eventTrigger.load(imageElement);
    },
  };
};

export default imageViewerPrivateDriver;
