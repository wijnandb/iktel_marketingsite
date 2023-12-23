import os

def generate_image_list(directory_path):
    image_names = []

    # Iterate through the files in the directory
    for filename in os.listdir(directory_path):
        if filename.endswith(".png"):
            # Check if the corresponding .webp file exists
            webp_filename = filename.replace(".png", ".webp")
            if webp_filename in os.listdir(directory_path):
                # Add the name without extension to the list
                image_names.append(filename.rsplit('.', 1)[0])

    # Generate the script content
    script_content = "<script>\n    var images = [\n"
    for name in image_names:
        script_content += f"        '{name}',\n"
    script_content = script_content.rstrip(',\n') + '\n    ];\n</script>'

    return script_content

# Set the path to your images directory
directory_path = "/home/wijnandb/sites/jekyll/bredeschool_software/images/illustrations"
print(generate_image_list(directory_path))
