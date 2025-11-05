import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  onClick,
  disabled = false,
  className = ''
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center gap-3 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 rounded-lg';
  
  const variantClasses = {
    primary: 'bg-slate-600 hover:bg-slate-700 text-white focus:ring-slate-300',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800 focus:ring-slate-200',
    outline: 'border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white focus:ring-slate-300'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;