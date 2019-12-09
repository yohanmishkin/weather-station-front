/* eslint-disable react/prop-types */
import React from 'react';

export default function withLoading(WrappedComponent, spinnerTestId) {
  return props => {
    const { isLoading, ...passThrough } = props;

    if (isLoading) {
      return (
        <span
          data-testid={spinnerTestId}
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        >
          loading
        </span>
      );
    }

    return <WrappedComponent {...passThrough} />;
  };
}
