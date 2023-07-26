import os

FOLDER = './src/routes/podcasts'
STATIC_FOLDER = './static/podcasts'

EPISODES_TO_GENERATE = {
    "smartcitynow": [
        "gianluigi-ferri", "fabio-germagnoli", "francesco-trimarchi",
        "alex-buzzetti", "andrea-sorri", "andrea-marella",
        "filippo-troiani", "paolo-odorizzi", "marisa-martano",
        "luca-maistrelli", "lorenzo-ferrante", "antonio-puliafito",
        "mauro-manente", "michele-ieradi", "francesco-mastrapasqua",
        "luigi-pagnozzi", "stefano-lorenzi", "fabio-ugolini"
    ]
}

template = open("./template.md", "r").read()


def processTemplate(templ, dict):
    for key in dict.keys():
        templ = templ.replace("{" + key + "}", dict[key])

    return templ


for podcast in EPISODES_TO_GENERATE.keys():
    print(f"[🎙 PODCAST] {podcast}")

    podcastFolder = os.path.join(FOLDER, podcast)
    staticPodcastFolder = os.path.join(STATIC_FOLDER, podcast)

    if not os.path.exists(podcastFolder):
        os.mkdir(podcastFolder)

    if not os.path.exists(staticPodcastFolder):
        os.mkdir(staticPodcastFolder)

    for episode in EPISODES_TO_GENERATE[podcast]:
        episodePath = os.path.join(podcastFolder, f"{episode}.md")
        staticEpisodeFolder = os.path.join(staticPodcastFolder, episode)

        print(f"[🎵 EPISODIO] {episode}")

        if os.path.exists(episodePath):
            print(f"    🔍 Il file Markdown è già esistente")
        else:
            print(f"    🔨 Creo il template")
            with open(episodePath, "w+") as fp:
                fp.write(processTemplate(
                    template, {"slug": episode, "podcast": podcast}))
        
        if os.path.exists(staticEpisodeFolder):
            print(f"    🔍 La cartella statica è già esistente")
        else:
            print(f"    🔨 Creo la cartella statica")
            os.mkdir(staticEpisodeFolder)
