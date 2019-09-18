import _ from 'lodash'
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({ payload: users });
});

/* GET users listing. */
router.get('/:user_id', function(req, res, next) {
  res.send({ payload: _.find(users, (user => user._id === req.params.user_id)) });
});

/* Put users listing. */
router.put('/:user_id', function(req, res, next) {
  let user = _.find(users, (user => user._id === req.params.user_id)) 
  _.assign(user, req.body);
  res.send({ payload: user});
});

/* Post users listing. */
router.post('/', function(req, res, next) {
  res.send({ payload: req.body });
});

router.delete('/:user_id', function(req, res, next) {
  res.send({ payload: req.body });
});

const users = [
  {
    "_id": "5d82759099d31f4c71689833",
    "index": 0,
    "guid": "b7e71442-66c1-44e6-b327-866dd044a615",
    "isActive": false,
    "balance": "$1,781.25",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Jewell Mcleod",
    "gender": "female",
    "company": "EMTRAK",
    "email": "jewellmcleod@emtrak.com",
    "phone": "+1 (969) 486-3408",
    "address": "601 Beach Place, Jacumba, Ohio, 4314",
    "about": "Cillum irure nisi laboris id velit. Cillum tempor laborum exercitation commodo minim officia minim aliqua. Ut fugiat elit nulla ut dolor ea aute ipsum nulla do fugiat in. Non aliqua tempor dolore voluptate esse proident duis veniam elit culpa et incididunt aute in. Ea aliquip enim eiusmod sint do consequat minim nostrud consequat culpa dolor labore.\r\n",
    "registered": "2015-06-30T10:55:48 -02:00",
    "latitude": 19.351264,
    "longitude": -85.973271,
    "tags": [
      "consectetur",
      "dolor",
      "est",
      "cupidatat",
      "eu",
      "et",
      "veniam"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Short Turner"
      },
      {
        "id": 1,
        "name": "Silvia Gordon"
      },
      {
        "id": 2,
        "name": "Ana Mullen"
      }
    ],
    "greeting": "Hello, Jewell Mcleod! You have 2 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5d827590320e113ad2dd8006",
    "index": 1,
    "guid": "6b9b7532-ed97-4b8b-9a68-e3b9ede524f2",
    "isActive": true,
    "balance": "$3,928.84",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "green",
    "name": "Gwendolyn Wilcox",
    "gender": "female",
    "company": "INSURON",
    "email": "gwendolynwilcox@insuron.com",
    "phone": "+1 (935) 476-3335",
    "address": "771 Cove Lane, Marne, New Hampshire, 5998",
    "about": "Laboris culpa et amet commodo aliquip duis proident. Elit cillum nulla velit dolor reprehenderit incididunt reprehenderit est in. Non ad ut minim excepteur ipsum non do commodo. Velit ullamco fugiat ut esse. Cupidatat qui ut deserunt ex consequat voluptate dolore eiusmod anim voluptate ullamco aute ad. Consectetur consequat et sint incididunt tempor id id proident fugiat magna voluptate. Occaecat labore ullamco aute non id nisi ullamco magna cillum.\r\n",
    "registered": "2014-03-03T01:54:39 -01:00",
    "latitude": -54.045908,
    "longitude": 156.386427,
    "tags": [
      "proident",
      "ullamco",
      "pariatur",
      "minim",
      "culpa",
      "excepteur",
      "excepteur"
    ],
    "friends": [
      {
        "id": 0,
        "name": "French Bright"
      },
      {
        "id": 1,
        "name": "Clarice Goodwin"
      },
      {
        "id": 2,
        "name": "Carissa Gibbs"
      }
    ],
    "greeting": "Hello, Gwendolyn Wilcox! You have 1 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5d827590979195a48da9ab9b",
    "index": 2,
    "guid": "f59e0ceb-f6d2-42dc-aeb6-b37bb65773ac",
    "isActive": true,
    "balance": "$1,493.26",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": "Mamie Woods",
    "gender": "female",
    "company": "KYAGURU",
    "email": "mamiewoods@kyaguru.com",
    "phone": "+1 (960) 530-3913",
    "address": "331 Rugby Road, Wacissa, Kentucky, 943",
    "about": "Magna labore aliquip ullamco voluptate ad. Labore et eu incididunt adipisicing aliquip. Commodo ea amet tempor ut cillum in mollit exercitation velit dolore laboris aliqua.\r\n",
    "registered": "2016-01-22T11:47:29 -01:00",
    "latitude": 42.986346,
    "longitude": -87.912701,
    "tags": [
      "ut",
      "aliquip",
      "adipisicing",
      "ea",
      "reprehenderit",
      "aliqua",
      "ipsum"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Gena Cannon"
      },
      {
        "id": 1,
        "name": "Hazel Carver"
      },
      {
        "id": 2,
        "name": "Lessie Lopez"
      }
    ],
    "greeting": "Hello, Mamie Woods! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5d8275905e68cd27ef34e150",
    "index": 3,
    "guid": "e08c00c2-0c58-4088-a386-d88171ae73a2",
    "isActive": false,
    "balance": "$1,241.17",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "brown",
    "name": "Bonnie Molina",
    "gender": "female",
    "company": "BOVIS",
    "email": "bonniemolina@bovis.com",
    "phone": "+1 (851) 425-3469",
    "address": "800 Haring Street, Colton, Marshall Islands, 9883",
    "about": "Ad deserunt ea voluptate duis. Incididunt reprehenderit ipsum est velit et sunt aliquip labore sit proident est proident officia occaecat. Adipisicing Lorem excepteur sint velit exercitation deserunt.\r\n",
    "registered": "2015-02-17T11:43:18 -01:00",
    "latitude": -83.080803,
    "longitude": 8.724383,
    "tags": [
      "est",
      "elit",
      "labore",
      "qui",
      "in",
      "dolor",
      "consequat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bender Knowles"
      },
      {
        "id": 1,
        "name": "Denise Carney"
      },
      {
        "id": 2,
        "name": "Mcguire Woodard"
      }
    ],
    "greeting": "Hello, Bonnie Molina! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5d82759027e6ff53bb401114",
    "index": 4,
    "guid": "051f1bf3-ddce-48bf-bc2f-0093f499a72f",
    "isActive": false,
    "balance": "$2,582.11",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Alfreda Gilmore",
    "gender": "female",
    "company": "ARCHITAX",
    "email": "alfredagilmore@architax.com",
    "phone": "+1 (913) 411-3630",
    "address": "552 Whitwell Place, Woodlands, Washington, 5674",
    "about": "Dolore laborum veniam ullamco aliquip. Id ipsum ut aliquip voluptate ea enim culpa elit et quis dolore ullamco. In consequat cupidatat adipisicing magna ipsum eu elit aliqua nisi eiusmod. Commodo eu ea mollit qui laborum aliqua proident in. Incididunt velit quis consectetur sunt sunt veniam labore mollit.\r\n",
    "registered": "2018-01-04T05:37:36 -01:00",
    "latitude": -75.748909,
    "longitude": 154.184287,
    "tags": [
      "anim",
      "excepteur",
      "ad",
      "duis",
      "non",
      "proident",
      "mollit"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mullins Morton"
      },
      {
        "id": 1,
        "name": "Matilda Farrell"
      },
      {
        "id": 2,
        "name": "Hawkins Morrison"
      }
    ],
    "greeting": "Hello, Alfreda Gilmore! You have 5 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5d8275908da873bef58f1f43",
    "index": 5,
    "guid": "7fd85492-e484-4be7-9ca4-81fe8cbf5e30",
    "isActive": false,
    "balance": "$1,264.96",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Haley Hays",
    "gender": "male",
    "company": "VORATAK",
    "email": "haleyhays@voratak.com",
    "phone": "+1 (997) 473-2261",
    "address": "112 Remsen Street, Celeryville, Tennessee, 5557",
    "about": "Officia ullamco ipsum consectetur in dolor minim labore irure pariatur incididunt laboris exercitation voluptate. Reprehenderit nostrud labore ullamco ipsum eiusmod. Aliqua voluptate sunt nostrud reprehenderit velit cupidatat duis culpa adipisicing velit duis in tempor. In sit nisi laborum consectetur adipisicing. Reprehenderit nostrud in excepteur minim eiusmod nisi est deserunt ipsum amet sit velit excepteur aliqua.\r\n",
    "registered": "2014-08-28T02:45:06 -02:00",
    "latitude": -75.820067,
    "longitude": 159.473032,
    "tags": [
      "aliquip",
      "ullamco",
      "deserunt",
      "quis",
      "ullamco",
      "est",
      "minim"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Holden Moon"
      },
      {
        "id": 1,
        "name": "Violet Rutledge"
      },
      {
        "id": 2,
        "name": "House Dean"
      }
    ],
    "greeting": "Hello, Haley Hays! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
export default router;
