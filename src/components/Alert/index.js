import PropTypes from 'prop-types';
import React, {Component} from 'react';
import cx from 'classnames';

import s from './Alert.scss'

class Alert extends Component {
  componentDidMount() {
    setTimeout(()=>{
      this.props.handleDismissAlert();
    }, 5000);
  }
  render() {
    const { children, type, handleDismissAlert } = this.props;
    return (
        <div className={cx(s['alert'], s[type])}>
          <div className={s['alert-message']}>{children}</div>
          <div onClick={handleDismissAlert}><i className="fa fa-times" aria-hidden="true"></i></div>
        </div>
    );
  }

}

Alert.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  handleDismissAlert: PropTypes.func
};

export default Alert;
