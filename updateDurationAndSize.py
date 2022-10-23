# pip install python-frontmatter
# pip install librosa

import os
import re
from io import BytesIO

import frontmatter
import librosa

FOLDER = './src/routes/podcasts'
STATIC_FOLDER = './static'

filesToProcess = []
for path, _, files in os.walk(FOLDER):
    for name in files:
        if re.search("s[0-9]+e[0-9]+.md", name):
            filesToProcess.append(os.path.join(path, name))

for file in filesToProcess:
    episode = frontmatter.load(file)
    audioSrc = STATIC_FOLDER + episode['audio']['file']

    print(f"[🎵 EPISODIO] {episode['title']}")
    if os.path.exists(audioSrc):
        # Get audio information
        audioDuration = librosa.get_duration(filename=audioSrc)
        fileSize = os.path.getsize(audioSrc)

        episode['audio']['size'] = fileSize
        episode['audio']['duration'] = round(audioDuration)

        # Save
        f = BytesIO()
        frontmatter.dump(episode, f, sort_keys=False)

        with open(file, 'wb') as fp:
            fp.write(f.getbuffer())
