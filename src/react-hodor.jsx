import React from 'react';
import PropTypes from 'prop-types';

export default class Hodor extends React.Component {
  static hodorDistribution() {
    const mean = 3;
    const L = Math.exp(-mean);
    let p = 1.0;
    let k = 0;
    do {
      k++;
      p *= Math.random();
    } while (p > L);
    return k - 1;
  }

  static walkTheDihodor(hodor) {
    return hodor.replace(/\b./g, m => m.toUpperCase());
  }

  static makeItHodor(speak) {
    const hodors = speak.split(' ');
    let needWalk = true;
    let returnHodors = '';
    for (let i = 0; i < hodors.length - 1; i++) {
      const hodorNum = Hodor.hodorDistribution();
      const currentHodor = needWalk ? Hodor.walkTheDihodor(hodors[i]) : hodors[i];
      needWalk = false;
      if (hodorNum <= 1) {
        returnHodors += `${currentHodor}. `;
        needWalk = true;
      } else if (hodorNum <= 3) {
        returnHodors += `${currentHodor}, `;
      } else if (hodorNum >= 5) {
        returnHodors += `${currentHodor.toUpperCase()}!!! `;
        needWalk = true;
      } else {
        returnHodors += `${currentHodor} `;
      }
    }
    return returnHodors;
  }

  constructor(props) {
    super(props);

    this.state = {
      hodor: Hodor.sayHodor(props.hodorhodor, props.hodor === 'hodor'),
    };
  }

  static sayHodor(repeatNumber, hodorSpeak) {
    let hodors = '';
    for (let i = 0; i < repeatNumber; i++) {
      hodors += 'hodor ';
    }
    if (hodorSpeak) {
      hodors = Hodor.makeItHodor(hodors);
    }

    return hodors;
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>{this.state.hodor || ''}</div>
    );
  }
}

Hodor.propTypes = {
  className: PropTypes.string,
  hodor: PropTypes.string,
  hodorhodor: PropTypes.number,
};

Hodor.defaultProps = {
  className: 'hodor',
  hodor: undefined,
  hodorhodor: 1,
};
