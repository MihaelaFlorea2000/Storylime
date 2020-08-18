# Full Stack Timeline

### TODO

* [x] Setup Server (express, cors, helmet, morgan)
  * [x] Install Dependencies (eslint, nodemon)
  * [x] Install / Setup Linter
  * [x] Setup Express App
  * [x] Setup Not Found and Error Middlewares
* [x] Model DB
  * What data will be stored?
* [x] Setup Mongoose Model
* [x] GET /timelines
  * List all timelines
* [x] GET /events/:timelineId
  * List all events in a specific timeline
* [x] POST /timelines/add
  * Create a new timeline
* [x] POST /events/:timelineId/add
  * Create a new timeline event
* [x] DELETE /events/:eventId
  * Delete a specific timeline event
* [x] PATCH /timelines/:timelineId/
  * Update a specific timeline
* [x] PATCH /events/:eventId/
  * Update a specific timeline event
* [x] Setup Client
* [ ] Create a form to add new entry