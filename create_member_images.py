#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

def create_member_image(name, role, filename):
    # Create a 300x300 image with black background
    img = Image.new('RGB', (300, 300), color='black')
    draw = ImageDraw.Draw(img)
    
    # Try to use a system font, fallback to default
    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 36)
        role_font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 16)
    except:
        title_font = ImageFont.load_default()
        role_font = ImageFont.load_default()
    
    # Draw high contrast portrait elements
    # Eyes
    draw.ellipse([100, 80, 120, 100], fill='white', outline='white', width=2)
    draw.ellipse([180, 80, 200, 100], fill='white', outline='white', width=2)
    draw.ellipse([105, 85, 115, 95], fill='black')
    draw.ellipse([185, 85, 195, 95], fill='black')
    
    # Eyebrows
    draw.rectangle([95, 70, 125, 75], fill='black')
    draw.rectangle([175, 70, 205, 75], fill='black')
    
    # Nose
    draw.line([150, 110, 150, 140], fill='white', width=2)
    
    # Mouth
    draw.arc([130, 150, 170, 170], 0, 180, fill='white', width=3)
    
    # Hair/head outline
    draw.arc([80, 60, 220, 200], 0, 180, fill='black', width=3)
    
    # Add dramatic shadows
    draw.rectangle([0, 0, 150, 300], fill='black')
    draw.rectangle([150, 0, 300, 300], fill='gray')
    
    # Add name and role
    bbox = draw.textbbox((0, 0), name, font=title_font)
    text_width = bbox[2] - bbox[0]
    text_x = (300 - text_width) // 2
    draw.text((text_x, 220), name, fill='#FFED00', font=title_font)
    
    bbox = draw.textbbox((0, 0), role, font=role_font)
    text_width = bbox[2] - bbox[0]
    text_x = (300 - text_width) // 2
    draw.text((text_x, 260), role, fill='#cccccc', font=role_font)
    
    # Save the image
    img.save(f'public/{filename}', 'PNG')
    print(f"Created {filename}")

# Create member images
create_member_image("ALEX", "VOCALS & GUITAR", "member-alex.jpg")
create_member_image("SARAH", "BASS & SYNTH", "member-sarah.jpg")
create_member_image("MAX", "DRUMS & PERCUSSION", "member-max.jpg")
create_member_image("LENA", "GUITAR & EFFECTS", "member-lena.jpg")

print("All member images created successfully!")
