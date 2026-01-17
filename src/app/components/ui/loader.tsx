import { Loader2 } from 'lucide-react';

interface LoaderProps {
    variant?: 'default' | 'inline';
    className?: string;
}

export function Loader({ variant = 'default', className = '' }: LoaderProps) {
    if (variant === 'inline') {
        return (
            <Loader2
                className={`animate-spin text-white ${className}`}
                size={20}
            />
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="relative flex flex-col items-center gap-4">
                <div className="relative">
                    {/* Gradient spinning ring */}
                    <div className="w-16 h-16 rounded-full border-4 border-t-blue-600 border-r-purple-600 border-b-pink-600 border-l-transparent animate-spin" />

                    {/* Inner pulsing circle for depth */}
                    <div className="absolute inset-0 m-auto w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-pulse flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-50" />
                    </div>
                </div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
