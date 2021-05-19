// Code your solution here
function findMatching(drivers, name)
{
    const newCollection = [];

    for(const user of drivers){
        
        if(user.toLowerCase() == name.toLowerCase() )
        newCollection.push(user);
    }
    return newCollection
}

function fuzzyMatch(drivers, letter)
{
    const newCollection = [];

    for(const user of drivers){
        const begin = user.slice(0, letter.length)
        if(begin.toLowerCase() == letter.toLowerCase())
        newCollection.push(user);
        
    }
    return newCollection
}
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, name)
{
    for (var i=0; i < drivers.length; i++){
       if(drivers[i].name == name )
       {
        return drivers.filter( user => user.name === name)
       }

}
}