const message = [
    'Hail to the King Baby', 
    'Groovy',
    'It\'s time to kick ass and chew bubblegum',
    'Shake it baby', 
    'Mmmmm',
    'What are you waitin\' for? Christmas?',
    'All aboard the midnight express to HELL!',
    'Suck it down',
    'Remember the Alamo!',
    'What a mess!',
    'Damn, those aliens bastards are gonna pay for shooting up my ride!',
    'Where is it?'
];
const location = [
    'LA Meltdown',
    'Lunar Appocalypse',
    'Shrapnel City',
    'The Birth',
    'Alien World Order'
]

const activity = [
    'Looking at the Babes!',
    'Watching the Babes!',
    'Saving the Babes!',
    'Attacking an Assault Captain!',
    'Obliterating a Pig Cop!',
    'Wasting an Octabrain!',
    'Killing an Assault Trooper with a pipe bomb!'
]

function dukeMessage(){
  const minLength = Math.min(message.length, location.length, activity.length);
  const randIndex = Math.floor(Math.random() * minLength);
    return 'Duke said '+ message[randIndex] + ' in ' + location[randIndex] + 
    ', after ' + activity[randIndex] ;
}

console.log(dukeMessage());