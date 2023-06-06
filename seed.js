// Submissions used for Vue App - hardcoded submissions used for UpVote
window.Seed = (function () {
    const submissions = [ //creating array of submissions
      {
        id: 1,
        title: 'Dark Souls',
        description: 'The Combat intensive 3rd Person Adventure in Far Lands.',
        url: '#',
        votes: 16,
        avatar: './public/images/avatars/daniel.jpg',
        submissionImage: './public/images/submissions/image-yellow.png',
      },
      {
        id: 2,
        title: 'Call of Duty',
        description: 'Action packed 1st person shooter with high stakes sequences.',
        url: '#',
        votes: 11,
        avatar: './public/images/avatars/kristy.png',
        submissionImage: './public/images/submissions/image-rose.png',
      },
      {
        id: 3,
        title: 'Elder Scrolls',
        description: 'The best selling fantasy RPG set in mysterious worlds.',
        url: '#',
        votes: 17,
        avatar: './public/images/avatars/veronika.jpg',
        submissionImage: './public/images/submissions/image-steel.png',
      },
      {
        id: 4,
        title: 'World of Warcraft',
        description: 'Thrilling MMORPG that managed to interest even mainstream media.',
        url: '#',
        votes: 9,
        avatar: './public/images/avatars/molly.png',
        submissionImage: './public/images/submissions/image-aqua.png',
      }
    ];
  
    return { submissions: submissions }; //return array of submissions to function submissions
  }());
  