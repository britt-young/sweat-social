const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reaction');

// Define the Thought schema with the required fields and their respective data types
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username:{
            type: String,  
            required: true,
        },
        reactions:[reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Defines a virtual property 'reactionCount' which returns the number of reactions in the reactions array
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

// Creating the Thought model from the thoughtSchema
const Thought = model('Thought',thoughtSchema)

module.exports = Thought