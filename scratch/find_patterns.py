import os
import re

def find_patterns(root_dir):
    pattern = re.compile(r'\];\s*\n\s*\n\s*export default function', re.MULTILINE)
    for root, dirs, files in os.walk(root_dir):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        if pattern.search(content):
                            print(path)
                except Exception:
                    pass

find_patterns('.')
