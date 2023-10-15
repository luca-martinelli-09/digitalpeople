import { fetchPodcasts, fetchEpisodes } from '$lib/utils'
import { author, baseURI, realBaseURI } from '$lib/info'
import { dayjs } from "svelte-time";

export const GET = async ({ url, params }) => {
  const podcast = params.slug;
  const real = url.searchParams.get("direct");

  const podcastInfo = await fetchPodcasts(podcast);
  const allEpisodes = await fetchEpisodes(podcast);

  const headers = {
    'Content-Type': 'application/xml',
  }

  return new Response(xml(podcastInfo, allEpisodes, real ? realBaseURI : baseURI), { headers })
}

const xml =
  (podcast, episodes, uri) =>
    `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"  xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <link>${uri}/podcasts/${podcast.id}</link>
      <title>
        <![CDATA[
          ${podcast.title}
        ]]>
      </title>
      <itunes:title>
        <![CDATA[
          ${podcast.title}
        ]]>
      </itunes:title>
      <description>
        <![CDATA[
          ${podcast.description}
        ]]>
      </description>
      <itunes:summary>
        <![CDATA[
          ${podcast.description}
        ]]>
      </itunes:summary>
      <language>${podcast.language || "it"}</language>
      
      ${podcast.type ? `<itunes:type>${podcast.type || "episodic"}</itunes:type>` : ""}
      
      <author>${author.name}</author>
      <itunes:author>${author.name}</itunes:author>
      <itunes:owner>
        <itunes:name>${author.name}</itunes:name>
        <itunes:email>${author.email}</itunes:email>
      </itunes:owner>
      <copyright>${podcast.copyright || "Creative Commons Attribuzione - Non opere derivate 4.0 Internazionale"}</copyright>
      
      <itunes:image href="${podcast.image.startsWith("http") ? podcast.image : uri + podcast.imageset[2]}" />
      <image>
        <url>${podcast.image.startsWith("http") ? podcast.image : uri + podcast.imageset[2]}</url>
        <title>
          <![CDATA[
            ${podcast.title}
          ]]>
        </title>
        <link>${uri}/podcasts/${podcast.id}</link>
      </image>
      
      <itunes:explicit>${podcast.explicit || "no"}</itunes:explicit>
      <itunes:complete>${podcast.complete ? "yes" : "no"}</itunes:complete>
      <itunes:block>${podcast.block ? "yes" : "no"}</itunes:block>
      
      ${podcast.categories.map(category => {
      if (typeof category === "string") {
        return `<itunes:category text="${category}" />`;
      }

      return `<itunes:category text="${Object.keys(category).pop()}">
            ${Object.values(category).pop().map(subcategory => `<itunes:category text="${subcategory}" />`).join("")}
          </itunes:category>`;
    }).join("")}
      
      ${episodes.map(episode => {
      const d = dayjs(new Date(episode.date))

      const formattedDate = d.format("ddd, DD MMM YYYY HH:mm:ss ZZ");

      let episodeImageUri = null;

        console.log(episode.description.replace(/<br\s*[\/]?>/gi, ''));

      if (episode.image.startsWith("http")) episodeImageUri = episode.image
      else
        if (episode.imageset && episode.imageset.length >= 1) episodeImageUri = uri + episode.imageset[1]

      return `<item>
        <title>
          <![CDATA[
            ${episode.title}
          ]]>
        </title>
        <itunes:title>
          <![CDATA[
            ${episode.title}
          ]]>
        </itunes:title>
        <pubDate>${formattedDate}</pubDate>

        ${episode.season ? `<itunes:season>${episode.season}</itunes:season>` : ""}
        ${episode.episode ? `<itunes:episode>${episode.episode}</itunes:episode>` : ""}
        ${episode.keywords ? `<itunes:keywords>${episode.keywords.join(",")}</itunes:keywords>` : ""}

        ${episode.type ? `<itunes:episodeType>${episode.type || "full"}</itunes:episodeType>` : ""}

        <description>
          <![CDATA[
            ${episode.description.replace(/<br\s*[\/]?>/gi, '')}
          ]]>
        </description>
        <itunes:summary>
          <![CDATA[
            ${episode.description.replace(/<br\s*[\/]?>/gi, '')}
          ]]>
        </itunes:summary>

        <enclosure
          url="${episode.audio?.file.startsWith("http") ? episode.audio?.file : uri + episode.audio?.file + "?t=" + (podcast.audioVersion || 0)}"
          type="${episode.audio?.type || "audio/mpeg"}"
          length="${episode.audio?.size || 0}"
        />
        <itunes:duration>${episode.audio?.duration || 0}</itunes:duration>
        
        ${episodeImageUri ? '<itunes:image href="' + episodeImageUri + '?t=1" />' : ''}

        <itunes:explicit>${episode.explicit || "no"}</itunes:explicit>
        <itunes:block>${episode.block || "no"}</itunes:block>
        
        <guid>${baseURI}/podcasts/${podcast.id}/${episode.id}</guid>
        <link>${uri}/podcasts/${podcast.id}/${episode.id}</link>
      </item>`}).join("")}
    </channel>
  </rss>`