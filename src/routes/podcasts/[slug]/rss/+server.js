import { fetchPodcasts, fetchEpisodes } from '$lib/utils'
import { author, baseURI } from '$lib/info'

export const GET = async ({ params }) => {
  const podcast = params.slug;
  
  const podcastInfo = await fetchPodcasts(podcast);
  const allEpisodes = await fetchEpisodes(podcast);

  const headers = {
    'Content-Type': 'application/xml',
  }

  return new Response(xml(podcastInfo, allEpisodes), { headers })
}

const xml =
  (podcast, episodes) =>
    `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"  xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <link>${baseURI}/podcasts/${podcast.id}</link>
      <title>${podcast.title}</title>
      <itunes:title>${podcast.title}</itunes:title>
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
      
      <itunes:type>${podcast.type || "episodic"}</itunes:type>
      
      <author>${author.name}</author>
      <itunes:author>${author.name}</itunes:author>
      <itunes:owner>
        <itunes:name>${author.name}</itunes:name>
        <itunes:email>${author.email}</itunes:email>
      </itunes:owner>
      <copyright>${podcast.copyright || "Creative Commons Attribuzione - Non opere derivate 4.0 Internazionale"}</copyright>
      
      <itunes:image href="${podcast.image.startsWith("http") ? podcast.image : baseURI + podcast.image}" />
      <image>
        <url>${podcast.image.startsWith("http") ? podcast.image : baseURI + podcast.image}</url>
        <title>${podcast.title}</title>
        <link>${baseURI}/podcasts/${podcast.id}</link>
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
      
      ${episodes.map(episode =>
      `<item>
        <title>${episode.title}</title>
        <itunes:title>${episode.title}</itunes:title>
        <pubDate>${new Date(episode.date)}</pubDate>

        ${episode.season ? `<itunes:season>${episode.season}</itunes:season>` : ""}
        ${episode.episode ? `<itunes:episode>${episode.episode}</itunes:episode>` : ""}
        ${episode.keywords ? `<itunes:keywords>${episode.keywords.join(",")}</itunes:keywords>` : ""}

        <itunes:episodeType>${episode.type || "full"}</itunes:episodeType>

        <description>
          <![CDATA[
            ${episode.description}
          ]]>
        </description>
        <itunes:summary>
          <![CDATA[
            ${episode.description}
          ]]>
        </itunes:summary>

        <enclosure
          url="${episode.audio?.file.startsWith("http") ? episode.audio?.file : baseURI + episode.audio?.file}"
          type="${episode.audio?.type || "audio/mpeg"}"
          length="${episode.audio?.size || 0}"
        />
        <itunes:duration>${episode.audio?.duration || 0}</itunes:duration>

        <itunes:image href="${episode.image.startsWith("http") ? episode.image : baseURI + episode.image}" />

        <itunes:explicit>${episode.explicit || "no"}</itunes:explicit>
        <itunes:block>${episode.block || "no"}</itunes:block>
        
        <guid>${baseURI}/podcasts/${podcast.id}/${episode.id}</guid>
        <link>${baseURI}/podcasts/${podcast.id}/${episode.id}</link>
      </item>`).join("")}
    </channel>
  </rss>`