// todos-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const todos = new Schema({
    content: { type: String, required: true },
    completed: { type: Boolean, default: false},
  }, {
    timestamps: true
  });

  return mongooseClient.model('todos', todos);
};
