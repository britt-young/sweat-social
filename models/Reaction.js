const { Schema, Types } = require('mongoose');

// Define the reaction schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
          return date.toISOString();
      }
    },
  },
  {
    timestamps: true,
    toJSON: {
        getters: true,
        virtuals: true,
    },
    id: false,
    }
);

module.exports = reactionSchema