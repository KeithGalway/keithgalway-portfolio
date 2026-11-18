# Keith Galway portfolio

A static portfolio with ten project slots. No build step or dependencies are required.

## Add a website

Edit `projects.js` and fill in one of the ten entries:

```js
{ title: "My website", category: "Design & development", url: "https://example.com", image: "images/my-website.jpg" },
```

The URL makes the card clickable and marks it as live. The image is optional; use a local path (relative to `index.html`) or an image URL. Leave a field empty to retain its placeholder. Add any local images to the portfolio folder before publishing.

## Preview

From this folder, run `python -m http.server 8000 --bind 127.0.0.1` and open `http://localhost:8000`.

## Publish

Upload the contents of this folder to any static hosting provider and follow its instructions to connect `keithgalway.dev`. The domain and hosting are not configured by this site. Google Fonts are loaded over the network, with system font fallbacks.
