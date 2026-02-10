function filter (array ,  func) {
var result = []
each(array , function (el , i) {
if (func(el , i )) {
result.push(el)
    }})
 return result 
}

//1 — Nombres pairs

function nombresPairs(nombres) {
    return filter (nombres , function (n){
        return n % 2 === 0 
    })
}

nombresPairs([1,2,3,4,5,6])

//2 — Multiples de trois

function multiplesDeTrois(nombres) {
    return filter (nombres , function (n){
        return n % 3 ===0
    })
}

multiplesDeTrois([1,3,4,6,9,10])

//3 — Nombres positifs

function nombresPositifs(nombres) {
     return filter (nombres , function (n){
        return n >=  0
    })
}

nombresPositifs([-3,2,-1,5,0])

//4 — Chaînes de longueur paire

function longueurPaire(chaines) {
    return filter (chaines , function (c){
        return c.length % 2 === 0 
    })
}

longueurPaire(["chat","chien","lion"])

//1 — Nombres impairs

function nombresImpairs(nombres) {
     return filter (nombres , function (n){
        return n % 2 !== 0 
    })
}

//2 — Nombres négatifs

function nombresNegatifs(nombres) {
    return filter (nombres , function (n){
        return n < 0
    })
}

//3 — Nombres supérieurs à six

function superieursASix(nombres) {
    return filter (nombres , function (n){
        return n > 6
    })
}

//4 — Chaînes qui commencent par un caractère

function commenceParCaractere(chaines, caractere) {
    return filter (chaines , function(c){
        return c[0] === caractere
    })
}

var mots = 'the quick brown fox jumps over the lazy dog'.split(' ');
commenceParCaractere(mots, 'q')
commenceParCaractere(mots, 't')

//5 — Chaînes à index pair et longueur paire

function indexPairEtLongueurPaire(chaines) {
    return filter ( chaines , function (el , i){
        return el.length % 2 === 0 && i  % 2 === 0
    })
}
indexPairEtLongueurPaire(['lion','monkey','aardvaark','cat','doge'])

//6 — Déplacer les zéros à la fin

function deplacerZeros(nombres) {
   
}

deplacerZeros([2,0,3,0,40,3,6,0,10,11])



