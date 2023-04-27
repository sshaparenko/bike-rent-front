import React from "react";

function BikeListLoading(Component) {
  return function BikeListLoadingComponent({ isLoading, ...props}) {
    if (!isLoading) return <Component {...props}/>;
    return (
      <div style={{textAlign: 'center', minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <p style={{ fontSize: '25px' }}>
          We are waiting for the data to load!...
        </p>
      </div>
    );
  }
}

export default BikeListLoading;