const scraper = require('swagger-scraper');

// sample yaml
const sampleFull = `swagger: '2.0'
info:
  description: sample
  title: sample
paths:
  '/rooms/{room-id}':
    get:
      deprecated: true
      description: room
      parameters:
        - name: room-id
          in: path
          type: integer
      responses:
        '200':
          description: OK
          schema:
            type: object
            properties:
              id:
                type: integer
                example: 404
              comment:
                type: string
                example: 404
  '/rooms/{room-id}/doors':
    get:
      deprecated: true
      responses:
        '200':
          schema:
            type: array
    post:
      responses:
        '200':
          schema:
            type: object
`;

const strOutput = scraper.deleteParent(sampleFull, 'deprecated', 'string');

console.log(strOutput);
