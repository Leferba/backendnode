const Model = require('./model');

function addMessage(message){
  // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
  let filter= {};
  if(filterUser!==null){
    filter={user: filterUser};
  }
  const messages = await Model.find(filter);
  return messages;
}

function removeMesage(id){
  return Model.deleteOne({
    _id: id
  });
}

async function updateText(id, message){
  const foundMessage = await Model.findOne({
      _id: id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;

}

module.exports = {
  add : addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMesage,
  // get
  // updaate
  // delte
}