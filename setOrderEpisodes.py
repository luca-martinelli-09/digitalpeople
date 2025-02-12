# pip install python-frontmatter
# pip install librosa

import os
from datetime import datetime, timedelta
from io import BytesIO

import frontmatter

FOLDER = "./src/routes/podcasts"

PODCAST_ORDERS = {
    "visionalps": [
        [
            "gianluigi-ferri",
            "fabrizio-capobianco",
            "roberta-russo",
            "chiara-guidarelli",
            "edoardo-colombo",
            "tiziano-maffezzini",
            "roberto-rubini",
            "federico-bianchi",
            "andrea-riva",
            "stefano-angelinis",
            "michele-diasio",
            "--loretta-credaro",
            "pasquale-scopelliti",
            "luca-sala",
            "daniele-fortin",
            "marco-massarotto",
            "alessio-conte",
            "claudio-canova",
            "ana-davis",
            "veronica-brizzi",
            "alberto-mandrile",
            "alessandro-sosi",
            "alberto-dianin",
            "stefano-lorenzi",
            "marcello-favalli",
            "francesco-piazza",
            "luca-piras",
            "nicola-mezzetti",
            "thomas-schatzer",
            "francesco-gabbi",
            "--massimiliano-squadroni",
            "daniele-cattaneo",
            "elisa-bacchetti",
            "alfonso-mantero",
            "carlotta-manzoni",
            "antonio-longo",
            "andrea-lazzaro",
            "giuseppe-ciniero",
            "mario-pasquino",
            "thomas-ferrero",
            "alberto-giolitti",
            "victor-miherea",
            "sergio-bonora",
            "stefano-carbone",
            "vittorio-cossarini",
            "francesco-comotti",
            "armando-portoraro",
            "sandro-vettori",
            "--carlo-marzi",
            "--luca-fazzi",
        ],
        [
            "fausto-manzana",
            "paolo-grigolli",
            "tania-giovannini",
            "lorenzo-ferrante",
            "maurizio-stucchi",
            "erik-svab",
            "david-tacconi",
            "silvia-margoni",
            "luisa-pizzini",
            "daniele-endrici",
            "carlo-costa",
            "christian-caneppele",
            "andrea-gherardi",
            "enrico-bramerini",
            "federica-vigano",
            "patrizia-balzama",
            "giorgio-ramenghi",
            "alessandro-zorer",
            "marco-montali",
            "thomas-aichner",
            "marco-dapra",
            "giuseppe-addamo",
            "--gherardo-manaigo",
            "ginevra-mutti",
            "marco-da-rin-zanco",
            "--stefano-savaris",
            "--ellen-broccolo",
            "--chiara-costa",
            "ludovica-beatrice-rubbini",
            "michele-diasio-2",
            "michele-soavi",
            "massimiliano-margarone",
            "paolo-messina",
            "pasquale-scopelliti-2",
            "tito-stefanelli",
            "thomas-valentini",
            "fulvio-ananasso",
            "roberto-siagri",
            "gianluca-caffaratti",
            "--luca-profico",
            "--eda-fetahu",
            "alberto-mandrile-2",
            "maurizio-ionico",
            "marta-serrano",
            "matteo-jarre",
            "nicola-bosticco",
        ],
        [
            "diego-zarneri",
            "mattia-pedroncelli",
            "bryan-ferrari",
            "davide-buscato",
            "ugo-morenzetti",
            "jacopo-pilat",
            "paolo-omero",
            "marzia-istria",
            "paolo-dileno"
        ],
    ],
    "smartcitynow": [
        [
            "gianluigi-ferri",
            "fabio-germagnoli",
            "francesco-trimarchi",
            "alex-buzzetti",
            "andrea-sorri",
            "andrea-marella",
            "filippo-troiani",
            "paolo-odorizzi",
            "marisa-martano",
            "luca-maistrelli",
            "lorenzo-ferrante",
            "antonio-puliafito",
            "mauro-manente",
            "michele-ieradi",
            "francesco-mastrapasqua",
            "fabio-ugolini",
            "stefano-lorenzi",
        ],
        [
            "massimo-di-domenico",
            "andrea-orlandi",
            "laura-morgagni",
            "roberto-redaelli",
            "dalia-zecchi",
            "alberto-mandrile",
            "gloria-chindamo",
            "francesco-mastrapasqua-guido-fabbri",
            "francesco-maffini",
            "simone-sartoni",
            "giovanni-palombini",
            "filippo-troiani-2",
        ],
    ],
    "smr": [
        [
            "vincenzo-quintani",
            "stefano-rotini",
            "giovanni-d-alberton",
            "domenico-santoro",
            "massimiliano-magri",
        ]
    ],
}

filesToProcess = []
for path, _, files in os.walk(FOLDER):
    for name in files:
        if not name.startswith("_") and name.endswith(".md"):
            filesToProcess.append(os.path.join(path, name))

for podcast in PODCAST_ORDERS.keys():
    for season, episodes in enumerate(PODCAST_ORDERS[podcast]):
        season += 1
        episode = 1
        lastDate = None

        for name in episodes:
            file = os.path.join(os.path.join(FOLDER, podcast), f"{name}.md")

            if os.path.exists(file):
                episodeInfo = frontmatter.load(file)
                print(f"[🎵 EPISODIO] {episodeInfo['title']}")

                episodeInfo["season"] = season
                episodeInfo["episode"] = episode

                episodeDate = episodeInfo["date"]

                if lastDate is None or (
                    (episodeDate - lastDate) >= timedelta(hours=12)
                    and lastDate < episodeDate
                ):
                    lastDate = episodeDate
                else:
                    lastDate = lastDate + timedelta(minutes=10)
                    episodeInfo["date"] = lastDate

                # Save
                f = BytesIO()
                frontmatter.dump(episodeInfo, f, sort_keys=False)

                with open(file, "wb") as fp:
                    fp.write(f.getbuffer())

                episode += 1
            else:
                print(f"[🤨 NOT FOUND] {podcast}/{name}")
