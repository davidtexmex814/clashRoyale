const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagesGlobalSchema = new Schema(
  {
    userSender_id: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const MessagesGlobal = mongoose.model("MessagesGlobal", messagesGlobalSchema);
module.exports = MessagesGlobal;