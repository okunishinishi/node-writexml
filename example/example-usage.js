'use strict'

const fs = require('fs')
const writexml = require('writexml')

writexml('person-file.xml', 'person', {
  'telephone': [
    '123-555-4567',
    {
      '#': '789-555-4567',
      '=': 'fax'
    },
    '456-555-7890'
  ]
}).then(() => {
  /* ... */
  fs.readFile('person-file.xml', (err, content) => {
    console.log(content)
    // <?xml version='1.0' encoding='UTF-8'?>
    // <person>
    //     <telephone>123-555-4567</telephone>
    //     <fax>789-555-4567</fax>
    //     <telephone>456-555-7890</telephone>
    // </person>
  })
})
