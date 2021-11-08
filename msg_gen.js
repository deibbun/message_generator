const begin = [
    'Create',
    'Jump',
    'Let\'s',
    'Remove',
    'Pull',
    'Tug',
    'Jack'
];

const middle = [
    'something',
    'off',
    'go',
    'your',
    'it',
    'my',
    'me'
];

const last = [
    'new',
    'bridge',
    'brandon',
    'panties',
    'out',
    'cock',
    'off'
];

const getRandPart = (arr) =>{
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

console.log(getRandPart(begin));