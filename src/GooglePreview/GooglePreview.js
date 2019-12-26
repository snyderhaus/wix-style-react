import React from 'react';
import PropTypes from 'prop-types';
import style from './GooglePreview.st.css';

import Text from '../Text';

/**
 *  A preview of a title, link and description of SEO result as it displayed in Google
 */
class GooglePreview extends React.PureComponent {
  static displayName = 'GooglePreview';

  static propTypes = {
    dataHook: PropTypes.string,

    /** A site title */
    title: PropTypes.string,
    /** A link for the site */
    previewUrl: PropTypes.string,
    /** A short description for the site */
    description: PropTypes.string,
  };

  render() {
    return (
      <div {...style('root', {}, this.props)} data-hook={this.props.dataHook}>
        <Text
          className={style.googlePreviewTitle}
          dataHook={'googlePreview-title'}
          weight="bold"
          size="medium"
          secondary={false}
          light={false}
          ellipsis
        >
          {this.props.title}
        </Text>
        <Text
          weight="thin"
          size="tiny"
          light={false}
          className={style.googlePreviewUrl}
          data-hook={'googlePreview-previewUrl'}
          ellipsis
        >
          {this.props.previewUrl}
        </Text>
        <div className={style.googlePreviewDescriptionContainer}>
          <Text
            className={style.googlePreviewDescription}
            weight="thin"
            size="tiny"
            light={false}
            dataHook="googlePreview-description"
          >
            {this.props.description}
          </Text>
        </div>
      </div>
    );
  }
}

export default GooglePreview;
