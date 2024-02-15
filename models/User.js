// Importing the required dependencies from the mongoose library
const { Schema, model } = require('mongoose'); 

// Define the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required:true,
        unique: true,
        validate: {
        validator: function (value) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: 'Invalid email address format',
        },
    },
    thoughts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false
    }
);

// Defines a virtual property 'friendCount' which returns the number of friends in the friends array
/* userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
}); */
// Creating the User model from the userSchema
const User = model('User',userSchema)

// Exporting the User model as a module
module.exports = User