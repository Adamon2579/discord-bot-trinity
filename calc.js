module.exports = {

  // Calc

  //Fonction principale
  calc: function(inputString){
    //supression des espaces
    var str = inputString.replace(/\s+/g,'');
    //transformation des virgules en points
    str = str.replace(/,/g,'.');
    //comptage des parentheses
    var counter = 0;
    var check = true;
    for (var i = 0; i < str.length; i++) {
      if (str[i]==='(') {
        counter += 1;
      }
      else if (str[i]===')') {
        counter -= 1;
      }
      if (counter<0) {
        check = false;
      }
    }
    check = check&&(counter===0);
    if (check) {
        console.log("cette expression est correcte !");
        var tab_res = this.mkTree(str);
        var res = this.calc_fusion(tab_res);
        return res;
    }
    else {
      return 'Format non valide :/';
    }
  },


  //Construction de l'arbre à partir de l'expression
  mkTree: function(inputString){
    console.log("Création de l'arbre : début du traitement...");
    console.log("inputString : "+inputString);
    var str = this.rmPar(inputString);
    var sep_lv1 = (str.includes('+') || str.includes('-'));
    var counter = 0;
    if (sep_lv1) {
      for (var i = 0; i < str.length; i++) {
        //on ne doit séparer que si on est en dehors des parenthèses
        if (counter === 0 && (str[i] === '+' || str[i] === '-')) {
          console.log("Séparation lv1");
          return([this.mkTree(str.substring(0,i)),str.substring(i,i+1),this.mkTree(str.substring(i+1,str.length))]);
        }
        //ici on gère la profondeur du parenthesage
        else if (str[i] === '(') {
          counter += 1;
        }
        else if (str[i] === ')') {
          counter -= 1;
        }
      }
    }
    var sep_lv2 = (str.includes('*') || str.includes('/'));
    counter = 0;
    if (sep_lv2) {
      for (var i = 0; i < str.length; i++) {
        //on ne doit séparer que si on est en dehors des parenthèses
        if (counter === 0 && (str[i] === '*' || str[i] === '/')) {
          console.log("Séparation lv2");
          return([this.mkTree(str.substring(0,i)),str.substring(i,i+1),this.mkTree(str.substring(i+1,str.length))]);
        }
        //ici on gère la profondeur du parenthesage
        else if (str[i] === '(') {
          counter += 1;
        }
        else if (str[i] === ')') {
          counter -= 1;
        }
      }
    }
    var sep_lv3 = str.includes('^');
    counter = 0;
    if (sep_lv3) {
      for (var i = 0; i < str.length; i++) {
        //on ne doit séparer que si on est en dehors des parenthèses
        if (counter === 0 && str[i] === '^') {
          console.log("Séparation lv3");
          return([this.mkTree(str.substring(0,i)),str.substring(i,i+1),this.mkTree(str.substring(i+1,str.length))]);
        }
        //ici on gère la profondeur du parenthesage
        else if (str[i] === '(') {
          counter += 1;
        }
        else if (str[i] === ')') {
          counter -= 1;
        }
      }
    }
    //si jamais il n'y a plus besoin de séparer
    return([str]);
  },


  //retirer les parentheses exterieures
  rmPar: function(inputString){
    console.log("Supression des parenthèses extérieures...");
    var str = inputString;
    while (str != this.rmPar_aux(str)) {
      str = this.rmPar_aux(str);
    }
    return(str);
  },

  rmPar_aux: function(str){
    var par_fst = (str[0] === '(');
    var par_lst = (str[str.length-1] === ')');
    //s'il y a des par au dbt et à la fin
    if (par_fst && par_lst) {
      var counter = 0;
      var check = true;
      //on ne va pas jusqu'au bout sinon ca retombe forcement à 0
      for (var i = 0; i < str.length-1; i++) {
        if (str[i] === '(') {
          counter += 1;
        }
        else if (str[i] === ')') {
          counter -=1;
        }
        if (counter === 0) {
          check = false;
        }
      }
      if (check) {
        console.log("Parenthèses innutiles trouvées ! Supression...");
        return (str.substring(1,str.length-1));
      }
      else {
        return (str);
      }
    }
    else {
      return (str);
    }
  },


  //Calcul du résultat à partir de l'arbre
  calc_fusion: function(inputTab){
    var len = inputTab.length;
    if (len === 1){
      return (inputTab[0]);
    }
    else {
      return (this.calc_term(this.calc_fusion(inputTab[0]),inputTab[1],this.calc_fusion(inputTab[2])));
    }
  },

  calc_term: function(op1, oper, op2){
    var op1_num = parseFloat(op1);
    var op2_num = parseFloat(op2);
    var res = 0;
    switch (oper) {
      case '+':
        res = op1_num + op2_num;
        break;
      case '-':
        res = op1_num - op2_num;
        break;
      case '*':
        res = op1_num * op2_num;
        break;
      case '/':
        res = op1_num / op2_num;
        break;
      case '^':
        res = Math.pow(op1_num, op2_num);
      break;
    }
    return res;
  }

}
