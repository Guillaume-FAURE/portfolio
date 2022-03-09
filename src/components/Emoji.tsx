type AppProps = {
    className: string;
    label: string;
    symbol: string;
  };

export function Emoji ({className,label,symbol}: AppProps){
    return (
    <span
        className={className}
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
    )
}