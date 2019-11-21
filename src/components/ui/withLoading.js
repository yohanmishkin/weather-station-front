/* eslint-disable react/prop-types */
import React from 'react';

export default function withLoading(WrappedComponent, spinnerTestId) {
  return props => {
    if (props.isLoading) {
      return <span data-testid={spinnerTestId}>Loading!</span>;
    }

    return <WrappedComponent person={props.person} />;
  };
}
