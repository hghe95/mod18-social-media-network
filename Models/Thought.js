const { Schema, model } = require(`mongoose`);
const moment = require(`moment`);
const reactionSchema = require(`./Reaction`);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtTime) => moment(createdAtTime).format(`MMM DD, YYYY [at] hh:mm a`)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
})

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model(`Thought, ThoughtSchema`)

module.exports = Thought;