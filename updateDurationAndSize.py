# pip install python-frontmatter
# pip install mutagen

import os
from io import BytesIO

import frontmatter
from mutagen.mp3 import MP3

FOLDER = './src/routes/podcasts'
STATIC_FOLDER = './static'

filesToProcess = []
for path, _, files in os.walk(FOLDER):
    for name in files:
        if not name.startswith("_") and name.endswith(".md"):
            filesToProcess.append(os.path.join(path, name))

for file in filesToProcess:
    episode = frontmatter.load(file)
    print(f"[🎵 EPISODIO] {episode['title']}")

    audioSrc = STATIC_FOLDER + episode['audio']['file']
    if os.path.exists(audioSrc):
        # Get audio information
        audioDuration = MP3(audioSrc).info.length
        fileSize = os.path.getsize(audioSrc)

        episode['audio']['size'] = fileSize
        episode['audio']['duration'] = round(audioDuration)

        # Save
        f = BytesIO()
        frontmatter.dump(episode, f, sort_keys=False)

        with open(file, 'wb') as fp:
            fp.write(f.getbuffer())
