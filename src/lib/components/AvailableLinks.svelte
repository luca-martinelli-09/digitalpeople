<script>
  import Icon from "@iconify/svelte";

  export let podcast;
  export let episode = null;

  const links = {
    spotify: episode?.platforms?.spotify || podcast?.platforms?.spotify,
    apple: episode?.platforms?.apple || podcast?.platforms?.apple,
    google: episode?.platforms?.google || podcast?.platforms?.google,
    amazon: episode?.platforms?.amazon || podcast?.platforms?.amazon,
  };
</script>

<div class="flex flex-col gap-3">
  <h3 class="font-bold text-xl">Disponibile su</h3>
  <div>
    <div class="inline-flex gap-4 rounded-full bg-white p-2 px-3 text-3xl">
      {#if links.spotify}
        <a href={links.spotify} target="_blank" rel="noopener noreferrer">
          <Icon icon="logos:spotify-icon" />
        </a>
      {/if}
      {#if links.apple}
        <a href={links.apple} target="_blank" rel="noopener noreferrer">
          <Icon icon="fa6-solid:podcast" style="color: #B150E2" />
        </a>
      {/if}
      {#if links.google}
        <a href={links.google} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
            class="iconify iconify--logos"
          >
            <path
              fill="#0066D9"
              d="M15.5,152.3c-8.6,0-15.5-6.9-15.5-15.5v-17.5c0-8.6,6.9-15.5,15.5-15.5S31,110.7,31,119.3v17.5
                    C31,145.3,24.1,152.3,15.5,152.3z"
            />
            <path
              fill="#4285F4"
              d="M240.5,152.3c-8.6,0-15.5-6.9-15.5-15.5v-17.5c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5v17.5
                    C256,145.3,249.1,152.3,240.5,152.3z"
            />
            <path
              fill="#EA4335"
              d="M71.8,204.8c-8.6,0-15.5-6.9-15.5-15.5v-17.5c0-8.6,6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5v17.5
                    C87.3,197.8,80.3,204.8,71.8,204.8z M71.8,139.5c-8.6,0-15.5-6.9-15.5-15.5V66.7c0-8.6,6.9-15.5,15.5-15.5s15.5,6.9,15.5,15.5V124
                    C87.3,132.6,80.3,139.5,71.8,139.5z"
            />
            <path
              fill="#34A853"
              d="M184.2,204.8c-8.6,0-15.5-6.9-15.5-15.5V132c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5v57.3
                    C199.8,197.8,192.8,204.8,184.2,204.8z M184.2,99.8c-8.6,0-15.5-6.9-15.5-15.5V66.7c0-8.6,6.9-15.5,15.5-15.5
                    c8.6,0,15.5,6.9,15.5,15.5v17.5C199.8,92.8,192.8,99.8,184.2,99.8z"
            />
            <path
              fill="#FAB908"
              d="M128,256c-8.6,0-15.5-6.9-15.5-15.5V223c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5v17.5
                    C143.5,249.1,136.6,256,128,256z M128,190.2c-8.6,0-15.5-6.9-15.5-15.5V81.3c0-8.6,6.9-15.5,15.5-15.5c8.6,0,15.5,6.9,15.5,15.5
                    v93.4C143.5,183.3,136.6,190.2,128,190.2z M128,48.5c-8.6,0-15.5-6.9-15.5-15.5V15.5C112.5,6.9,119.4,0,128,0
                    c8.6,0,15.5,6.9,15.5,15.5V33C143.5,41.6,136.6,48.5,128,48.5z"
            />
          </svg>
        </a>
      {/if}
      {#if links.amazon}
        <a href={links.amazon} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" viewBox="0 0 89.015999 52">
            <g transform="translate(-0.53422889,-18)" id="g923">
              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.3577"
                x2="-349.23441"
                y1="353.3577"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_1_"
              >
                <stop id="stop835" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop837" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop839" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop841" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_1_)"
                id="path844"
                d="m 59.7,40.5 c -0.6,0.4 -1.5,0.7 -2.6,0.7 -1.7,0 -3.3,-0.2 -4.9,-0.7 -0.4,-0.1 -0.7,-0.2 -0.9,-0.2 -0.3,0 -0.4,0.2 -0.4,0.6 v 1 c 0,0.3 0.1,0.5 0.2,0.7 0.1,0.1 0.3,0.3 0.6,0.4 1.6,0.7 3.4,1 5.4,1 2.1,0 3.7,-0.5 5,-1.5 1.3,-1 1.9,-2.3 1.9,-4 0,-1.2 -0.3,-2.1 -0.9,-2.9 -0.6,-0.7 -1.6,-1.4 -3,-1.9 l -2.8,-1.1 c -1.1,-0.4 -1.9,-0.8 -2.2,-1.2 -0.4,-0.4 -0.6,-0.8 -0.6,-1.5 0,-1.5 1.1,-2.3 3.4,-2.3 1.3,0 2.6,0.2 3.8,0.6 0.4,0.1 0.7,0.2 0.8,0.2 0.3,0 0.5,-0.2 0.5,-0.6 v -1 c 0,-0.3 -0.1,-0.5 -0.2,-0.7 -0.1,-0.2 -0.3,-0.3 -0.6,-0.4 -1.5,-0.5 -3,-0.8 -4.5,-0.8 -1.9,0 -3.5,0.5 -4.7,1.4 -1.2,0.9 -1.8,2.2 -1.8,3.7 0,2.3 1.3,4 3.9,5 l 3,1.1 c 1,0.4 1.6,0.7 2,1.1 0.4,0.4 0.5,0.8 0.5,1.4 0,0.8 -0.3,1.5 -0.9,1.9 z"
                class="st0"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.4541"
                x2="-349.23441"
                y1="353.4541"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_2_"
              >
                <stop id="stop846" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop848" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop850" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop852" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_2_)"
                id="path855"
                d="m 44,26.1 v 13.3 c -1.7,1.1 -3.4,1.7 -5.1,1.7 -1.1,0 -1.9,-0.3 -2.4,-0.9 C 36,39.6 35.8,38.7 35.8,37.4 V 26.1 c 0,-0.5 -0.2,-0.7 -0.7,-0.7 H 33 c -0.5,0 -0.7,0.2 -0.7,0.7 v 12.4 c 0,1.7 0.4,3.1 1.3,4 0.9,0.9 2.2,1.4 3.9,1.4 2.3,0 4.6,-0.8 6.8,-2.4 l 0.2,1.2 c 0,0.3 0.1,0.4 0.3,0.5 0.1,0.1 0.3,0.1 0.6,0.1 h 1.5 c 0.5,0 0.7,-0.2 0.7,-0.7 V 26.1 c 0,-0.5 -0.2,-0.7 -0.7,-0.7 h -2.1 c -0.6,0 -0.8,0.3 -0.8,0.7 z"
                class="st1"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.59329"
                x2="-349.23441"
                y1="353.59329"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_3_"
              >
                <stop id="stop857" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop859" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop861" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop863" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_3_)"
                id="path866"
                d="m 25,43.4 h 2.1 c 0.5,0 0.7,-0.2 0.7,-0.7 V 30.2 c 0,-1.7 -0.4,-3 -1.3,-3.9 -0.9,-0.9 -2.1,-1.4 -3.8,-1.4 -2.3,0 -4.7,0.8 -7,2.5 -0.8,-1.7 -2.3,-2.5 -4.5,-2.5 -2.2,0 -4.4,0.8 -6.6,2.3 L 4.4,26.1 C 4.4,25.8 4.3,25.7 4.1,25.6 4,25.5 3.8,25.5 3.6,25.5 H 2 c -0.5,0 -0.7,0.2 -0.7,0.7 v 16.6 c 0,0.5 0.2,0.7 0.7,0.7 h 2.1 c 0.5,0 0.7,-0.2 0.7,-0.7 V 29.3 c 1.7,-1 3.4,-1.6 5.2,-1.6 1,0 1.7,0.3 2.1,0.9 0.4,0.6 0.7,1.4 0.7,2.6 v 11.5 c 0,0.5 0.2,0.7 0.7,0.7 h 2.1 c 0.5,0 0.7,-0.2 0.7,-0.7 V 30.4 29.8 c 0,-0.2 0,-0.4 0,-0.5 1.8,-1.1 3.5,-1.6 5.2,-1.6 1,0 1.7,0.3 2.1,0.9 0.4,0.6 0.7,1.4 0.7,2.6 v 11.5 c 0,0.5 0.2,0.7 0.7,0.7 z"
                class="st2"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.33289"
                x2="-349.23441"
                y1="353.33289"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_4_"
              >
                <stop id="stop868" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop870" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop872" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop874" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_4_)"
                id="path877"
                d="m 79.5,56.7 c -10.9,4.6 -22.8,6.9 -33.6,6.9 -16,0 -31.5,-4.4 -44,-11.7 -0.2,-0.1 -0.4,-0.2 -0.6,-0.2 -0.7,0 -1.1,0.8 -0.4,1.5 11.6,10.5 27,16.8 44,16.8 12.2,0 26.3,-3.8 36,-11 1.7,-1.2 0.3,-3 -1.4,-2.3 z"
                class="st3"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.21909"
                x2="-349.23441"
                y1="353.21909"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_5_"
              >
                <stop id="stop879" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop881" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop883" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop885" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_5_)"
                id="path888"
                d="m 79.2,29.4 c 0.9,-1 2.3,-1.5 4.3,-1.5 1,0 2,0.1 2.9,0.4 0.3,0.1 0.4,0.1 0.6,0.1 0.3,0 0.5,-0.2 0.5,-0.7 v -1 C 87.5,26.4 87.4,26.1 87.3,26 87.2,25.9 87,25.7 86.8,25.6 85.5,25.3 84.2,25 83,25 c -2.8,0 -4.9,0.8 -6.5,2.5 -1.5,1.6 -2.3,4 -2.3,7 0,3 0.7,5.3 2.2,6.9 1.5,1.6 3.6,2.4 6.4,2.4 1.5,0 2.9,-0.2 4,-0.7 0.3,-0.1 0.5,-0.2 0.6,-0.4 0.1,-0.1 0.1,-0.4 0.1,-0.7 v -1 c 0,-0.5 -0.2,-0.7 -0.5,-0.7 -0.1,0 -0.3,0 -0.5,0.1 -1.1,0.3 -2.2,0.5 -3.2,0.5 -1.9,0 -3.3,-0.5 -4.2,-1.5 -0.9,-1 -1.3,-2.6 -1.3,-4.7 v -0.5 c 0.1,-2.2 0.5,-3.8 1.4,-4.8 z"
                class="st4"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.10449"
                x2="-349.23441"
                y1="353.10449"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_6_"
              >
                <stop id="stop890" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop892" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop894" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop896" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_6_)"
                id="path899"
                d="M 83.7,66.1 C 88.9,61.7 90.3,52.6 89.2,51.2 88.7,50.6 86.3,50 83.3,50 c -3.2,0 -7,0.7 -9.9,2.7 -0.9,0.6 -0.7,1.4 0.2,1.3 3.1,-0.4 10.1,-1.2 11.4,0.4 1.2,1.6 -1.4,8.2 -2.6,11.1 -0.3,0.9 0.4,1.2 1.3,0.6 z"
                class="st5"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.2955"
                x2="-349.23441"
                y1="353.2955"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_7_"
              >
                <stop id="stop901" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop903" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop905" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop907" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_7_)"
                id="path910"
                d="m 69.8,25.4 h -2.1 c -0.5,0 -0.7,0.2 -0.7,0.7 v 16.6 c 0,0.5 0.2,0.7 0.7,0.7 h 2.1 c 0.5,0 0.7,-0.2 0.7,-0.7 V 26.1 c 0,-0.4 -0.2,-0.7 -0.7,-0.7 z"
                class="st6"
              />

              <linearGradient
                gradientTransform="matrix(90.9945,-90.9945,-90.9945,-90.9945,64008.539,390.498)"
                y2="353.37411"
                x2="-349.23441"
                y1="353.37411"
                x1="-349.85849"
                gradientUnits="userSpaceOnUse"
                id="SVGID_8_"
              >
                <stop id="stop912" style="stop-color:#0C6CB3" offset="0" />
                <stop id="stop914" style="stop-color:#1E84C4" offset="0.2911" />
                <stop id="stop916" style="stop-color:#4CC0EF" offset="0.8873" />
                <stop id="stop918" style="stop-color:#4CC0EF" offset="1" />
              </linearGradient>

              <path
                inkscape:connector-curvature="0"
                style="fill:url(#SVGID_8_)"
                id="path921"
                d="M 70.4,18.6 C 70,18.2 69.4,18 68.7,18 c -0.7,0 -1.2,0.2 -1.6,0.6 -0.4,0.4 -0.6,0.9 -0.6,1.5 0,0.6 0.2,1.2 0.6,1.5 0.4,0.4 0.9,0.6 1.6,0.6 0.7,0 1.2,-0.2 1.6,-0.6 0.4,-0.4 0.6,-0.9 0.6,-1.5 0,-0.6 -0.1,-1.2 -0.5,-1.5 z"
                class="st7"
              />
            </g>
          </svg>
        </a>
      {/if}
      {#if !episode}
        <a href={"/podcasts/" + podcast.id + "/rss"} target="_blank" rel="noopener noreferrer">
          <Icon icon="fa6-solid:square-rss" style="color: #ea6221" />
        </a>
      {/if}
    </div>
  </div>
</div>
