
type NumberButtonProps = {
    spanClassName?: string;
    buttonClassName?: string;
    buttonValue: string;
}

export function NumberButton(props: NumberButtonProps) {
    return (
        <div className={'flex justify-center items-center w-16 h-16 rounded-full shadow-inner shadow-slate-600 bg-opacity-50 ' + props.buttonClassName ?? 'bg-gray-800'}>
            <span className={'uppercase -tracking-wide ' + props.spanClassName ?? ''}>
                {props.buttonValue}
            </span>
        </div>
    )
}