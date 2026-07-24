import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'teal' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-[#0C364A] hover:bg-[#124B66] text-white focus:ring-[#0C364A] shadow-md hover:shadow-lg',
    accent: 'bg-[#8EC63F] hover:bg-[#A2D852] text-[#072331] font-bold focus:ring-[#8EC63F] shadow-md hover:shadow-lg',
    teal: 'bg-[#20AD96] hover:bg-[#39C9B1] text-white font-bold focus:ring-[#20AD96] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#0C364A] text-[#0C364A] hover:bg-[#0C364A] hover:text-white focus:ring-[#0C364A]',
    ghost: 'text-[#0C364A] hover:bg-[#F4F8F9] focus:ring-[#0C364A]',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-600 shadow-md'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
