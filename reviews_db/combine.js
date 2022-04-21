const csv = require('csv-parser');
const fs = require('fs');
const Reviews = require('./reviews.js')
const Characteristics = require('./characteristics.js')

Characteristics.find()
  .then(data => {
    data.map(x => {
      const name = 'characteristics.' + x.name
      Reviews.findOneAndUpdate({ characteristics_id: data.characteristics_id }, { [name]: x.value })
        .then((res) => console.log(res))
    })
  })