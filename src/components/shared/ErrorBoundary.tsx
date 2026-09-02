import React, { Component, type ReactNode, type ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught component error in workspace:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="w-full max-w-2xl mx-auto my-8 p-8 bg-surface-card border border-accent-red/30 rounded-2xl shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-accent-red/10 border border-accent-red/20 flex items-center justify-center text-accent-red">
            <AlertTriangle className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-bold text-ink">
              {this.props.fallbackTitle || 'Workspace Encountered an Error'}
            </h3>
            <p className="text-xs text-mute max-w-md mx-auto">
              An unexpected error occurred during image processing. Your original file was not harmed.
            </p>
            {this.state.error?.message && (
              <pre className="p-3 bg-surface rounded border border-hairline text-[11px] font-mono text-accent-red/90 max-w-lg mx-auto overflow-x-auto text-left">
                {this.state.error.message}
              </pre>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={this.handleReset}
              className="px-4 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-black font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Workspace</span>
            </button>
            <a
              href="/"
              className="px-4 py-2.5 rounded-lg bg-surface-elevated hover:bg-surface border border-hairline text-body hover:text-ink font-medium text-xs transition-colors flex items-center gap-2"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
