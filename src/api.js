var fs = require('fs');

var messages = [
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"npr-7da8d32de0292fde8eee0769c0619470",
        "about":"",
        "name":"Fixno Jones",
        "url":"",
        "isAnonymous":false,
        "rep":1.2936029999999998,
        "profileUrl":"http://disqus.com/npr-7da8d32de0292fde8eee0769c0619470/",
        "reputation":1.2936029999999998,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2014-06-28T16:38:52",
        "id":"112436698",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-7da8d32de0292fde8eee0769c0619470.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-7da8d32de0292fde8eee0769c0619470.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-7da8d32de0292fde8eee0769c0619470.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"I Guess they can change their name to Fed RX.",
     "createdAt":"2014-07-18T00:15:20",
     "id":"1490630334",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":14,
     "isEdited":false,
     "message":"<p>I Guess they can change their name to Fed RX.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":14
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"disqus_dmjsWNyOiQ",
        "about":"",
        "name":"Justin Bieber",
        "url":"",
        "isAnonymous":false,
        "rep":0.802414,
        "profileUrl":"http://disqus.com/disqus_dmjsWNyOiQ/",
        "reputation":0.802414,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-12-23T03:08:59",
        "id":"87572989",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/disqus_dmjsWNyOiQ.jpg",
              "cache":"//a.disquscdn.com/uploads/users/8757/2989/avatar32.jpg?1388100377"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/disqus_dmjsWNyOiQ.jpg",
           "cache":"//a.disquscdn.com/uploads/users/8757/2989/avatar92.jpg?1388100377",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/disqus_dmjsWNyOiQ.jpg",
              "cache":"//a.disquscdn.com/uploads/users/8757/2989/avatar92.jpg?1388100377"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":1,
     "raw_message":"ahahah they cant catch the real ppl behind the booming internet drug business and now're tryina pin it in any1 they can.\n\ngo usa haha",
     "createdAt":"2014-07-18T00:27:56",
     "id":"1490645409",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":9,
     "isEdited":false,
     "message":"<p>ahahah they cant catch the real ppl behind the booming internet drug business and now're tryina pin it in any1 they can.</p><p>go usa haha</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":8
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"npr-e6b6f3ecb0ccd48647050a31746c63ca",
        "about":"",
        "name":"Lawrence Cotnam",
        "url":"",
        "isAnonymous":false,
        "rep":1.2444499999999998,
        "profileUrl":"http://disqus.com/npr-e6b6f3ecb0ccd48647050a31746c63ca/",
        "reputation":1.2444499999999998,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-07-15T03:06:50",
        "id":"62384842",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-e6b6f3ecb0ccd48647050a31746c63ca.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-e6b6f3ecb0ccd48647050a31746c63ca.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-e6b6f3ecb0ccd48647050a31746c63ca.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"Another case of shooting the messenger.  *yawn*",
     "createdAt":"2014-07-18T00:37:34",
     "id":"1490656064",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":2,
     "isEdited":false,
     "message":"<p>Another case of shooting the messenger.  *yawn*</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":2
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"npr-6bed53b645682502e3bd08a5a748a26d",
        "about":"",
        "name":"TravelingOne",
        "url":"",
        "isAnonymous":false,
        "rep":1.423865,
        "profileUrl":"http://disqus.com/npr-6bed53b645682502e3bd08a5a748a26d/",
        "reputation":1.423865,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-08-30T14:42:32",
        "id":"70574437",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-6bed53b645682502e3bd08a5a748a26d.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-6bed53b645682502e3bd08a5a748a26d.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-6bed53b645682502e3bd08a5a748a26d.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"Maybe the government should try to regulate drug costs then people wouldn't have to get these \"illegal\" drugs from Canada (or wherever).   Other countries limit what can be charged for prescription drugs.  \n\n\"According to The New England Journal of Medicine, the percentage of the personal health care dollar spent on prescription drugs has grown faster than any other segment, including doctor and hospital bills, partly because the prices of prescription drugs have risen an average of 17 percent a year in the last few years. That is over 1,000 percent higher than the 1998 inflation rate of 1.6 percent. \"\n\nand\n\nA lead story in USA Today asked, \u201cWhy does the allergy drug Claritin cost almost $2 a pill in the United States but only 41 cents in Great Britain?\u201d",
     "createdAt":"2014-07-18T01:15:25",
     "id":"1490696191",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":8,
     "isEdited":true,
     "message":"<p>Maybe the government should try to regulate drug costs then people wouldn't have to get these \"illegal\" drugs from Canada (or wherever).   Other countries limit what can be charged for prescription drugs.</p><p>\"According to The New England Journal of Medicine, the percentage of the personal health care dollar spent on prescription drugs has grown faster than any other segment, including doctor and hospital bills, partly because the prices of prescription drugs have risen an average of 17 percent a year in the last few years. That is over 1,000 percent higher than the 1998 inflation rate of 1.6 percent. \"</p><p>and</p><p>A lead story in USA Today asked, \u201cWhy does the allergy drug Claritin cost almost $2 a pill in the United States but only 41 cents in Great Britain?\u201d</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":8
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490696191",
     "author":{
        "username":"denniscsatari",
        "about":"Philosopher",
        "name":"Mr Natural",
        "url":"",
        "isAnonymous":false,
        "rep":3.648256000000001,
        "profileUrl":"http://disqus.com/denniscsatari/",
        "reputation":3.648256000000001,
        "location":"I'm everywhere!",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-02-25T01:46:26",
        "id":"44388368",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar32.jpg?1404601795"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
           "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"There are bus excursions for seniors in the New England States that travel to Canada for the express purpose of having prescriptions filled!",
     "createdAt":"2014-07-18T02:11:18",
     "id":"1490761171",
     "thread":"2852413964",
     "depth":1,
     "numReports":0,
     "likes":1,
     "isEdited":false,
     "message":"<p>There are bus excursions for seniors in the New England States that travel to Canada for the express purpose of having prescriptions filled!</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":1
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"denniscsatari",
        "about":"Philosopher",
        "name":"Mr Natural",
        "url":"",
        "isAnonymous":false,
        "rep":3.648256000000001,
        "profileUrl":"http://disqus.com/denniscsatari/",
        "reputation":3.648256000000001,
        "location":"I'm everywhere!",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-02-25T01:46:26",
        "id":"44388368",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar32.jpg?1404601795"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
           "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"Are we blaming the delivery company, rather than the drug distributor? How misguided is that!?",
     "createdAt":"2014-07-18T01:19:56",
     "id":"1490701124",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":2,
     "isEdited":false,
     "message":"<p>Are we blaming the delivery company, rather than the drug distributor? How misguided is that!?</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":2
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490701124",
     "author":{
        "username":"DavidsComments",
        "about":"",
        "name":"DavidsComments",
        "url":"",
        "isAnonymous":false,
        "rep":1.658973,
        "profileUrl":"http://disqus.com/DavidsComments/",
        "reputation":1.658973,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2012-11-22T00:17:55",
        "id":"37052049",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/DavidsComments.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3705/2049/avatar32.jpg?1379538180"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/DavidsComments.jpg",
           "cache":"//a.disquscdn.com/uploads/users/3705/2049/avatar92.jpg?1379538180",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/DavidsComments.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3705/2049/avatar92.jpg?1379538180"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"It isn't \"blaming\" them. It is a move to make it financially unprofitable for them to serve customers that may expose FedEx to risk. All the other shippers will take note. This will make it much more expensive for the real targets to ship their product to their customers. ",
     "createdAt":"2014-07-18T02:04:06",
     "id":"1490753967",
     "thread":"2852413964",
     "depth":1,
     "numReports":0,
     "likes":0,
     "isEdited":true,
     "message":"<p>It isn't \"blaming\" them. It is a move to make it financially unprofitable for them to serve customers that may expose FedEx to risk. All the other shippers will take note. This will make it much more expensive for the real targets to ship their product to their customers. </p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490753967",
     "author":{
        "username":"denniscsatari",
        "about":"Philosopher",
        "name":"Mr Natural",
        "url":"",
        "isAnonymous":false,
        "rep":3.648256000000001,
        "profileUrl":"http://disqus.com/denniscsatari/",
        "reputation":3.648256000000001,
        "location":"I'm everywhere!",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-02-25T01:46:26",
        "id":"44388368",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar32.jpg?1404601795"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
           "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"It will also make it more expensive for EVERYONE to ship parcels. I don't think FedEx is culpable at all! You declare what you're shipping and fill out a form to that effect and your parcel is shipped. To charge FedEx is to assign supernatural powers to the delivery company.",
     "createdAt":"2014-07-18T02:05:47",
     "id":"1490755614",
     "thread":"2852413964",
     "depth":2,
     "numReports":0,
     "likes":1,
     "isEdited":true,
     "message":"<p>It will also make it more expensive for EVERYONE to ship parcels. I don't think FedEx is culpable at all! You declare what you're shipping and fill out a form to that effect and your parcel is shipped. To charge FedEx is to assign supernatural powers to the delivery company.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":1
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490753967",
     "author":{
        "username":"npr-fecc891ffdfa47ad7fc013946383f5f3",
        "about":"",
        "name":"Matthew Fry",
        "url":"",
        "isAnonymous":false,
        "rep":2.56355,
        "profileUrl":"http://disqus.com/npr-fecc891ffdfa47ad7fc013946383f5f3/",
        "reputation":2.56355,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2012-09-18T02:59:17",
        "id":"32349645",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-fecc891ffdfa47ad7fc013946383f5f3.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-fecc891ffdfa47ad7fc013946383f5f3.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-fecc891ffdfa47ad7fc013946383f5f3.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"Does this mean that FedEx (and UPS and USPS) are supposed to know and pass judgement on the legality of all businesses and individuals using their services to ship packages?  This seems unworkable to me.",
     "createdAt":"2014-07-18T02:09:05",
     "id":"1490758937",
     "thread":"2852413964",
     "depth":2,
     "numReports":0,
     "likes":1,
     "isEdited":false,
     "message":"<p>Does this mean that FedEx (and UPS and USPS) are supposed to know and pass judgement on the legality of all businesses and individuals using their services to ship packages?  This seems unworkable to me.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":1
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490758937",
     "author":{
        "username":"denniscsatari",
        "about":"Philosopher",
        "name":"Mr Natural",
        "url":"",
        "isAnonymous":false,
        "rep":3.648256000000001,
        "profileUrl":"http://disqus.com/denniscsatari/",
        "reputation":3.648256000000001,
        "location":"I'm everywhere!",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-02-25T01:46:26",
        "id":"44388368",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar32.jpg?1404601795"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
           "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"No kidding!",
     "createdAt":"2014-07-18T02:09:25",
     "id":"1490759273",
     "thread":"2852413964",
     "depth":3,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>No kidding!</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"npr-f12240e6e81cea6010f7f0acc43c0f52",
        "about":"",
        "name":"komrade bob",
        "url":"",
        "isAnonymous":false,
        "rep":1.212982,
        "profileUrl":"http://disqus.com/npr-f12240e6e81cea6010f7f0acc43c0f52/",
        "reputation":1.212982,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2012-09-25T20:27:27",
        "id":"32958793",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-f12240e6e81cea6010f7f0acc43c0f52.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-f12240e6e81cea6010f7f0acc43c0f52.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-f12240e6e81cea6010f7f0acc43c0f52.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"I'm shocked. Shocked I tell you, to find illegal pharmacies using FedEx to ship drugs. Shocked!",
     "createdAt":"2014-07-18T01:53:38",
     "id":"1490739063",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":1,
     "isEdited":false,
     "message":"<p>I'm shocked. Shocked I tell you, to find illegal pharmacies using FedEx to ship drugs. Shocked!</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":1
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"npr-c4c016076b65c86779342a15352625f1",
        "about":"",
        "name":"Nicholas BeJeaux",
        "url":"",
        "isAnonymous":false,
        "rep":1.2374049999999999,
        "profileUrl":"http://disqus.com/npr-c4c016076b65c86779342a15352625f1/",
        "reputation":1.2374049999999999,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2012-09-18T04:11:29",
        "id":"32360011",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-c4c016076b65c86779342a15352625f1.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3236/11/avatar32.jpg?1398191973"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/npr-c4c016076b65c86779342a15352625f1.jpg",
           "cache":"//a.disquscdn.com/uploads/users/3236/11/avatar92.jpg?1398191973",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-c4c016076b65c86779342a15352625f1.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3236/11/avatar92.jpg?1398191973"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"I wonder what Chuck Noland thinks about this. Wilson too.",
     "createdAt":"2014-07-18T01:57:53",
     "id":"1490747675",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>I wonder what Chuck Noland thinks about this. Wilson too.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"disqus_svxSE9ILPg",
        "about":"",
        "name":"Jim",
        "url":"",
        "isAnonymous":false,
        "rep":1.383718,
        "profileUrl":"http://disqus.com/disqus_svxSE9ILPg/",
        "reputation":1.383718,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-07-03T02:09:01",
        "id":"60370669",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/disqus_svxSE9ILPg.jpg",
              "cache":"//a.disquscdn.com/uploads/users/6037/669/avatar32.jpg?1405082880"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/disqus_svxSE9ILPg.jpg",
           "cache":"//a.disquscdn.com/uploads/users/6037/669/avatar92.jpg?1405082880",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/disqus_svxSE9ILPg.jpg",
              "cache":"//a.disquscdn.com/uploads/users/6037/669/avatar92.jpg?1405082880"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"Can't have Americans buying cheap drugs, can we.  No, we've got to pay the obscene prices Big Pharma charges while the rest of the world pays 90% less.  Thanks for protecting us again, US Government.",
     "createdAt":"2014-07-18T02:03:00",
     "id":"1490752816",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":4,
     "isEdited":false,
     "message":"<p>Can't have Americans buying cheap drugs, can we.  No, we've got to pay the obscene prices Big Pharma charges while the rest of the world pays 90% less.  Thanks for protecting us again, US Government.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":4
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490752816",
     "author":{
        "username":"npr-202148e2e03a94b5c9357ba89a4cc700",
        "about":"",
        "name":"jim brown",
        "url":"",
        "isAnonymous":false,
        "rep":1.2417099999999999,
        "profileUrl":"http://disqus.com/npr-202148e2e03a94b5c9357ba89a4cc700/",
        "reputation":1.2417099999999999,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2012-09-18T03:17:04",
        "id":"32352269",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-202148e2e03a94b5c9357ba89a4cc700.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3235/2269/avatar32.jpg?1404928799"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/npr-202148e2e03a94b5c9357ba89a4cc700.jpg",
           "cache":"//a.disquscdn.com/uploads/users/3235/2269/avatar92.jpg?1404928799",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-202148e2e03a94b5c9357ba89a4cc700.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3235/2269/avatar92.jpg?1404928799"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":2,
     "raw_message":"Elizabeth Warren and her master Barack are both on big pharma's payroll just like the banks and every other big money corporate lobby.",
     "createdAt":"2014-07-18T02:08:25",
     "id":"1490758308",
     "thread":"2852413964",
     "depth":1,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>Elizabeth Warren and her master Barack are both on big pharma's payroll just like the banks and every other big money corporate lobby.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":-2
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490758308",
     "author":{
        "username":"npr-200c01d4091718f6fe722ec83bd4ab45",
        "about":"",
        "name":"Shiratori90",
        "url":"",
        "isAnonymous":false,
        "rep":1.096668,
        "profileUrl":"http://disqus.com/npr-200c01d4091718f6fe722ec83bd4ab45/",
        "reputation":1.096668,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-11-09T03:07:25",
        "id":"81054339",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-200c01d4091718f6fe722ec83bd4ab45.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-200c01d4091718f6fe722ec83bd4ab45.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-200c01d4091718f6fe722ec83bd4ab45.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"Trolls will keep on trolling......",
     "createdAt":"2014-07-18T02:22:08",
     "id":"1490771750",
     "thread":"2852413964",
     "depth":2,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>Trolls will keep on trolling......</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490758308",
     "author":{
        "username":"npr-93c61dd1c9d026d6b2cefdfcaf865118",
        "about":"",
        "name":"tom tolles",
        "url":"",
        "isAnonymous":false,
        "rep":1.467145,
        "profileUrl":"http://disqus.com/npr-93c61dd1c9d026d6b2cefdfcaf865118/",
        "reputation":1.467145,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-03-13T18:00:30",
        "id":"45600063",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-93c61dd1c9d026d6b2cefdfcaf865118.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar32.png"
           },
           "isCustom":false,
           "permalink":"http://disqus.com/api/users/avatars/npr-93c61dd1c9d026d6b2cefdfcaf865118.jpg",
           "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-93c61dd1c9d026d6b2cefdfcaf865118.jpg",
              "cache":"//a.disquscdn.com/1405376578/images/noavatar92.png"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"In case you neglected to fully read the article, this has been going on for decades. Probably from Reagan on...Maybe longer. Also, in case you haven't read a history book, or seen a news program other than fox, there were several presidents from both parties in those several decades. Please go away...fox & rush need you",
     "createdAt":"2014-07-18T02:28:16",
     "id":"1490777624",
     "thread":"2852413964",
     "depth":2,
     "numReports":0,
     "likes":1,
     "isEdited":false,
     "message":"<p>In case you neglected to fully read the article, this has been going on for decades. Probably from Reagan on...Maybe longer. Also, in case you haven't read a history book, or seen a news program other than fox, there were several presidents from both parties in those several decades. Please go away...fox &amp; rush need you</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":1
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490752816",
     "author":{
        "username":"denniscsatari",
        "about":"Philosopher",
        "name":"Mr Natural",
        "url":"",
        "isAnonymous":false,
        "rep":3.648256000000001,
        "profileUrl":"http://disqus.com/denniscsatari/",
        "reputation":3.648256000000001,
        "location":"I'm everywhere!",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-02-25T01:46:26",
        "id":"44388368",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar32.jpg?1404601795"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
           "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"I am from the government, and I'm here to help!",
     "createdAt":"2014-07-18T02:08:40",
     "id":"1490758554",
     "thread":"2852413964",
     "depth":1,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>I am from the government, and I'm here to help!</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":null,
     "author":{
        "username":"npr-b5e0d5250f380beaf7a29b0e5ca13696",
        "about":"",
        "name":"Rick P",
        "url":"",
        "isAnonymous":false,
        "rep":8.417475,
        "profileUrl":"http://disqus.com/npr-b5e0d5250f380beaf7a29b0e5ca13696/",
        "reputation":8.417475,
        "location":"",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2012-09-18T04:09:18",
        "id":"32359696",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/npr-b5e0d5250f380beaf7a29b0e5ca13696.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3235/9696/avatar32.jpg?1405020773"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/npr-b5e0d5250f380beaf7a29b0e5ca13696.jpg",
           "cache":"//a.disquscdn.com/uploads/users/3235/9696/avatar92.jpg?1405020773",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/npr-b5e0d5250f380beaf7a29b0e5ca13696.jpg",
              "cache":"//a.disquscdn.com/uploads/users/3235/9696/avatar92.jpg?1405020773"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"The U.S. has to be among the stupidest of all countries.",
     "createdAt":"2014-07-18T02:26:45",
     "id":"1490776179",
     "thread":"2852413964",
     "depth":0,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>The U.S. has to be among the stupidest of all countries.</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  },
  {
     "isFlagged":false,
     "forum":"npr2way",
     "parent":"1490776179",
     "author":{
        "username":"denniscsatari",
        "about":"Philosopher",
        "name":"Mr Natural",
        "url":"",
        "isAnonymous":false,
        "rep":3.648256000000001,
        "profileUrl":"http://disqus.com/denniscsatari/",
        "reputation":3.648256000000001,
        "location":"I'm everywhere!",
        "isPrivate":false,
        "isPrimary":true,
        "joinedAt":"2013-02-25T01:46:26",
        "id":"44388368",
        "avatar":{
           "small":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar32.jpg?1404601795"
           },
           "isCustom":true,
           "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
           "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795",
           "large":{
              "permalink":"http://disqus.com/api/users/avatars/denniscsatari.jpg",
              "cache":"//a.disquscdn.com/uploads/users/4438/8368/avatar92.jpg?1404601795"
           }
        }
     },
     "media":[

     ],
     "isDeleted":false,
     "isApproved":true,
     "dislikes":0,
     "raw_message":"It certainly is trying hard to be leader in that category!",
     "createdAt":"2014-07-18T02:27:19",
     "id":"1490776706",
     "thread":"2852413964",
     "depth":1,
     "numReports":0,
     "likes":0,
     "isEdited":false,
     "message":"<p>It certainly is trying hard to be leader in that category!</p>",
     "isSpam":false,
     "isHighlighted":false,
     "points":0
  }
];

messages = messages.reverse()

var msgs = {};
messages.forEach(function (val) {
  msgs[val['id']] = val;
});

var getChildren = function(id) {
  return messages.filter(function (msg) { return msg['parent'] == id; });
};
  
var getAncestors = function(id) {
  var results = []
  if (msgs[id]['parent'] != null) {
    results = [msgs[id]['parent']];
    results = results.concat(getAncestors(msgs[id]['parent']));
  }
  return results;
}


context = function(id) {
  console.log("Getting context for " + id);
  this.res.end(JSON.stringify({
    children: getChildren(id),
    ancestors: getAncestors(id)
  }));
}

exports.messages = messages;
exports.context  = context;
