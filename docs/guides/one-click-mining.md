---
sidebar_position: 4
---

# One-click mining

asbplayer is great at connecting subtitle and video content to AnkiConnect, but is not able to automatically provide word definitions on its own. For this reason, most sentnece mining flows require at two or three mouse or keyboard inputs from the user.

One-click mining is possible if asbplayer is combined with another application that:

- Supplies the missing word definition information, and
- Already integrates with AnkiConnect

[Yomitan](https://yomitan.wiki/) is an example of one such application.

## Install and configure Yomitan

Follow the directions on [Yomitan's website](https://yomitan.wiki/) to install Yomitan and configure it with a dictionary for your target language.

## Run asbplayer's AnkiConnect proxy

Follow the [WebSocket server guide](./web-socket-server) to setup an AnkiConnect proxy that allows asbplayer to enrich AnkiConnect cards before they finally reach AnkiConnect.

## Point Yomitan at the proxy

Configure Yomitan's AnkiConnect URL to point at the AnkiConnect proxy rather than AnkiConnect. The default URL is `http://127.0.0.1:8766`.

## Mine with **Yomitan** as usual

Mining sentences using Yomitan will create cards with word definition, image, and audio already provided. A truly one-click mining flow can be achieved if the proxy's `POST_MINE_ACTION` is `2` (update last card).
