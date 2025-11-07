/*  Dans ce script javascript, nous allons améliorer notre code MotsEtPhrases qu'on avait écrit dans le dossier
    des boucles en le rendant plus modulaire avec des fonctions. Nous aurons à écrire 4 fonctions chacun ayant un role
    bien défini, les 4 fonctions sont les suivantes:
    -   choisirPhrasesOuMots: Cette fonction est sans paramètres, elle va nous permettre de demander à l'utilisateur
        de choisir la liste sur laquelle il/elle sera évalué(e) et elle retourne le choix de l'utilisateur
    -   lancerBoucleJeu: Cette fonction lancera la boucle principale du jeu, elle prendra en paramètre le tableau choisi
        par l'utilisateur et demandera à celui ci de taper les différents mots contenus dans le tableau, elle retourne 
        le nombre de mots correctement tapés
    -   afficherResultat: Cette fonction aura pour but d'afficher le score de l'utilisateur, elle prendra en paramètre le score obtenu
        et le nombre de mots que l'utilisateur à eu à taper
    -   lancerJeu: Cette fonction est celle qui va appeler toutes les fonctions décrites ci-haut, c'est en quelque sorte la fonction 
        principale de notre code
*/

/*
function choisirPhrasesOuMots()
{
    let choix;
    do
    {
        // choix = prompt("Quelle liste souhaitez vous choisir?(Mots ou Phrases): ")

    }while(choix !== "Mots" && choix !== "Phrases");

    return choix;
}*/

/*
function lancerBoucleJeu(listeEval)
{
    len = listeEval.length;
    let score = 0;
    for(let i = 0; i < len; i++)
    {
        // motUtilisateur = prompt("Tapez le mot: " + listeEval[i]);

        if(motUtilisateur === listeEval[i])
        {
            score++
        }
    }

    return score;
}*/

// La fonction afficherResultat, affiche dorénavant le resultat directement sur l'interface et non en console
function afficherResultat(scoreUtilisateur, nombreMotMax)
{
    resultat = `${scoreUtilisateur} / ${nombreMotMax}`;
    let zoneScore = document.querySelector(".score span"); 
    zoneScore.textContent = resultat; // ou zoneScore.innerText = resultat;
    
    // resultat = "Votre score est: " + scoreUtilisateur + "/" + nombreMotMax;
    // console.log(resultat)
}
function afficherPropositions(propositionAAfficher)
{
    let propositions_area = document.querySelector(".propositions input");
    propositions_area.value = propositionAAfficher;
}
function lancerJeu()
{
    
    let score = 0;
    let i = 0;
    afficherPropositions(listeMots[i]);

    // Recuperation du bouton de validation pour lui ajouter un listener
    let validationButton = document.getElementById("validation");
    let answersArea = document.querySelector(".answers_and_validation_area input");

    validationButton.addEventListener("click", () =>{

            if(answersArea.value === listeMots[i])
                score++;

            afficherResultat(score, listeMots.length);

            answersArea.value = "";
            i++
            if(listeMots[i] !== undefined)
            {
                afficherPropositions(listeMots[i]);

            }

            else
            {
                afficherPropositions("Fin du jeu");
                answersArea.disabled = true;
                validationButton.disabled = true;
            }
    });


    // afficherResultat(score, listeMots.lenght)
}