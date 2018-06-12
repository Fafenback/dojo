class ErreurPersonnalisee extends Error {
  constructor(name, message, ligne) {
    // Passer les arguments restants (incluant ceux spécifiques au vendeur) au constructeur parent
    super();
    (this.name = name), (this.message = message), (this.ligne = ligne);
    // Maintenir dans la pile une trace adéquate de l'endroit où l'erreur a été déclenchée (disponible seulement en V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErreurPersonnalisee);
    }
  }
}

function hamming(phraseOne, phraseTwo) {
  if (typeof phraseOne != "string" || typeof phraseTwo != "string") {
    throw new ErreurPersonnalisee(
      "Erreur buddy",
      "Attention votre paramètre ne respecte pas le format !",
      18
    );
  }
  let phrase1 = phraseOne.replace(/ /g, "").split("");
  let phrase2 = phraseTwo.replace(/ /g, "").split("");
  if (phrase1.length === phrase2.length) {
    let count = 0;
    let index = 0;
    phrase1.map(compare => (compare != phrase2[index++] ? (count += 1) : null));
    return count;
  } else return -1;
}

try {
  console.log(hamming("Je suis une phrase", "Je suis une phrise"));
} catch (e) {
  return console.log(e.name + ": " + e.message + "Ligne :" + e.ligne);
}
