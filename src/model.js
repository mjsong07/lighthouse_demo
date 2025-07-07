const base = '/imgs';
const width = 1500;
const dir = 'big';

// All images are public domain.
// https://www.pexels.com/photo/fish-seafood-market-sea-85528/
// https://www.pexels.com/photo/burrito-chicken-delicious-dinner-461198/
// https://www.pexels.com/photo/vegetables-italian-pizza-restaurant-2232/
// https://www.pexels.com/photo/appetizer-bowl-bread-breakfast-539451/


//  image: `https://storage.googleapis.com/webfundamentals-assets/tools/chrome-devtools/load-performance/${dir}/fesh.jpg`,
//     image: `https://storage.googleapis.com/webfundamentals-assets/tools/chrome-devtools/load-performance/${dir}/brrto.jpg`,
//     image: `https://storage.googleapis.com/webfundamentals-assets/tools/chrome-devtools/load-performance/${dir}/pezza.jpg`,
//     image: `https://storage.googleapis.com/webfundamentals-assets/tools/chrome-devtools/load-performance/${dir}/soop.jpg`, 

const model = [
  {
    name: 'Fesh',
    image: `https://qcloud.dpfile.com/pc/aLABRTJroO3qp4bi9Oi-7W-X1Zivu4ltXRiv2TPuhzphCNhCNE_CUFkHbnIxoUZl.jpg`, // 这个改成你的缩略小图
    route: 'fesh',
    pros: [
      'Salty',
      'Shiny'
    ],
    cons: [
      'Tough to hold',
      'Sometimes runs away'
    ]
  },
  {
    name: 'Brrto',
    image: `https://dn-dora-document.qbox.me/pexels-clement.jpg?imageView2/1`, //https://dn-odum9helk.qbox.me/resource/gogopher.jpg?imageView2/1/w/200/h/200/q/55
    body: 'Portable noms',
    route: 'brrto',
    pros: [
      'Many flavor',
      'Travels well'
    ],
    cons: [
      'Often wrapped in scary shiny metal',
      'Heavy'
    ]
  },
  // {
  //   name: 'Pezza',
  //   image: `https://dn-odum9helk.qbox.me/resource/gogopher.jpg?imageView2/1`,  // https://dora-doc.qiniu.com/gogopher.jpg?imageView2/2/w/200
  //   body: 'Gooey hotness',
  //   route: 'pezza',
  //   pros: [
  //     'Maximum chees',
  //     'Still good after many days'
  //   ],
  //   cons: [
  //     'Too much hot',
  //     'Hard to lick'
  //   ]
  // }
];


export default model;
