import { X } from 'lucide-react';
import { useEffect } from 'react';

const Dialog = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] glass-effect-dark rounded-2xl overflow-hidden animate-[scaleIn_0.3s_ease-out] shadow-2xl shadow-blue-500/20">
        {/* Header */}
        {title && (
          <div className="sticky top-0 z-10 glass-effect-dark border-b border-white/10 px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 smooth-transition group"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6 text-white/70 group-hover:text-white smooth-transition" />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dialog;
