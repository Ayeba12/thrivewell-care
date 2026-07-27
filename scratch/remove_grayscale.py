import os

scan_dirs = ['app', 'components']
root_path = 'c:/Users/Ayeba/Local Sites/thrivewell-care/frontend'

replacements = [
    (' grayscale group-hover:grayscale-0', ''),
    (' group-hover:grayscale-0', ''),
    (' hover:grayscale-0 transition-all duration-500', ''),
    (' transition-all duration-300 grayscale hover:grayscale-0', ''),
    (' grayscale hover:grayscale-0', ''),
    (' grayscale contrast-115', ''),
    (' grayscale contrast-110', ''),
    (' grayscale', ''),
    ('hover:grayscale-0', ''),
]

modified_files = 0

for scan_dir in scan_dirs:
    dir_path = os.path.join(root_path, scan_dir)
    for root, _, files in os.walk(dir_path):
        for file in files:
            if not file.endswith('.tsx'):
                continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for search, replace in replacements:
                new_content = new_content.replace(search, replace)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Removed grayscale from: {file}")
                modified_files += 1

print(f"\nCompleted: Modified {modified_files} files.")
