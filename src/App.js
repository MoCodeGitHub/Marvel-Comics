import React, { Component } from 'react';
import './App.css';

const comic =
{
  "code": 200,
  "status": "Ok",
  "copyright": "© 2018 MARVEL",
  "attributionText": "Data provided by Marvel. © 2018 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
  "etag": "bf0aea65b856df6257fb48dea8f708f28c49d980",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 68149,
        "digitalId": 0,
        "title": "Deadpool (2018) #4",
        "issueNumber": 4,
        "variantDescription": "",
        "description": "A merc job leads Deadpool to one of the strangest corners of the Marvel U…WEIRDWORLD! Not only that, he’s fallen into a TIME STORM! Oh no, not a Time Storm!!! Anything but a Time Storm!!! Wait…what’s a Time Storm? Monsters! Sorceresses! Man-Things! Romance! Time Storms! THIS ISSUE HAS IT ALL!",
        "modified": "2018-08-30T14:41:31-0400",
        "isbn": "",
        "upc": "75960609035800411",
        "diamondCode": "JUL181118",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "A merc job leads Deadpool to one of the strangest corners of the Marvel U…WEIRDWORLD! Not only that, he’s fallen into a TIME STORM! Oh no, not a Time Storm!!! Anything but a Time Storm!!! Wait…what’s a Time Storm? Monsters! Sorceresses! Man-Things! Romance! Time Storms! THIS ISSUE HAS IT ALL!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/68149",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/68149/deadpool_2018_4?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Deadpool-4/digital-comic/49112?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/24294",
          "name": "Deadpool (2018 - Present)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-09-05T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2018-08-13T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/5b8829ad386be",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/00/5b8829ad386be",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/60/5b33dab29a0da",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68149/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/974",
              "name": "Jeff Eckleberry",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12298",
              "name": "Scott Hepburn",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12996",
              "name": "Ian Herring",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4989",
              "name": "Nic Klein",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11921",
              "name": "Jacob Thomas",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/7190",
              "name": "Skottie Young",
              "role": "writer"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68149/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
              "name": "Deadpool"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68149/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/148377",
              "name": "cover from Deadpool (2018) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/148378",
              "name": "story from Deadpool (2018) #4",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/68149/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>{comic.data.results[0].title}</h1>
          <img src="http://i.annihil.us/u/prod/marvel/i/mg/a/00/5b8829ad386be.jpg"/>
        </div>
    );
  }
}

export default App;
