const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought, getFriendsList } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
  const thoughts = getRandomThought(10);
  
//loop through users and add thoughts and emails
  for (let i = 0; i < 8; i++) {
    const username = getRandomUser();
    const email = `${username}@gmail.com`;
    const friends = getFriendsList(3);
    
    users.push({
      username,
      email,
      friends,
      thoughts
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved apps, for each app, generate a response and insert the responses
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete!');
  process.exit(0);
});