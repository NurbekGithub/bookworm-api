import express from 'express';

const router = express.Router();

router.get('/search', (req, res) => {
  res.json({
    books: [
      {
        goodreadsId: 1,
        title: '1984',
        authors: 'Orwell',
        covers: [
          'http://flavorwire.files.wordpress.com/2011/06/georgeorwellxobeygiantprintset-1984coverbyshepardfairey.jpeg ',
          'https://flavorwire.files.wordpress.com/2011/06/screen-shot-2011-06-25-at-8-13-27-am.jpg'
        ],
        pages: 198
      },
      {
        goodreadsId: 2,
        title: 'Tree Men in a Boat',
        authors: 'Jerome K. Jerome',
        covers: [
          'https://img1.od-cdn.com/ImageType-100/2389-1/%7B03B5CE87-A1A1-45E6-B0DC-282B1B2750B0%7DImg100.jpg',
          'https://pictures.abebooks.com/isbn/9780141305585-uk-300.jpg'
        ],
        pages: 256
      }
    ]
  });
});

export default router;