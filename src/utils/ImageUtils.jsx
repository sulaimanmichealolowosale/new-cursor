import React from 'react'

// Placeholder image URLs (using high-quality royalty-free images)
export const placeholderImages = {
    hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    radioAdvertising: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=400&fit=crop',
    billboardAdvertising: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=500&h=400&fit=crop',
    socialMediaAdvertising: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=400&fit=crop',
    brandDesign: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop',
    process1: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    process2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    process3: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    process4: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
}

export function ResponsiveImage({
    src,
    alt,
    className = '',
    loading = 'lazy',
    ...props
}) {
    return (
        <img
            src={src}
            alt={alt}
            loading={loading}
            className={`w-full h-full object-cover ${className}`}
            {...props}
        />
    )
}

export function ImagePlaceholder({
    src = placeholderImages.hero,
    alt = 'Placeholder image',
    width = 'full',
    height = 'auto',
    rounded = 'lg',
    shadow = true,
    className = '',
}) {
    return (
        <div
            className={`w-${width} h-${height} overflow-hidden ${rounded ? `rounded-${rounded}` : ''
                } ${shadow ? 'shadow-elevated' : ''} ${className}`}
        >
            <ResponsiveImage
                src={src}
                alt={alt}
            />
        </div>
    )
}

export default ResponsiveImage
