const { Schema, Types } = require(`mongoose`);
const moment = require(`moment`);

const ReactionSchema = new Schema(
    {
        reactionID: {
            type: Types.ObjectId(),
            default: new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 200
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtTime) => moment(createdAtTime).format(`MMM DD, YYYY [at] hh:mm a`)
        }
    }
)

module.exports = Thought;