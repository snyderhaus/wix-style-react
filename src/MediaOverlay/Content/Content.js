import PropTypes from 'prop-types';
import { Placement, Visible } from '../constants';

const Content = () => undefined;

Content.displayName = 'MediaOverlay.Content';

Content.propTypes = {
  /** When to display this content */
  visible: PropTypes.oneOf(Object.values(Visible)),
  /** The area to display this content in */
  placement: PropTypes.oneOf(Object.values(Placement)),
};

Content.defaultProps = {
  visible: Visible.Default,
  placement: Placement.Middle,
};

export default Content;
