import os
from PIL import Image

def convert_webp_to_png(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".webp"):
            file_path = os.path.join(directory, filename)
            image = Image.open(file_path)
            png_path = file_path.rsplit('.', 1)[0] + '.png'
            image.save(png_path, 'PNG')
            print(f"Converted {filename} to PNG")

# Replace 'your_directory_path' with the path to the directory containing your webp files
convert_webp_to_png('/home/wijnandb/sites/jekyll/bredeschool_software/images/illustrations')
