# pip install Pillow
# pip install python-frontmatter

import os
from io import BytesIO
from pathlib import Path

import frontmatter
from PIL import Image
from PIL.Image import Resampling

FOLDER = "./src/routes/podcasts"
STATIC_FOLDER = "./static"

OPTIONS = [
    {"suffix": "1000x1000", "size": [1000, 1000], "quality": 80, "format": "webp"},
    {"suffix": "2400x2400", "size": [2400, 2400], "quality": 50, "format": "jpeg"},
    {
        "suffix": "3000x3000",
        "size": [3000, 3000],
        "quality": 18,
        "format": "jpeg",
        "only": [
            "VisionAlps",
            "Smart Land Now",
            "Tech Rewind",
            "Smart Metering Revolution",
            "IoMOBILITY",
            "Innovation by Proximity",
        ],
    },
    {
        "suffix": "1400x1400",
        "size": [1400, 1400],
        "quality": 80,
        "format": "jpeg",
        "only": [
            "VisionAlps",
            "Smart Land Now",
            "Tech Rewind",
            "Smart Metering Revolution",
            "IoMOBILITY",
            "Innovation by Proximity",
        ],
    },
]

filesToProcess = []
for path, _, files in os.walk(FOLDER):
    for name in files:
        if name.endswith(".md"):
            filesToProcess.append(os.path.join(path, name))

for file in filesToProcess:
    episode = frontmatter.load(file)
    imageSrc = Path(STATIC_FOLDER + episode["image"])

    print(f"[🎵 EPISODIO] {episode['title']}")
    if os.path.exists(imageSrc):
        # Compress image
        episode["imageset"] = []
        for option in OPTIONS:
            if "only" not in option.keys() or episode["title"] in option["only"]:
                saveName = imageSrc.with_suffix(
                    f".{option['suffix']}.{option['format']}"
                )
                print(f"[🖇 MEDIA] {saveName}")

                image = Image.open(imageSrc)
                image = image.resize(option["size"], resample=Resampling.BICUBIC)
                image.save(
                    saveName,
                    format=option["format"],
                    optimize=True,
                    quality=option["quality"],
                )

                episode["imageset"].append(saveName.as_posix().removeprefix("static"))

        # Save
        f = BytesIO()
        frontmatter.dump(episode, f, sort_keys=False)

        with open(file, "wb") as fp:
            fp.write(f.getbuffer())
