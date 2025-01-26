# pip install Pillow
# pip install python-frontmatter

import os
from io import BytesIO
from pathlib import Path

import frontmatter
from PIL import Image
from PIL.Image import Resampling

STATIC_FOLDER = "./static/images"

OPTIONS = [
    {"suffix": "380x380", "size": [380, 380], "quality": 80, "format": "webp"},
    {"suffix": "1000x1000", "size": [1000, 1000], "quality": 80, "format": "webp"},
    {"suffix": "2400x2400", "size": [2400, 2400], "quality": 80, "format": "webp"},
]

filesToProcess = []
for path, _, files in os.walk(STATIC_FOLDER):
    for name in files:
        filesToProcess.append(os.path.join(path, name))


for file in filesToProcess:
    imageSrc = Path(file)

    print(f"[🖼 IMAGE] {imageSrc}")

    if os.path.exists(imageSrc):
        # Compress image
        for option in OPTIONS:
            saveName = imageSrc.with_suffix(f".{option['suffix']}.{option['format']}")
            print(f"[🖇 MEDIA] {saveName}")

            image = Image.open(imageSrc)
            image.thumbnail(option["size"], resample=Resampling.BICUBIC)
            image.save(
                saveName,
                format=option["format"],
                optimize=True,
                quality=option["quality"],
            )
