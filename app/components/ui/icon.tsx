import * as LucideIcons from "lucide-react";
import React, { memo } from "react";
import { cn } from "~/lib/utils";

type IconProps = {
	name: keyof typeof LucideIcons;
	size?: number | string;
	className?: string;
	strokeWidth?: number;
	color?: string;
	style?: React.CSSProperties;
};

export function Icon({ name, size, className, strokeWidth, color }: IconProps) {
	const LucideIcon = LucideIcons[name] as React.ElementType;
	if (!LucideIcon) return null;
	return (
		<LucideIcon
			size={size}
			strokeWidth={strokeWidth}
			color={color}
			className={cn("inline-block align-middle", className)}
		/>
	);
}

interface TeamLogoProps {
	teamName: string;
	size?: "sm" | "md" | "lg";
	className?: string;
}

export const TeamLogo = memo(({ teamName, size = "md", className = "" }: TeamLogoProps) => {
	const sizeStyles = {
		sm: "w-6 h-6",
		md: "w-8 h-8",
		lg: "w-12 h-12",
	};

	return (
		<div
			className={`${sizeStyles[size]} bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-md ${className}`}>
			<span className="text-white font-bold text-xs">{teamName.charAt(0)}</span>
		</div>
	);
});
