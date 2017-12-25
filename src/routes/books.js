import express from 'express';
import request from 'request-promise';
import { parseString } from 'xml2js';

import authenticate from '../middlewares/authenticate';

const router = express.Router();
router.use(authenticate);

router.get('/search', (req, res) => {

  request.get(`https://www.goodreads.com/search/index.xml?key=p69OrRMMYSw6go8otXnaAw&q=${req.query.q}`)
    .then(result => 
      parseString(result, (err, goodreadsResult) => {
        if(!!err) {

        } else {
          return res.json({ books: goodreadsResult.GoodreadsResponse.search[0].results[0].work.map(work => (
            {
              goodreadsId: work.best_book[0].id[0]._,
              title: work.best_book[0].title[0],
              authors: work.best_book[0].author[0].name[0],
              covers: [work.best_book[0].image_url[0]]
            })
          )})
        }
      }
      )
    );

  // res.json({
  //   books: [
  //     {
  //       goodreadsId: 1,
  //       title: '1984',
  //       authors: 'Orwell',
  //       covers: [
  //         'http://flavorwire.files.wordpress.com/2011/06/georgeorwellxobeygiantprintset-1984coverbyshepardfairey.jpeg ',
  //         'https://flavorwire.files.wordpress.com/2011/06/screen-shot-2011-06-25-at-8-13-27-am.jpg'
  //       ],
  //       pages: 198
  //     },
  //     {
  //       goodreadsId: 2,
  //       title: 'Tree Men in a Boat',
  //       authors: 'Jerome K. Jerome',
  //       covers: [
  //         'https://img1.od-cdn.com/ImageType-100/2389-1/%7B03B5CE87-A1A1-45E6-B0DC-282B1B2750B0%7DImg100.jpg',
  //         'https://pictures.abebooks.com/isbn/9780141305585-uk-300.jpg'
  //       ],
  //       pages: 256
  //     }
  //   ]
  // });
});

export default router;