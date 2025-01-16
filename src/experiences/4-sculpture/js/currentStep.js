export default class Step {
    constructor(initialStep = 1) {
        this.currentStep = initialStep;
    }

    // Méthode pour récupérer l'étape actuelle
    getCurrentStep() {
        return this.currentStep;
    }

    // Méthode pour passer à l'étape suivante
    nextStep() {
        this.currentStep++;
        console.log(`Étape actuelle : ${this.currentStep}`);
    }

    // Méthode pour définir une étape spécifique
    setStep(step) {
        this.currentStep = step;
        console.log(`Étape définie à : ${this.currentStep}`);
    }
}
