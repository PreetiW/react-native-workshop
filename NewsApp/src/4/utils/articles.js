const articles = [
  {
    source: {
      id: null,
      name: "Indianexpress.com"
    },
    author: "ENS Economic Bureau",
    title: "Salary, job cuts: Jet Airways says it's implementing measures to reduce cost; shares down 7 per cent",
    description: "Shares of the airline dived 7 per cent to settle at Rs 308 on the BSE following reports about the airline’s proposal for salary reductions and possible job cuts at various departments.",
    url: "https://indianexpress.com/article/business/companies/salary-job-cuts-jet-airways-says-its-implementing-measures-to-reduce-cost-shares-down-7-per-cent-5290976/",
    urlToImage: "https://images.indianexpress.com/2017/06/jet_airways-759.jpg?w=759",
    publishedAt: "2018-08-03T20:12:21Z"
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India"
    },
    author: "Subodh Ghildiyal",
    title: "Oppn call on 'divisive' issue of PM pick only after 2019 poll",
    description: "India News: NEW DELHI: Congress and other opposition parties have decided to leave the issue of a prime ministerial candidate for the post-election phase, acknowl.",
    url: "https://timesofindia.indiatimes.com/india/oppn-call-on-divisive-issue-of-pm-pick-only-after-2019-poll/articleshow/65265261.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-65265266,width-1070,height-580,imgsize-1123724,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2018-08-03T20:01:04Z"
  },
  {
    source: {
      id: null,
      name: "Business-standard.com"
    },
    author: "Reuters",
    title: "China announces tariffs on $60-bn worth of US goods in latest salvo",
    description: "China's finance ministry unveiled new sets of additional tariffs on 5,207 goods imported from the United States, ranging from 5% to 25%",
    url: "https://www.business-standard.com/article/international/china-announces-tariffs-on-60-bn-worth-of-us-goods-in-latest-salvo-118080301139_1.html",
    urlToImage: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-07/16/full/1531738932-6201.jpg",
    publishedAt: "2018-08-03T19:42:51Z"
  },
  {
    source: {
      id: null,
      name: "Dnaindia.com"
    },
    author: "PTI",
    title: "Andhra Pradesh: At least 10 killed in blast in stone quarry",
    description: "Four injured have been rushed to hospital",
    url: "http://www.dnaindia.com/india/report-andhra-pradesh-at-least-10-killed-in-blast-in-stone-quarry-2645421",
    urlToImage: "http://static.dnaindia.com/sites/default/files/styles/full/public/2018/08/04/713455-quarry-ani-1.jpg",
    publishedAt: "2018-08-03T19:37:00Z"
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India"
    },
    author: "Sidharatha Roy",
    title: "Delhi Metro reclaims 28 lakh mark in daily ridership, aims for more",
    description: "NEW DELHI: After a gap of more than a year, Delhi Metro’s daily ridership has again touched 28 lakh and DMRC is hoping that a study it’s going to comm.",
    url: "https://timesofindia.indiatimes.com/city/delhi/metro-reclaims-28l-mark-in-daily-ridership-aims-for-more/articleshow/65264897.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-65265024,width-1070,height-580,imgsize-1267559,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2018-08-03T19:15:20Z"
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India"
    },
    author: "Neeraj Chauhan",
    title: "Antigua claims Sebi, CBI did not object to Choksi's citizenship application",
    description: "India News: In a statement issued on Thursday night, Antigua’s citizenship by investment unit (CIU) said when Choksi applied for citizenship in May 2017, he provi",
    url: "https://timesofindia.indiatimes.com/india/antigua-claims-sebi-cbi-did-not-object-to-choksis-citizenship-application/articleshow/65264744.cms",
    urlToImage: "https://static.toiimg.com/thumb/msid-65264804,width-1070,height-580,imgsize-194439,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    publishedAt: "2018-08-03T19:03:00Z"
  },
  {
    source: {
      id: null,
      name: "Business-standard.com"
    },
    author: "BS Web Team & Agencies",
    title: "Uttarakhand HC Chief Justice KM Joseph appointed Supreme Court judge",
    description: "Justice Joseph's name was recommended for appointment as a judge of the SC by the collegium headed by CJI Dipak Misra on January 10",
    url: "https://www.business-standard.com/article/current-affairs/kovind-appoints-justice-k-m-joseph-as-supreme-court-judge-118080400003_1.html",
    urlToImage: "https://bsmedia.business-standard.com/_media/bs/img/article/2018-04/26/full/1524738476-8298.jpg",
    publishedAt: "2018-08-03T18:35:00Z"
  },
  {
    source: {
      id: null,
      name: "Hindustantimes.com"
    },
    author: "Ayaz Memon",
    title: "Imran Khan's friendships which crossed borders and boundaries",
    description: "There’s no surprise that he invited his contemporaries from on the cricket field but his picking Bollwyood actor Aamir Khan is intriguing",
    url: "https://www.hindustantimes.com/mumbai-news/imran-khan-s-friendships-which-crossed-borders-and-boundaries/story-Ug6WeTk51i84a8GOf8eCgL.html",
    urlToImage: "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/08/03/Pictures/previous-cricket-world-cup-winning-capta_8aa98de0-974a-11e8-a9be-0a3dd955ac48.jpg",
    publishedAt: "2018-08-03T18:29:00Z"
  },
  {
    source: {
      id: null,
      name: "Business-standard.com"
    },
    author: "Press Trust of India",
    title: "Suspend Raghupathi Commission: HC to TN govt",
    description: "The Madras High Court today directed the Tamil Nadu government to suspend the Raghupathi Commission of Inquiry, set up by the AIADMK government to probe alleged irregularities in construction of the new secretariat here during the DMK rule. The",
    url: "https://www.business-standard.com/article/pti-stories/suspend-raghupathi-commission-hc-to-tn-govt-118080301514_1.html",
    urlToImage: "https://bsmedia.business-standard.com/include/_mod/site/html5/images/no-meta-preview.jpg",
    publishedAt: "2018-08-03T18:20:00Z"
  },
  {
    source: {
      id: null,
      name: "Ndtv.com"
    },
    author: null,
    title: "Google Takes the Blame for UIDAI Number Showing Up in People's Phonebooks",
    description: "",
    url: "https://gadgets.ndtv.com/mobiles/news/uidai-helpline-number-controversy-google-response-india-1894947",
    urlToImage: "https://i.gadgets360cdn.com/large/uidai_helpline_gadgets_360_1533319648308.jpg",
    publishedAt: "2018-08-03T18:11:51Z"
  },
  {
    source: {
      id: null,
      name: "Ndtv.com"
    },
    author: null,
    title: "With Eye On Polls, Vasundhara Raje To Begin 58-Day Yatra From Tomorrow",
    description: "Rajasthan Chief Minister Vasundhara Raje is set to begin a 58-day, 6,000-km yatra from tomorrow that will roll through 165 assembly constituencies of the state which goes to the polls later this year.",
    url: "https://www.ndtv.com/india-news/with-eye-on-polls-vasundhara-raje-to-begin-58-day-yatra-from-tomorrow-1894943",
    urlToImage: "https://c.ndtvimg.com/0r11ebk_vasundhara-raje-yatra_625x300_03_August_18.jpg",
    publishedAt: "2018-08-03T17:55:00Z"
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India"
    },
    author: "Vasudha Venugopal",
    title: "NRC needed to maintain cultural identity, says BJP national general secretary Ram Madhav",
    description: "Accusing Mamata Banerjee of playing opportunistic politics, Ram Madhav said, the "same Mamata had charged the left of using infiltrators as vote banks in 2005."",
    url: "https://economictimes.indiatimes.com/news/politics-and-nation/nrc-needed-to-maintain-cultural-identity-says-bjp-national-general-secretary-ram-madhav/articleshow/65263964.cms",
    urlToImage: "https://img.etimg.com/thumb/msid-65263958,width-1070,height-580,imgsize-54826,overlay-economictimes/photo.jpg",
    publishedAt: "2018-08-03T17:43:00Z"
  },
  {
    source: {
      id: "the-hindu",
      name: "The Hindu"
    },
    author: "Krishnadas Rajagopal",
    title: "Centre pushes for quota in promotion for SCs/STs",
    description: "Cites historical deprivation, calls on Supreme Court to revisit 2006 Nagaraj ruling",
    url: "https://www.thehindu.com/news/national/centre-pushes-for-quota-in-promotion-for-scssts/article24595870.ece",
    urlToImage: "https://www.thehindu.com/news/national/6ycq7o/article24577931.ece/ALTERNATES/LANDSCAPE_615/TH02KRASC",
    publishedAt: "2018-08-03T17:35:36Z"
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India"
    },
    author: null,
    title: "I love you because you are my Fanney Khan: Shah Rukh Khan to Anil Kapoor",
    description: "Anil Kapoor’s latest release ‘Fanney Khan’ has been garnering rave reviews from fans as well as critics. The makers hosted a special screening of the film recently, which was attended by who’ who of Bollywood including Shah Rukh Khan. After watching the film,…",
    url: "https://timesofindia.indiatimes.com/videos/entertainment/hindi/i-love-you-because-you-are-my-fanney-khan-shah-rukh-khan-to-anil-kapoor/videoshow/65263803.cms",
    urlToImage: "https://timesofindia.indiatimes.com/photo/65263803/size-120516/65263803.jpg",
    publishedAt: "2018-08-03T17:30:10Z"
  },
  {
    source: {
      id: "the-hindu",
      name: "The Hindu"
    },
    author: "Special Correspondent",
    title: "'Extend House sittings to 120 days a year'",
    description: "Need to raise productivity: RS members.",
    url: "https://www.thehindu.com/news/national/extend-house-sittings-to-120-days-a-year/article24596169.ece",
    urlToImage: "https://www.thehindu.com/news/national/33av8g/article24596168.ece/ALTERNATES/LANDSCAPE_615/03THRDRAJYA",
    publishedAt: "2018-08-03T17:16:00Z"
  },
  {
    source: {
      id: null,
      name: "Firstpost.com"
    },
    author: null,
    title: "India vs England, LIVE Cricket Score, 1st Test, Day 3 at Edgbaston: Stuart Broad sends Murali Vijay back early",
    description: "Broad continues. A big inside edge on to Rahul's pads and huge appeal from every English fielder on the ground. No says umpire Gaffeney. The penultimate ball of the over almost had Rahul, but the ball missed the stumps. Rahul stays there, somehow.",
    url: "https://www.firstpost.com/firstcricket/sports-news/india-vs-england-live-cricket-score-1st-test-day-3-at-edgbaston-stuart-broad-sends-murali-vijay-back-early-4885531.html",
    urlToImage: "https://images.firstpost.com/wp-content/uploads/2018/08/Kohli-Root-Reuters.jpg",
    publishedAt: "2018-08-03T15:29:00Z"
  },
  {
    source: {
      id: null,
      name: "Tolonews.com"
    },
    author: null,
    title: "Death Toll Rises To 30 In Bombings On Paktia Mosque",
    description: "Interior Ministry’s deputy spokesman Nusrat Rahimi says 20 of those wounded are in critical condition and that the death toll may rise.",
    url: "https://www.tolonews.com/afghanistan/death-toll-rises-30-bombings-paktia-mosque",
    urlToImage: "http://www.tolonews.com/sites/default/files/Paktia%20FInal.jpg",
    publishedAt: "2018-08-03T14:48:45Z"
  },
  {
    source: {
      id: null,
      name: "Firstpost.com"
    },
    author: "",
    title: "Mulk banned in Pakistan; director Anubhav Sinha writes letter asking viewers to 'watch it illegally'",
    description: "While Mulk has been banned, Bollywood's other releases Karwaan and Fanney Khan have been cleared for release in Pakistan.",
    url: "https://www.firstpost.com/entertainment/mulk-banned-in-pakistan-director-anubhav-sinha-writes-letter-asking-viewers-to-watch-it-illegally-4888081.html",
    urlToImage: "https://images.firstpost.com/wp-content/uploads/2018/06/taapsee-pannu-mulk-1280.jpg",
    publishedAt: "2018-08-03T12:53:48Z"
  },
  {
    source: {
      id: null,
      name: "Abplive.in"
    },
    author: "ABP News Bureau",
    title: "Osama's mother breaks silence for the first time, traces her son's path to radicalization",
    description: "Al-Qaeda founder Osama Bin Laden’s mother Alia Ghanem has spoken for the first time about her son's transformation from being a 'good kid' into one of the most the infamous men in the world.",
    url: "https://www.abplive.in/world-news/osama-bin-ladens-mother-alia-ghanem-breaks-silence-traces-her-sons-path-to-radicalization-736896",
    urlToImage: "https://images.abplive.in/index.php?url=https://static.abplive.in/wp-content/uploads/2016/03/02134421/Osama-bin-Laden_2205504b.jpg&dimension=484:252&action=crop&convertTo=jpeg",
    publishedAt: "2018-08-03T12:38:37Z"
  },
  {
    source: {
      id: null,
      name: "Financialexpress.com"
    },
    author: "FE Online",
    title: "Vijay Mallya wants to meet Virat Kohli & Co; Modi government denies permission",
    description: "Embattled liquor baron Vijay Mallya has expressed his desire to meet Virat Kohli & Co who are currently on tour in England.",
    url: "https://www.financialexpress.com/india-news/vijay-mallya-wants-to-meet-virat-kohli-modi-government-denies-permission/1268461/",
    urlToImage: "https://images.financialexpress.com/2018/08/collage.jpg",
    publishedAt: "2018-08-03T10:03:29Z"
  }
];

export default articles;