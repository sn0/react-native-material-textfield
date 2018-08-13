import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    limit: PropTypes.number,
    lineLimit: PropTypes.number,
    label: PropTypes.string,

    fontSize: PropTypes.number,

    baseColor: PropTypes.string.isRequired,
    errorColor: PropTypes.string.isRequired,

    style: Text.propTypes.style,
  };

  render() {
    let { count, limit, lineLimit, label, baseColor, errorColor, fontSize, style } = this.props;

    if (lineLimit>0) limit=lineLimit;

    let textStyle = {
      color: count > limit? errorColor : baseColor,
      fontWeight: count >= limit ? 'bold' : 'normal',
    };

    if (!limit && !lineLimit) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text, style, textStyle]}>
          {count} / {limit} {label}
        </Text>
      </View>
    );
  }
}
