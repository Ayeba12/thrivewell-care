import os
import re

# File path to scan
scan_dirs = ['app', 'components']
root_path = 'c:/Users/Ayeba/Local Sites/thrivewell-care/frontend'

replacements = [
    # 1. Hover/Active/Group classes (order is important - longer strings first)
    (r'hover:bg-\[\#111111\]', 'hover:bg-surface-base'),
    (r'hover:bg-\[\#F3F3F0\]', 'hover:bg-surface-muted'),
    (r'active:\!bg-\[\#F3F3F0\]', 'active:!bg-surface-muted'),
    (r'active:\!text-\[\#111111\]', 'active:!text-text-primary'),
    (r'active:border-\[\#111111\]', 'active:border-border-default'),
    (r'hover:text-\[\#111111\]', 'hover:text-text-primary'),
    (r'hover:text-\[\#F3F3F0\]', 'hover:text-text-secondary'),
    (r'hover:border-\[\#111111\]', 'hover:border-border-default'),
    (r'hover:border-\[\#F3F3F0\]/40', 'hover:border-border-muted'),
    (r'hover:border-\[\#F3F3F0\]', 'hover:border-border-muted'),
    (r'group-hover:border-\[\#F3F3F0\]', 'group-hover:border-border-muted'),

    # 2. Text opacity classes (must run before general text color replacement)
    (r'text-\[\#111111\]/40', 'text-text-tertiary/40'),
    (r'text-\[\#111111\]/50', 'text-text-tertiary/50'),
    (r'text-\[\#111111\]/60', 'text-text-tertiary/60'),
    (r'text-\[\#111111\]/70', 'text-text-tertiary'),
    (r'text-\[\#111111\]/75', 'text-text-tertiary'),
    (r'text-\[\#111111\]/80', 'text-text-tertiary'),
    (r'text-\[\#111111\]/85', 'text-text-tertiary'),
    (r'text-\[\#111111\]/90', 'text-text-primary'),
    
    (r'text-\[\#F3F3F0\]/40', 'text-text-inverse/40'),
    (r'text-\[\#F3F3F0\]/50', 'text-text-inverse/50'),
    (r'text-\[\#F3F3F0\]/60', 'text-text-inverse/60'),
    (r'text-\[\#F3F3F0\]/70', 'text-text-inverse'),
    (r'text-\[\#F3F3F0\]/80', 'text-text-inverse'),

    # 3. Base Background & Text colors
    (r'bg-\[\#F3F3F0\]', 'bg-surface-muted'),
    (r'bg-\[\#111111\]', 'bg-surface-base'),
    (r'bg-\[\#1A1A1A\]', 'bg-surface-base'),
    (r'bg-\[\#0B0B0B\]', 'bg-surface-base'), # map dark legal bar to base
    (r'bg-white', 'bg-surface-raised'),
    (r'bg-\[\#111111\]/2', 'bg-surface-base/5'),
    
    (r'text-\[\#111111\]', 'text-text-primary'),
    (r'text-\[\#F3F3F0\]', 'text-text-secondary'),
    
    # 4. Borders / Dividers
    (r'border-\[\#111111\]/10', 'border-border-muted'),
    (r'border-\[\#111111\]/20', 'border-border-muted'),
    (r'border-\[\#F3F3F0\]/10', 'border-border-muted'),
    (r'border-\[\#F3F3F0\]/20', 'border-border-muted'),
    (r'border-\[\#F3F3F0\]/30', 'border-border-muted'),
    (r'border-\[\#111111\]', 'border-border-default'),
    (r'border-\[\#F3F3F0\]', 'border-border-default'),
    
    (r'divide-\[\#111111\]', 'divide-border-default'),
    (r'divide-\[\#F3F3F0\]/20', 'divide-border-muted'),

    # 5. Shadows
    (r'shadow-\[6px_6px_0px_0px_\#111111\]', 'shadow-[6px_6px_0px_0px_var(--color-border-default)]'),
]

modified_files = 0
total_replacements = 0

for scan_dir in scan_dirs:
    dir_path = os.path.join(root_path, scan_dir)
    for root, _, files in os.walk(dir_path):
        for file in files:
            if not file.endswith('.tsx') and not file.endswith('.ts'):
                continue
                
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = content
            file_replacements = 0
            
            for pattern, replacement in replacements:
                # Find all occurrences of the pattern
                matches = re.findall(pattern, new_content)
                if matches:
                    new_content = re.sub(pattern, replacement, new_content)
                    file_replacements += len(matches)
            
            if file_replacements > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Migrated {file}: replaced {file_replacements} occurrences")
                modified_files += 1
                total_replacements += file_replacements

print(f"\nMigration completed: Modified {modified_files} files, {total_replacements} total color replacements.")
