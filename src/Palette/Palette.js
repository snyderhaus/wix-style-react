import React from 'react';
import { array, string } from 'prop-types';
import FillPreview from '../FillPreview/FillPreview';
import styles from './Palette.st.css';

/** A component to show a palette of colors */
class Palette extends React.PureComponent {
  static displayName = 'Palette';

  static propTypes = {
    /** hook for testing purposes */
    dataHook: string,
    /** Fill list for items in palette */
    fill: array,
  };

  static defaultProps = {
    fill: [],
  };

  render() {
    const { fill, dataHook, ...rest } = this.props;

    return (
      <div {...styles('root', {}, rest)} data-hook={dataHook}>
        {fill.map((item, i) => (
          <FillPreview
            as="div"
            key={i}
            tabIndex={-1}
            className={styles.fillPreview}
            aspectRatio="none"
            fill={item}
          />
        ))}
      </div>
    );
  }
}

export default Palette;
