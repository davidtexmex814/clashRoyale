const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesSchema = new Schema(
  {
    userSender_id: { type: Schema.Types.ObjectId, ref: "User" },
    userReceiver_id: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Messages = mongoose.model("Messages", messagesSchema);
module.exports = Messages;