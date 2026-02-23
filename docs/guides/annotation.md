---
sidebar_position: 1
---

# Annotation

asbplayer can annotate subtitles to better assist with language learning. Annotation features include:

- word styling (color/underline/outline, etc.) based on a word's status (uncollected/unknown/learning, etc.)
    - known status can be sourced and synced from Anki, and/or tracked locally in asbplayer (includes import/export features for easy seeding of known words)
- reading annotation (pronunciation displayed above each word or based on status)
- frequency annotation (rank-based frequency displayed below each word or based on status)
- many more features for future releases!

:::info
Annotation requires a configured [Yomitan](https://yomitan.wiki/) instance and the [yomitan-api](https://github.com/yomidevs/yomitan-api).

If you rely on the **local word database**, installing the asbplayer browser extension is recommended so your browser is less likely to delete stored words. If you can’t install the extension, consider periodically exporting your settings and/or local words as a backup.
:::

## Setup

1. Open asbplayer **Settings**.
2. Go to the **Annotation** section.
3. Select the track you want to configure.
4. Configure the **Yomitan URL** for that track.
    - You will need a configured [Yomitan](https://yomitan.wiki/) instance and the [yomitan-api](https://github.com/yomidevs/yomitan-api).
	- If the URL is invalid or unreachable, asbplayer will show an error next to the setting.
    - Frequency information requires at least one rank-based frequency dictionary to be available in your Yomitan instance.
5. (Anki Users) Configure which cards to source known status information from
    - "Anki decks" should typically be left blank to source from all decks, filtering by the fields is usually sufficient.
    - "Anki word fields" correspond to the field on the Anki note that contains only the target word.
    - "Anki sentence fields" should only be used for Anki notes that do not have a dedicated word field (such as sentence decks). These words are treated as a fallback if it's not present from the "Anki word fields".
    - To populate the database, use **Re-Build Anki word database** after configuring these fields.
6. Enable your desired annotation features (styling, reading, frequency, etc.) for that track. Customize other settings as desired.
    - If **Only show annotations on hover** is enabled, you will need to hover subtitle text to see annotations.
7. For detailed explanations of each option, see the [Annotation](../reference/settings.md#annotation) section of the settings reference.

## Troubleshooting

### No annotation appears

For annotations to appear, at least one of the annotation features (styling, reading, frequency) must be enabled for the track.

Also check whether **Only show annotations on hover** is enabled.

### Everything is uncollected

If word statuses never change from **Uncollected**:

- If you rely on local status, import words into the local word database or use the hover + keyboard shortcuts to set statuses.
- If you rely on Anki for status, make sure Anki is running and your **AnkiConnect URL** is correct.
    - Configure **Anki word fields** (recommended) and/or **Anki sentence fields**.
    - Run **Re-Build Anki word database** in the settings.
    - You do not need to keep Anki running after the database is built, but keeping Anki open during playback will keep asbplayer in sync.

### Red strikethrough styling appears

This indicates there was an error processing the subtitles, most likely due to an issue connecting to Yomitan. Check the browser console for error messages and seek support in the asbplayer Discord if you can’t resolve the issue.
