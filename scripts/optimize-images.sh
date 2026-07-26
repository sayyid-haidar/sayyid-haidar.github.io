#!/bin/bash

# Image Optimization Script
# Converts images to WebP and AVIF formats for better performance

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Image Optimization Script${NC}"
echo "=========================="

# Check for required tools
if ! command -v cwebp &> /dev/null; then
    echo "cwebp not found. Install with: brew install webp"
    echo "Skipping WebP conversion..."
    WEBP_AVAILABLE=false
else
    WEBP_AVAILABLE=true
fi

if ! command -v avifenc &> /dev/null; then
    echo "avifenc not found. Install with: brew install libavif"
    echo "Skipping AVIF conversion..."
    AVIF_AVAILABLE=false
else
    AVIF_AVAILABLE=true
fi

# Source and destination directories
SOURCE_DIR="public/assets"
OUTPUT_DIR="public/assets/optimized"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Function to convert image
convert_image() {
    local input_file="$1"
    local filename=$(basename "$input_file")
    local name="${filename%.*}"
    
    echo "Processing: $filename"
    
    # WebP conversion (quality 85)
    if [ "$WEBP_AVAILABLE" = true ]; then
        cwebp -q 85 "$input_file" -o "$OUTPUT_DIR/${name}.webp" 2>/dev/null && \
            echo -e "  ${GREEN}✓${NC} WebP created" || \
            echo "  ✗ WebP failed"
    fi
    
    # AVIF conversion (quality 80)
    if [ "$AVIF_AVAILABLE" = true ]; then
        avifenc --min 0 --max 63 -a end-usage=q -a cq-level=28 -a tune=ssim \
            "$input_file" "$OUTPUT_DIR/${name}.avif" 2>/dev/null && \
            echo -e "  ${GREEN}✓${NC} AVIF created" || \
            echo "  ✗ AVIF failed"
    fi
}

# Find and convert images
find "$SOURCE_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) | while read -r file; do
    convert_image "$file"
done

echo ""
echo -e "${GREEN}Optimization complete!${NC}"
echo "Optimized images are in: $OUTPUT_DIR"
echo ""
echo "To use optimized images, update the relevant image paths in the app."
