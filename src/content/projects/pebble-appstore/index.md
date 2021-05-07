```yaml
title: Pebble Appstore
order: 1
organization: src/content/organizations/pebble
technology:
  - Angular JS v1.x
  - AppCache
  - Sass
  - Gulp
  - Karma
images:
  - image: images/pebble-appstore-apps-main-compiled.png
    caption: Landing page for the apps section of the Appstore. The image on the
      left depicts the loading state with placeholders. The image on the right
      is the final rendered view of page. These two states would seamlessly
      transition with a fade.
    alt: Screenshot of the Appstore, showing various categories to explore.
  - image: images/pebble-appstore-apps-list.png
    alt: Screenshot of the list view for apps.
    caption: List view for apps.
  - image: images/pebble-appstore-watchfaces-main.png
    alt: Screenshot of the list view for watchfaces.
    caption: List view for watchfaces.
  - image: images/pebble-appstore-segment-full.png
    alt: Screenshot of the detailed app view
    caption: Detailed app view for *Segment,* a watchface I created.
```
Built on Angular 1.x the Pebble Appstore lived as a webview inside the Pebble Android and iOS apps. Much like the Google Play Store or Apple App Store, users could browse the store for apps and watchfaces that could be installed on their Pebble smartwatch. The real challenge for myself and the rest of our small team was ensuring the Appstore felt as native and responsive as possible while still allowing cross-platform functionality for older devices. Whilst I worked on many parts of the Appstore, one of my favourite contributions was implementing placeholder loading states. This meant the user never saw layout shift and every tap felt snappy and immediate while fetching data from the server.
