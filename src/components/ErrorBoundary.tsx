import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Oops, something went wrong.</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
            We're sorry, an unexpected error occurred.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{ 
              padding: '12px 24px', 
              background: 'var(--color-text-primary)', 
              color: 'var(--color-bg)', 
              border: 'none', 
              borderRadius: '24px', 
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
