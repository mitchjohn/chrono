import React, { Component } from 'react';

class ImproviseThemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      improvisationThemes: [
        "Une conversation entre deux extraterrestres.",
        "Un entretien d'embauche inhabituel.",
        "Un rendez-vous galant catastrophique.",
        "Une dispute entre un robot et un humain.",
     "Un complot pour voler la lune.",
     "Un voyage dans le temps imprévu.",
     "Une réunion de famille dysfonctionnelle.",
     "Une classe d'école pour super-héros.",
     "Un dîner chez le président.",
     "Un sauvetage héroïque de chat coincé dans un arbre.",
     "Un débat entre un sorcier et un scientifique.",
     "Une négociation entre un pirate et un capitaine de navire.",
     "Un entraînement intense pour une compétition de danse.",
     "Une journée dans la vie d'un super-vilain maladroit.",
     "Une chasse au trésor sur une île déserte.",
     "Un voyage dans l'espace avec des touristes extraterrestres.",
     "Une bataille de groupe de rock pour décider de la setlist.",
     "Un cours de cuisine désastreux avec un chef célèbre.",
     "Une conférence sur les licornes dans un monde sans magie.",
     "Un tribunal où tous les personnages sont des animaux."


        // Ajoutez vos autres thèmes d'improvisation ici
      ],
      selectedTheme: '',
      suggestedTime: '',
    };
  }

  generateRandomTheme = () => {
    const { improvisationThemes } = this.state;
    const randomIndex = Math.floor(Math.random() * improvisationThemes.length);
    const randomTheme = improvisationThemes[randomIndex];
    
    // Générer un temps suggéré entre 1 minute 30 (90 secondes) et 3 minutes 30 (210 secondes) avec des bonds de 30 secondes
    const randomTimeSeconds = Math.floor(Math.random() * 5) * 30 + 90; 
    const minutes = Math.floor(randomTimeSeconds / 60);
    const seconds = randomTimeSeconds % 60;
    const suggestedTime = `${minutes} minutes ${seconds} secondes`;
    
    this.setState({
      selectedTheme: randomTheme,
      suggestedTime,
    });
  };

  render() {
    const { selectedTheme, suggestedTime } = this.state;
    return (
      <div>
        <button onClick={this.generateRandomTheme}>Générer un thème aléatoire</button>
        {selectedTheme && suggestedTime && (
          <div>
            <h2>Thème d'improvisation : {selectedTheme}</h2>
            <p>Suggéré pour : {suggestedTime}</p>
          </div>
        )}
      </div>
    );
  }
}

export default ImproviseThemeGenerator;
