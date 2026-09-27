# Mark Sherman Art website

A plain HTML site. No build step. Netlify serves the folder as it is.

## Files

- `index.html` – the page: header, slideshow, works, commissions, about, contact
- `paintings.js` – the list of paintings. Edit this file to add, remove or mark a painting sold
- `styles.css` – colors, fonts and layout
- `main.js` – builds the slideshow, the grid and the larger view from `paintings.js`
- `images/paintings/` – painting photos
- `download-images.sh` – one-time script that pulls the painting photos from Etsy

## Add a painting

1. Save the photo in `images/paintings/`, for example `sunset-cove.jpg`.
2. Open `paintings.js`, copy one block from `{` to `},`, paste it, and change the details.
3. Commit and push. Netlify republishes in about a minute.

## Contact form

Netlify detects the form on deploy. Messages show up in the Netlify dashboard under Forms.
Turn on email notifications there so the messages reach Mark.
