import Image from "next/image"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8", 
    lg: "h-12 w-12"
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/android-chrome-512x512.png"
        alt="Aukier Logo"
        width={size === "sm" ? 24 : size === "md" ? 32 : 48}
        height={size === "sm" ? 24 : size === "md" ? 32 : 48}
        className={`${sizeClasses[size]} rounded-lg`}
        priority
      />
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]}`}>
          Aukier
        </span>
      )}
    </div>
  )
}

