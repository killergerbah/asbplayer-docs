---
sidebar_position: 7
---

# Compatibility

## Website

### Browsers and audio/video formats

|                                                                               |                                     H.264                                     |                                  H.265/HEVC                                   | `mp4` container | `mkv` container | Dolby-patented audio codecs like AC3/DTS |
| ----------------------------------------------------------------------------- | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :-------------: | :-------------: | ---------------------------------------- |
| **Chromium-based browsers with modern GPU and hardware acceleration enabled** |                                       ✓                                       |                                       ✓                                       |        ✓        |        ✓        |                                          |
| **Chromium-based browsers**                                                   |                                       ✓                                       |                                                                               |        ✓        |        ✓        |                                          |
| **Firefox**                                                                   | [Depends](https://support.mozilla.org/en-US/kb/html5-audio-and-video-firefox) | [Depends](https://support.mozilla.org/en-US/kb/html5-audio-and-video-firefox) |        ✓        |                 |

## Extension

### Browsers and features

|                                  | Screenshots | Audio Recording (non-DRM) | Audio Recording (DRM) | Side Panel | WebSocket Interface |
| -------------------------------- | :---------: | :-----------------------: | :-------------------: | :--------: | :-----------------: |
| **Most Chromium-based browsers** |      ✓      |             ✓             |           ✓           |     ✓      |          ✓          |
| **Firefox**                      |      ✓      |             ✓             |                       |            |                     |
| **Firefox for Android**          |             |             ✓             |                       |            |                     |
| **Kiwi Browser (Android)**       |             |             ✓             |           ✓           |            |                     |
| **Edge Canary (Android)**        |      ✓      |                           |                       |            |                     |

### Streaming services and subtitle detection

| Service        |                                            Compatibility                                            |
| -------------- | :-------------------------------------------------------------------------------------------------: |
| Netflix        |                                                  ✓                                                  |
| YouTube        |                                                  ✓                                                  |
| Disney Plus    | Seeking/timing is completely broken ([issue](https://github.com/killergerbah/asbplayer/issues/576)) |
| Hulu           |                                                  ✓                                                  |
| TVer           |                                                  ✓                                                  |
| Bandai Channel |                                                  ✓                                                  |
| Amazon Prime   |                                 Timing sometimes off by 30 seconds                                  |
| Emby/Jellyfin  |                                Hosts like `jellyfin*\|emby*\|:8096*`                                |
| Rakuten Viki   |                                                  ✓                                                  |
| osnplus        |                                                  ✓                                                  |
| Plex           |                        External subtitles only on hosts like `plex*:32400*`                         |
| BiliBili       |                                                  ✓                                                  |
| NRK TV         |                                                  ✓                                                  |
| HBO Max        |                                                  ✓                                                  |
