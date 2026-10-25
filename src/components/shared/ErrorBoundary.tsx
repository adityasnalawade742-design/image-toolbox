import { Component, type ReactNode, type ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  /** Translated copy; English defaults keep the boundary usable on its own */
  fallbackBody?: string;
  reloadLabel?: string;
  homeLabel?: string;
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
    if (!this.state.hasError) return this.props.children;

    const {
      fallbackTitle = 'This tool hit a problem',
      fallbackBody = 'Something went wrong while processing. Your original file is unchanged. Reload the page to try again.',
      reloadLabel = 'Reload',
      homeLabel = 'All tools',
    } = this.props;

    return (
      <div role="alert" className="max-w-2xl border border-ink bg-paper-bright">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-ink bg-accent-red-soft text-accent-red">
          <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <h2 className="text-[17px] font-semibold">{fallbackTitle}</h2>
        </div>
        <div className="p-4 space-y-4">
          <p className="text-[15px] text-body leading-relaxed">{fallbackBody}</p>
          {this.state.error?.message && (
            <pre className="p-3 bg-paper border border-pencil text-[13px] font-code text-accent-red overflow-x-auto">{this.state.error.message}</pre>
          )}
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={this.handleReset} className="btn-rule">
              <RefreshCw className="w-4 h-4" aria-hidden="true" />
              {reloadLabel}
            </button>
            <a href="/" className="btn-rule">
              <Home className="w-4 h-4" aria-hidden="true" />
              {homeLabel}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
