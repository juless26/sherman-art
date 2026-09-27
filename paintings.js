/*
  THE PAINTINGS LIST (shown in Works)
  ------------------
  To add a painting: copy one block from { to }, paste it, and change the details.
  Put the photo in images/paintings/ (or images/commissions/) and write the folder and file name in "image",
  for example "paintings/sunset.jpg". Leave size, price or etsy as "" to leave them off.
  To mark a painting sold: change status to "sold". To hide it: delete its block.
  Sizes are image size (width × height, in inches), then the framed outside size.
*/
const PAINTINGS = [
  {
    title: "Tipping Point",
    image: "commissions/tipping-point.jpg",
    size: '22" × 30"',
    framed: '34" × 43" framed',
    price: "$1,500",
    status: "available",
    etsy: "https://www.etsy.com/listing/730448215/tipping-point",
    description: "The realistic painting depicts the caring behavior of a mother wolf with her two pups, all situated on the edge of a rocky precipice. This painting won second place for watercolor at the Del Mar Fair."
  },
  {
    title: "White Night",
    image: "paintings/white-night.jpg",
    size: '14" × 18"',
    framed: '26" × 29" framed',
    price: "$600",
    status: "available",
    etsy: "https://www.etsy.com/listing/714911140/white-night-mark-sherman-original",
    description: "White tiger head against a black background."
  },
  {
    title: "When Birds Meet",
    image: "paintings/when-birds-meet.jpg",
    size: '11" × 14"',
    framed: '20" × 24" framed',
    price: "$500",
    status: "available",
    etsy: "https://www.etsy.com/listing/728015141/when-birds-meet-mark-sherman-original",
    description: "Hummingbird meeting up with Bird of Paradise."
  },
  {
    title: "Next Stop Del Mar",
    image: "paintings/next-stop-del-mar.jpg",
    size: '7.5" × 11.5"',
    framed: "Wood frame with rounded corners",
    price: "$500",
    status: "available",
    etsy: "https://www.etsy.com/listing/729906133/next-stop-del-mar",
    description: "The old Santa Fe railroad crossing under the iconic Del Mar Bridge, heading northbound on its run from San Diego to Los Angeles, with Torrey Pines State Park and, in the distance, Mount Soledad and La Jolla village."
  },
  {
    title: "Oxpecker? What Oxpecker?",
    image: "paintings/oxpecker.jpg",
    size: '15" × 18"',
    framed: '25" × 30" framed',
    price: "$500",
    status: "available",
    etsy: "https://www.etsy.com/listing/714185930/oxpecker-what-oxpecker-mark-sherman",
    description: "A kudu who has no idea there is an oxpecker bird on its horn."
  },
  {
    title: "Have We Met?",
    image: "paintings/have-we-met.jpg",
    size: '7" × 10"',
    framed: '14" × 17" framed',
    price: "$400",
    status: "available",
    etsy: "https://www.etsy.com/listing/729486103/have-we-met-mark-sherman-original",
    description: "A lilac-breasted roller mistaking a cluster of leaves for another of its kind."
  },
  {
    title: "Justify 3X",
    image: "paintings/justify-3x.jpg",
    size: '14" × 18"',
    framed: '21" × 25" framed',
    price: "$600",
    status: "available",
    etsy: "https://www.etsy.com/listing/729491813/justify-3x-mark-sherman-original",
    description: "Triple Crown winner Justify."
  },
  {
    title: "Nyquist's Quest",
    image: "paintings/nyquists-quest.jpg",
    size: '14" × 18"',
    framed: '21" × 25" framed',
    price: "$500",
    status: "available",
    etsy: "https://www.etsy.com/listing/716053100/nyquists-quest",
    description: "Nyquist was undefeated when he went on to win the Kentucky Derby in 2016. The painting depicts Nyquist later losing to Exaggerator in the Preakness."
  },
  {
    title: "A Very Still Life",
    image: "paintings/a-very-still-life.jpg",
    size: '14" × 18"',
    framed: '24" × 28" framed',
    price: "$500",
    status: "available",
    etsy: "https://www.etsy.com/listing/714913076/a-very-still-life-mark-sherman-original",
    description: "A stone-carved human female face."
  },
  {
    title: "Hands Holding Flowers Through Picasso",
    image: "paintings/picasso-hands.jpg",
    size: '23" × 27"',
    framed: "",
    price: "$600",
    status: "available",
    etsy: "https://www.etsy.com/listing/718841050/hands-holding-flowers-through-picasso",
    description: "A portrait of Picasso in which a take-off of his famous 'Hands Holding Flowers' painting shows through the stripes of his shirt."
  },
  {
    title: "Pet portrait",
    image: "commissions/pet-huskies.jpg",
    size: "",
    framed: "",
    price: "Commission",
    status: "commission",
    etsy: "",
    description: "A commissioned watercolor portrait of two huskies."
  },
  {
    title: "Pet portrait",
    image: "commissions/pet-bulldog.jpg",
    size: "",
    framed: "",
    price: "Commission",
    status: "commission",
    etsy: "",
    description: "A commissioned watercolor portrait of a bulldog."
  }
];

/*
  THE SLIDESHOW AT THE TOP OF THE PAGE
  ------------------------------------
  Shows photos from images/commissions/. To add one, put the photo in that folder
  and add a line below. The caption appears under the slide; leave it "" for none.
*/
const SLIDESHOW = [
  { image: "tipping-point.jpg", caption: "Tipping Point" },
  { image: "pet-huskies.jpg",   caption: "Pet portrait" },
  { image: "pet-bulldog.jpg",   caption: "Pet portrait" }
];
