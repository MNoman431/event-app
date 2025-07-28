// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error in lazy-loaded component:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center mt-20 text-red-500 font-bold">
          ⚠️ Something went wrong while loading the page.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
