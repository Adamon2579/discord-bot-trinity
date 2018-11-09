module.exports = {


// Roll
roll: function(str){
  var nbRoll = str.substring(0, str.indexOf('d'));
  var max = parseInt(str.substring(str.indexOf('d')+1));
  var message = '';
  if (nbRoll === ''){
    nbRoll = 1;
  }
  var rolls = [];
  if (nbRoll > 20) {
    return 'As tu vraiment besoin de lancer autant de dés ?';
  }
  if (![4,6,8,10,12,20,100].includes(max)) {
    return 'Tu lances des d'+max+' toi ?'
  }
  for (var i = 0; i < nbRoll; i++) {
    rolls.push(Math.floor(Math.random()*max)+1)
  }
  return rolls;
}


}
