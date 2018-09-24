import React, { Component } from 'react';
import './App.css';
import Comics from './components/Comics';

const data =
{
  "code": 200,
  "status": "Ok",
  "copyright": "© 2018 MARVEL",
  "attributionText": "Data provided by Marvel. © 2018 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
  "etag": "31df02c39bbeec619c4f0f6c856938e09df08d55",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 137,
    "count": 20,
    "results": [
      {
        "id": 59551,
        "digitalId": 0,
        "title": "Spider-Man (2016) #6 (Anka Mighty Men Variant)",
        "issueNumber": 6,
        "variantDescription": "Anka Mighty Men Variant",
        "description": null,
        "modified": "2016-07-21T17:22:23-0400",
        "isbn": "",
        "upc": "75960608314500621",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/59551",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/59551/spider-man_2016_6_anka_mighty_men_variant/anka_mighty_men_variant?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55700",
            "name": "Spider-Man (2016) #6"
          }
        ],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2029-12-31T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2016-07-13T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/30/56f46483efc4f",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/59551/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11575",
              "name": "Kris Anka",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            }
          ],
          "returned": 2
        },
        "characters": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/59551/characters",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/59551/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/129608",
              "name": "cover from Spider-Man (2016) #6 (ANKA MOP VARIANT)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/129609",
              "name": "story from Spider-Man (2016) #6 (ANKA MOP VARIANT)",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/59551/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 67034,
        "digitalId": 0,
        "title": "Spider-Man (2016) #240",
        "issueNumber": 240,
        "variantDescription": "",
        "description": "THE END OF AN ERA FOR MILES MORALES! Marvel Comics proudly presents the final issue of Bendis’ epic (bio-electric) run! Over seven years and across two universes, Miles Morales has been an Ultimate, a Web-Warrior, an Avenger and a Champion. A New Yorker, a student, a son and a friend. And whenever the city needed him (and one time when all of reality needed him), he was always SPIDER-MAN. Don’t miss the chance to see comics superstar Brian Michael Bendis bid farewell to one of his most beloved creations, and to glimpse what the future may hold for Miles Morales.",
        "modified": "2018-04-25T16:08:04-0400",
        "isbn": "",
        "upc": "75960608812624011",
        "diamondCode": "MAR180878",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "THE END OF AN ERA FOR MILES MORALES! Marvel Comics proudly presents the final issue of Bendis’ epic (bio-electric) run! Over seven years and across two universes, Miles Morales has been an Ultimate, a Web-Warrior, an Avenger and a Champion. A New Yorker, a student, a son and a friend. And whenever the city needed him (and one time when all of reality needed him), he was always SPIDER-MAN. Don’t miss the chance to see comics superstar Brian Michael Bendis bid farewell to one of his most beloved creations, and to glimpse what the future may hold for Miles Morales."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67034",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/67034/spider-man_2016_240?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-240/digital-comic/47935?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-05-02T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2018-04-09T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/80/5ae0cee2bb630",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/e/80/5ae0cee2bb630",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/50/5a96ff25de946",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/67034/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11610",
              "name": "David Marquez",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/582",
              "name": "Brian Reber",
              "role": "colorist"
            }
          ],
          "returned": 8
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/67034/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/67034/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/145247",
              "name": "cover from Spider-Man (2017) #240",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/145248",
              "name": "story from Spider-Man (2017) #240",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/67034/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 66698,
        "digitalId": 0,
        "title": "Spider-Man (2016) #239",
        "issueNumber": 239,
        "variantDescription": "",
        "description": "His Sinister Six is turning on him, and his nephew (SPIDER-MAN) can’t turn a blind eye to his crimes. The IRON SPIDER is going down! But how far? And how far will Miles go to avoid losing his uncle again? And you won’t believe what Miles’ parents are planning for his future!",
        "modified": "2018-03-30T18:16:44-0400",
        "isbn": "",
        "upc": "75960608812623911",
        "diamondCode": "FEB180845",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "His Sinister Six is turning on him, and his nephew (SPIDER-MAN) can’t turn a blind eye to his crimes. The IRON SPIDER is going down! But how far? And how far will Miles go to avoid losing his uncle again? And you won’t believe what Miles’ parents are planning for his future!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66698",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/66698/spider-man_2016_239?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-239/digital-comic/47704?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-04-04T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2018-03-12T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/5abd66379e195",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/5abd66379e195",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/5a72335ead8eb",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66698/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66698/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66698/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/144550",
              "name": "cover from Spider-Man (2017) #239",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/144551",
              "name": "story from Spider-Man (2017) #239",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66698/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 66454,
        "digitalId": 47484,
        "title": "Spider-Man (2016) #238",
        "issueNumber": 238,
        "variantDescription": "",
        "description": "The Hobgoblin doesn’t like following orders, but Iron Spider made a compelling case to join the Sinister Six. One of the perks? Killing Spider-Man!",
        "modified": "2018-02-28T18:12:56-0500",
        "isbn": "",
        "upc": "75960608812623811",
        "diamondCode": "",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "The Hobgoblin doesn’t like following orders, but Iron Spider made a compelling case to join the Sinister Six. One of the perks? Killing Spider-Man!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66454",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/66454/spider-man_2016_238?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-238/digital-comic/47484?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=47484&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/47484?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-03-07T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2018-02-12T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-09-10T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2018-03-07T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5a972b060feb8",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/5a972b060feb8",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/30/5a53bdbb4eeff",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66454/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66454/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009558",
              "name": "Sandman"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011265",
              "name": "Sinister Six"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 3
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66454/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/144064",
              "name": "cover from Spider-Man (2017) #238",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/144065",
              "name": "story from Spider-Man (2017) #238",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66454/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 66114,
        "digitalId": 47268,
        "title": "Spider-Man (2016) #237",
        "issueNumber": 237,
        "variantDescription": "",
        "description": "SANDMAN doesn’t trust the leader of the new Sinister Six, and he’s ready to take matters into his own sands! Can SPIDER-MAN contain him AND fend off IRON SPIDER, who won’t ignore his vendetta against Miles and his family any longer?",
        "modified": "2018-01-31T18:13:41-0500",
        "isbn": "",
        "upc": "75960608812623711",
        "diamondCode": "DEC170834",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SANDMAN doesn’t trust the leader of the new Sinister Six, and he’s ready to take matters into his own sands! Can SPIDER-MAN contain him AND fend off IRON SPIDER, who won’t ignore his vendetta against Miles and his family any longer?"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66114",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/66114/spider-man_2016_237?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-237/digital-comic/47268?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=47268&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/47268?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-02-07T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2018-01-15T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-08-13T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2018-02-07T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/5a7245a053a77",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/5a7245a053a77",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/00/5a1f274b67db0",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66114/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66114/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009558",
              "name": "Sandman"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66114/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/143354",
              "name": "cover from Spider-Man (2017) #237",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/143355",
              "name": "story from Spider-Man (2017) #237",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/66114/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 65740,
        "digitalId": 47023,
        "title": "Spider-Man (2016) #236",
        "issueNumber": 236,
        "variantDescription": "",
        "description": "SINISTER SIX REBORN Part 3. The Bombshells are back together?! Lana has been through so much and has grown into a hero, but with her mom back in the equation, things look bad for her. Know who they look even worse for? MILES MORALES, SPIDER-MAN! And with Electro in the mix as well…?",
        "modified": "2017-12-18T17:07:29-0500",
        "isbn": "",
        "upc": "75960608812623611",
        "diamondCode": "NOV170960",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SINISTER SIX REBORN Part 3. The Bombshells are back together?! Lana has been through so much and has grown into a hero, but with her mom back in the equation, things look bad for her. Know who they look even worse for? MILES MORALES, SPIDER-MAN! And with Electro in the mix as well…?"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65740",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/65740/spider-man_2016_236?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-236/digital-comic/47023?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=47023&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/47023?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2018-01-03T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2017-12-04T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-07-09T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2018-01-03T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/03/5a3830065f857",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/03/5a3830065f857",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/59f0f631d681a",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65740/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/582",
              "name": "Brian Reber",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65740/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009287",
              "name": "Electro"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011265",
              "name": "Sinister Six"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 3
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65740/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/142600",
              "name": "cover from Spider-Man (2017) #236",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/142601",
              "name": "story from Spider-Man (2017) #236",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65740/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 65302,
        "digitalId": 46763,
        "title": "Spider-Man (2016) #235",
        "issueNumber": 235,
        "variantDescription": "",
        "description": "SINISTER SIX REBORN Part 2! The mysterious new Iron Spider rolls into Miles Morales’ life with the destructive power of the new Sinister Six. Sadly for those close to Miles, it’s not just his life that’s going to get obliterated.",
        "modified": "2017-11-30T15:40:18-0500",
        "isbn": "",
        "upc": "75960608812623511",
        "diamondCode": "OCT170906",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SINISTER SIX REBORN Part 2! The mysterious new Iron Spider rolls into Miles Morales’ life with the destructive power of the new Sinister Six. Sadly for those close to Miles, it’s not just his life that’s going to get obliterated."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65302",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/65302/spider-man_2016_235?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-235/digital-comic/46763?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=46763&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/46763?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-12-06T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2017-11-06T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-06-11T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-12-06T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/5a1f35d784022",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/10/5a1f35d784022",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/59cbefe60e851",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65302/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65302/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65302/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/141710",
              "name": "cover from Spider-Man (2017) #235",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/141711",
              "name": "story from Spider-Man (2017) #235",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65302/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 65100,
        "digitalId": 46364,
        "title": "Spider-Man (2016) #234",
        "issueNumber": 234,
        "variantDescription": "",
        "description": "SINISTER SIX REBORN Part 1. Miles’ world has been shaken a lot lately, but nothing will compare to what the mysterious Iron-Spider and his brand new SINISTER SIX will do. Sandman, Hobgoblin, The Spot, Electro and Bombshell (?!) join this mystery villain to make Miles’ life a living hell. PLUS: Includes 3 bonus MARVEL PRIMER PAGES!",
        "modified": "2017-10-25T18:39:46-0400",
        "isbn": "",
        "upc": "75960608812623411",
        "diamondCode": "SEP170809",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SINISTER SIX REBORN Part 1. Miles’ world has been shaken a lot lately, but nothing will compare to what the mysterious Iron-Spider and his brand new SINISTER SIX will do. Sandman, Hobgoblin, The Spot, Electro and Bombshell (?!) join this mystery villain to make Miles’ life a living hell. PLUS: Includes 3 bonus MARVEL PRIMER PAGES!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65100",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/65100/spider-man_2016_234?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-234/digital-comic/46364?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=46364&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/46364?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-11-01T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-10-09T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-05-07T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-11-01T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/59f106fee4a6b",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/90/59f106fee4a6b",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/20/599f09bc2f2e7",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65100/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65100/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011265",
              "name": "Sinister Six"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65100/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/141292",
              "name": "cover from Spider-Man (2017) #234",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/141293",
              "name": "story from Spider-Man (2017) #234",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/65100/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 61078,
        "digitalId": 45964,
        "title": "Spider-Man (2016) #21",
        "issueNumber": 21,
        "variantDescription": "",
        "description": "Miles Morales has always had difficulty balancing his duties as Spider-Man with his studies at school, but his personal life is starting to suffer now, too! Between Ganke, Goldballs, Bombshell, and his mother and father, Miles is being pulled in a million directions at once… and he's starting to come apart at the seams.",
        "modified": "2017-09-27T17:19:13-0400",
        "isbn": "",
        "upc": "75960608314502111",
        "diamondCode": "AUG170944",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Miles Morales has always had difficulty balancing his duties as Spider-Man with his studies at school, but his personal life is starting to suffer now, too! Between Ganke, Goldballs, Bombshell, and his mother and father, Miles is being pulled in a million directions at once… and he's starting to come apart at the seams."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61078",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/61078/spider-man_2016_21?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-21/digital-comic/45964?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=45964&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/45964?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-10-04T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-09-11T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-04-09T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-10-04T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/00/59cc05eb76011",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/00/59cc05eb76011",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/40/597fa7b06587d",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61078/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/426",
              "name": "Jason Keith",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13033",
              "name": "Nico Leon",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            }
          ],
          "returned": 7
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61078/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017577",
              "name": "Ms. Marvel (Kamala Khan)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61078/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132609",
              "name": "cover from Spider-Man (2016) #21",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132610",
              "name": "story from Spider-Man (2016) #21",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61078/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 61077,
        "digitalId": 45711,
        "title": "Spider-Man (2016) #20",
        "issueNumber": 20,
        "variantDescription": "",
        "description": "Miles Morales, you're under arrest! If Miles' parents weren't already freaking out about their son, they are now!",
        "modified": "2017-08-25T13:55:29-0400",
        "isbn": "",
        "upc": "75960608314502011",
        "diamondCode": "JUL171080",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Miles Morales, you're under arrest! If Miles' parents weren't already freaking out about their son, they are now!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61077",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/61077/spider-man_2016_20?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-20/digital-comic/45711?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=45711&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/45711?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-09-06T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-08-14T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-03-12T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-09-06T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/599afcf562c97",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/80/599afcf562c97",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/80/597f98dda9027",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61077/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13033",
              "name": "Nico Leon",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            }
          ],
          "returned": 5
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61077/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61077/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132607",
              "name": "cover from Spider-Man (2016) #20",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132608",
              "name": "story from Spider-Man (2016) #20",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61077/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 61076,
        "digitalId": 45433,
        "title": "Spider-Man (2016) #19",
        "issueNumber": 19,
        "variantDescription": "",
        "description": "Miles has been wrestling with some inner demons and losing. Has he gone so far into the dark that he can't find his way back into the light?",
        "modified": "2017-07-28T17:38:35-0400",
        "isbn": "",
        "upc": "75960608314501911",
        "diamondCode": "JUN170935",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Miles has been wrestling with some inner demons and losing. Has he gone so far into the dark that he can't find his way back into the light?"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61076",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/61076/spider-man_2016_19?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-19/digital-comic/45433?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=45433&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/45433?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-08-02T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-07-10T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-02-05T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-08-02T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/596d1464d1db1",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/596d1464d1db1",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61076/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "painter (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/426",
              "name": "Jason Keith",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61076/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61076/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132605",
              "name": "cover from Spider-Man (2016) #19",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132606",
              "name": "story from Spider-Man (2016) #19",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61076/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 61075,
        "digitalId": 45227,
        "title": "Spider-Man (2016) #18",
        "issueNumber": 18,
        "variantDescription": "",
        "description": "Spider-Man finds out that Hammerhead isn't so funny after all. The NYC crime-land gang war is heating up, and Miles is getting a little too involved. This won't end well.",
        "modified": "2017-06-30T17:00:02-0400",
        "isbn": "",
        "upc": "75960608314501811",
        "diamondCode": "MAY170853",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Spider-Man finds out that Hammerhead isn't so funny after all. The NYC crime-land gang war is heating up, and Miles is getting a little too involved. This won't end well."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61075",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/61075/spider-man_2016_18?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-18/digital-comic/45227?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=45227&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/45227?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-07-05T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-06-12T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2018-01-08T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-07-05T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/5955393b1156b",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/5955393b1156b",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61075/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/10172",
              "name": "Vc Clayton Cowles",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61075/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61075/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132603",
              "name": "cover from Spider-Man (2016) #18",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132604",
              "name": "story from Spider-Man (2016) #18",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61075/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 61074,
        "digitalId": 44997,
        "title": "Spider-Man (2016) #17",
        "issueNumber": 17,
        "variantDescription": "",
        "description": "Spider-Man and his amazing friends!",
        "modified": "2017-06-02T15:22:23-0400",
        "isbn": "",
        "upc": "75960608314501711",
        "diamondCode": "APR171017",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Spider-Man and his amazing friends!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61074",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/61074/spider-man_2016_17?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-17/digital-comic/44997?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=44997&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/44997?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-06-07T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-05-15T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-12-11T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-06-07T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/593063222a71c",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/593063222a71c",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61074/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12976",
              "name": "Patrick Brown",
              "role": "penciller (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61074/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009334",
              "name": "Hammerhead"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61074/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132601",
              "name": "cover from Spider-Man (2016) #17",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132602",
              "name": "story from Spider-Man (2016) #17",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/61074/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55710,
        "digitalId": 44772,
        "title": "Spider-Man (2016) #16",
        "issueNumber": 16,
        "variantDescription": "",
        "description": "Spider-Man needs a win. After an insane universe-jumping crossover with SPIDER-GWEN and his tumultuous home life, Miles needs an honest-to-god Friendly Neighborhood Spider-Adventure. He’s got his sights set on the unfinished business with Black Cat! We never said Miles makes the best choices.",
        "modified": "2017-04-28T16:55:37-0400",
        "isbn": "",
        "upc": "75960608314501611",
        "diamondCode": "MAR171021",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Spider-Man needs a win. After an insane universe-jumping crossover with SPIDER-GWEN and his tumultuous home life, Miles needs an honest-to-god Friendly Neighborhood Spider-Adventure. He’s got his sights set on the unfinished business with Black Cat! We never said Miles makes the best choices."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55710",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55710/spider-man_2016_16?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-16/digital-comic/44772?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=44772&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/44772?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-05-03T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-04-10T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-11-06T00:00:00-0500"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-05-03T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5900ab7e0f5b7",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5900ab7e0f5b7",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55710/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12998",
              "name": "Oscar Bazaldua",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "penciler (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55710/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55710/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122463",
              "name": "cover from Spider-Man (2015) #16",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122464",
              "name": "story from Spider-Man (2015) #16",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55710/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55709,
        "digitalId": 44475,
        "title": "Spider-Man (2016) #15",
        "issueNumber": 15,
        "variantDescription": "",
        "description": "Coming out of the crossover with SPIDER-GWEN, Miles’ life is turned upside down. Rio Morales, Miles’s mother, is faced with a world she doesn’t know or understand. WHAT WILL SHE DO NOW?!",
        "modified": "2017-03-31T17:57:03-0400",
        "isbn": "",
        "upc": "75960608314501511",
        "diamondCode": "FEB170846",
        "ean": "",
        "issn": "1548-5056",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Coming out of the crossover with SPIDER-GWEN, Miles’ life is turned upside down. Rio Morales, Miles’s mother, is faced with a world she doesn’t know or understand. WHAT WILL SHE DO NOW?!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55709",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55709/spider-man_2016_15?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-15/digital-comic/44475?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=44475&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/44475?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-04-05T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-03-13T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-10-09T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-04-05T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/30/58dec73e538ee",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/30/58dec73e538ee",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 6,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55709/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12480",
              "name": "Szymon Kudranski",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12980",
              "name": "Vc Cory Petit",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "inker (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/360",
              "name": "Justin Ponsor",
              "role": "colorist"
            }
          ],
          "returned": 6
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55709/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55709/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122461",
              "name": "cover from Spider-Man (2015) #15",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122462",
              "name": "story from Spider-Man (2015) #15",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55709/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55708,
        "digitalId": 44315,
        "title": "Spider-Man (2016) #14",
        "issueNumber": 14,
        "variantDescription": "",
        "description": "\"SITTING IN A TREE\" PART 5! Someone's stolen a Web-Warriors interdimensional teleporter, and only Miles Morales and Gwen Stacy can get it back! They just need to find whoever took it, first.",
        "modified": "2017-03-10T14:21:16-0500",
        "isbn": "",
        "upc": "75960608314501411",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "\"SITTING IN A TREE\" PART 5! Someone's stolen a Web-Warriors interdimensional teleporter, and only Miles Morales and Gwen Stacy can get it back! They just need to find whoever took it, first."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55708",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55708/spider-man_2016_14?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-14/digital-comic/44315?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=44315&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/44315?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-03-15T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-02-15T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-09-18T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-03-15T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/58c17b9c3d332",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/58c17b9c3d332",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55708/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55708/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55708/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122459",
              "name": "cover from Spider-Man (2015) #14",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122460",
              "name": "story from Spider-Man (2015) #14",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55708/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55707,
        "digitalId": 44094,
        "title": "Spider-Man (2016) #13",
        "issueNumber": 13,
        "variantDescription": "",
        "description": "“SITTING IN A TREE” PART 3! Miles and Gwen’s adventure takes them back to Gwen’s dimension in pursuit of someone very important to Miles. But something about the pursuit puts our heroes at odds!",
        "modified": "2017-02-10T11:49:57-0500",
        "isbn": "",
        "upc": "75960608314501311",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "“SITTING IN A TREE” PART 3! Miles and Gwen’s adventure takes them back to Gwen’s dimension in pursuit of someone very important to Miles. But something about the pursuit puts our heroes at odds!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55707",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55707/spider-man_2016_13?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-13/digital-comic/44094?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=44094&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/44094?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-02-15T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2017-01-23T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-08-21T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-02-15T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/589deb5c4a277",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/589deb5c4a277",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/60/5880fe944e8dc",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55707/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55707/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55707/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122457",
              "name": "cover from Spider-Man (2015) #13",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122458",
              "name": "story from Spider-Man (2015) #13",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55707/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55706,
        "digitalId": 43841,
        "title": "Spider-Man (2016) #12",
        "issueNumber": 12,
        "variantDescription": "",
        "description": "THIS IS IT! THE MOMENT YOU’VE BEEN WAITING FOR! THE KISS HEARD ROUND THE WORLD! The two most talked about heroes give us something new to talk about in this Spider-Man/Spider-Gwen crossover. How did Miles and Gwen get here?!",
        "modified": "2018-02-13T17:30:06-0500",
        "isbn": "",
        "upc": "75960608314501211",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "THIS IS IT! THE MOMENT YOU’VE BEEN WAITING FOR! THE KISS HEARD ROUND THE WORLD! The two most talked about heroes give us something new to talk about in this Spider-Man/Spider-Gwen crossover. How did Miles and Gwen get here?!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55706",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55706/spider-man_2016_12?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-12/digital-comic/43841?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=43841&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/43841?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-01-11T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2016-12-05T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-07-17T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2017-01-11T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/60/585c248ef3e9f",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/60/585c248ef3e9f",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55706/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55706/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55706/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122455",
              "name": "cover from Spider-Man (2015) #12",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122456",
              "name": "story from Spider-Man (2015) #12",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55706/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55705,
        "digitalId": 43383,
        "title": "Spider-Man (2016) #11",
        "issueNumber": 11,
        "variantDescription": "",
        "description": "The untold history of MILES MORALES’ FATHER! What was life like for Jefferson Davis before his son was born…When he was an agent of S.H.I.E.L.D.?!",
        "modified": "2016-12-23T11:52:25-0500",
        "isbn": "",
        "upc": "75960608314501111",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "The untold history of MILES MORALES’ FATHER! What was life like for Jefferson Davis before his son was born…When he was an agent of S.H.I.E.L.D.?!"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55705",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55705/spider-man_2016_11?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-11/digital-comic/43383?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=43383&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/43383?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2016-12-28T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2016-11-23T00:00:00-0500"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-07-03T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2016-12-28T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/585aaa2d24f1d",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/d0/585aaa2d24f1d",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55705/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "penciller (cover)"
            }
          ],
          "returned": 3
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55705/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55705/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122453",
              "name": "cover from Spider-Man (2015) #11",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122454",
              "name": "story from Spider-Man (2015) #11",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55705/events",
          "items": [],
          "returned": 0
        }
      },
      {
        "id": 55704,
        "digitalId": 43276,
        "title": "Spider-Man (2016) #10",
        "issueNumber": 10,
        "variantDescription": "",
        "description": "CIVIL WAR II Aftermath!  The events of Civil War II have made Miles a target and will change the way the Marvel Universe looks at Spider-Man forever.",
        "modified": "2016-12-08T11:54:34-0500",
        "isbn": "",
        "upc": "75960608314501011",
        "diamondCode": "",
        "ean": "",
        "issn": "",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "CIVIL WAR II Aftermath!  The events of Civil War II have made Miles a target and will change the way the Marvel Universe looks at Spider-Man forever."
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55704",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/55704/spider-man_2016_10?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Spider-Man-10/digital-comic/43276?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "reader",
            "url": "http://marvel.com/digitalcomics/view.htm?iid=43276&utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          },
          {
            "type": "inAppLink",
            "url": "https://applink.marvel.com/issue/43276?utm_campaign=apiRef&utm_source=b2af71610df1c33b5afc8925e856c37e"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20508",
          "name": "Spider-Man (2016 - 2018)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2016-12-14T00:00:00-0500"
          },
          {
            "type": "focDate",
            "date": "2016-10-19T00:00:00-0400"
          },
          {
            "type": "unlimitedDate",
            "date": "2017-06-19T00:00:00-0400"
          },
          {
            "type": "digitalPurchaseDate",
            "date": "2016-12-14T00:00:00-0500"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          },
          {
            "type": "digitalPurchasePrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/5845cff3050e1",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/5845cff3050e1",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55704/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/24",
              "name": "Brian Michael Bendis",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12696",
              "name": "Nico Leon",
              "role": "penciller"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/4300",
              "name": "Nick Lowe",
              "role": "editor"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9408",
              "name": "Sara Pichelli",
              "role": "penciller (cover)"
            }
          ],
          "returned": 4
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55704/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016181",
              "name": "Spider-Man (Miles Morales)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55704/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122451",
              "name": "cover from Spider-Man (2015) #10",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122452",
              "name": "story from Spider-Man (2015) #10",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/55704/events",
          "items": [],
          "returned": 0
        }
      }
    ]
  }
};


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>{data.data.results[0].title}</h1>
        </div>
    );
  }
}

export default App;
