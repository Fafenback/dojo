class ErreurPersonnalisee extends Error {
  constructor(name, message, line) {
    super();
    (this.name = name), (this.message = message), (this.line = line);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErreurPersonnalisee);
    }
  }
}
//Résolution du dojo
function dojo(str) {
  let regex = /^[^\d]+$/;
  //Si erreur
  if (regex.test(str) === false) {
    throw new ErreurPersonnalisee("Erreur", "Il n'y a pas de chiffres", 18);
  } else if (typeof str === "number") {//si c'est un nombre
    /** 
     * 
     * remplace le point par une virgule
     * 
    */
    let string = str.toString().replace(".", ",");
    string.replace(" ", "'");
    return `${string}€`;
  } else if (Array.isArray(str) === true) {//si c'est un tableau
    /** 
     * 
     * remplace le point par une virgule avec .map pour l'appliquer à chaque élément du tableau
     * 
    */
    let array = str.map(element => element.toString().replace(".", ","));
    /**
     * 
     * applique à chaque élémenent (.map) 
     *   
    */
    return array.map(price => {
      return `${price}€`;
    });
  } else { // si c'est un objet
    /** 
     * destructuring es6 pour récupérer les valeurs des clefs ht et ttc
    */
    let { ht } = str;
    let { ttc } = str;
    /** 
     * concaténation es6 avec fonction pour remplacer la virgule et le mettre en string
    */
    let HT = `${ht.toString().replace(".", ",")}€`;
    let TTC = `${ttc.toString().replace(".", ",")}€`;
    /**
     * retourne un objet avec les clefs et les valeurs associées
     */
    return (newObject = { ht: HT, ttc: TTC });
  }
}
try {
  /**
   * pour tester changez les valeurs ici
   * (erreur avec les nombres avec des espaces)(et string avec chiffes et texte non résolu)
   */

  console.log(dojo("112 456 679"))
} catch (e) {
  return console.log(e.name + ": " + e.message + "Ligne :" + e.line);
}

    //code qui ne respecte pas les conditions

    // let object = Object.values(str)
    //   .filter(element => typeof element === "number")
    //   .map(price => price.toString().replace(".", ","));
    // return object.map(price => `${price}€`).join(" , ");