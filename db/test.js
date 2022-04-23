let a = [
  {
    rating: 2,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 5,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 3,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 1,
    recommend: false,
    name: 'Quality',
    value: '1',
    char_id: 294319
  },
  {
    rating: 2,
    recommend: true,
    name: 'Quality',
    value: '3',
    char_id: 294320
  },
  {
    rating: 4,
    recommend: true,
    name: 'Quality',
    value: '3',
    char_id: 294320
  },
  {
    rating: 5,
    recommend: true,
    name: 'Size',
    value: '3',
    char_id: 294320
  }
]

let x = a.reduce((res, x) => {
  res[x.name] = {
    id: x.char_id, value: res[x.name] ? Number(res[x.name].value) + Number(x.value) : Number(x.value),
    cnt: res[x.name] ? res[x.name].cnt + 1 : 1
  }
  return res;
}, {})

for (let key in x) {
  x[key].value = (x[key].value / x[key].cnt).toFixed(4)
  delete x[key].cnt
}


console.log(x)


// CREATE SEQUENCE reviews_id_seq OWNED BY reviews.id;
// SELECT setval('reviews_id_seq', coalesce(max(id), 0) + 1, false) FROM reviews;
// ALTER TABLE reviews ALTER COLUMN id SET DEFAULT nextval('reviews_id_seq');

// CREATE SEQUENCE photos_id_seq OWNED BY photos.id;
// SELECT setval('photos_id_seq', coalesce(max(id), 0) + 1, false) FROM photos;
// ALTER TABLE photos ALTER COLUMN id SET DEFAULT nextval('photos_id_seq');

// CREATE SEQUENCE characteristics_review_id_seq OWNED BY characteristics_review.id;
// SELECT setval('characteristics_review_id_seq', coalesce(max(id), 0) + 1, false) FROM characteristics_review;
// ALTER TABLE characteristics_review ALTER COLUMN id SET DEFAULT nextval('characteristics_review_id_seq');