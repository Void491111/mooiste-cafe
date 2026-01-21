export default function GhostButton({ children, onClick, className = "" }: any) {
    return (
        <button
            onClick={onClick}
            className={'px-5 py-2 bg-transparent border border-stone-300 hover:bg-stone-100 text-stone-700 font-medium rounded-full transition-all ${className}'}
        >
            {children}
        </button>
    );
}