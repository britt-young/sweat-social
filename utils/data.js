const users = [
    'janedoe1',
    'lizzy23',
    'bigdawggg',
    'iceT',
    'jjones00',
    'lallaPP',
    'knucks550',
    'young$$',
    'john-doe1',
    'jane-doe2',
    'johnnyD',
];
const thoughtText = [
    'wanna meet up?',
    'whos hitting the gym today?',
    'I need exercise recs!',
    'Being lazy today',
    'Need recipe ideas',
    'More protein please',
    'Where my cardio people at?',
    'Leg day anyone?',
    'What is everyones split?',
    'Rest day baby',
    'NO DAYS OFF!',
    'lets signup for a class together',
    'best gym near me'
];
const reactionBody = [
    'Nice job!',
    'DM me',
    'Lets meet up',
    'Yes!',
    'No...',
    'Keep it up',
    'Im in!',
    'Pass',
    'Lets go!',
    'Idk',
    '👍',
    ':)',
    '👎',
    '🙌',
    '🤷‍♀️',
    'sounds good',
    '😂',
    'lol',
    'smh',
    'Im so tired',
    'no way'
];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUser = () => `${getRandomArrItem(users)}`;

  const getFriendsList = (int) =>{
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            friends: getRandomArrItem(users)
        });
    }
    return results;
  };

  // Function to generate random thoughts with reactions to add to the user object
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughtText),
            reactions: getRandomArrItem(reactionBody),
        });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUser, getRandomThought, getFriendsList };
  