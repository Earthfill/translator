import { Injectable } from '@nestjs/common';

@Injectable()
export class TranslationService {
  private translations: Record<string, Record<string, string>> = {
    en: {
      welcomeMessage: 'Welcome to our website!',
      aboutUs: 'Learn more about us',
      contactUs: 'Contact us for inquiries',
      buttonLabel: 'Click here',
    },
    fr: {
      welcomeMessage: 'Bienvenue sur notre site web!',
      aboutUs: 'En savoir plus sur nous',
      contactUs: 'Contactez-nous pour toute demande',
      buttonLabel: 'Cliquez ici',
    },
    es: {
      welcomeMessage: '!Bienvenue a nuestro sitio web!',
      aboutUs: 'Conozca mas sobre nosotros',
      contactUs: 'Contactenos para consultas',
      buttonLabel: 'Hala clic aqui',
    },
  };

  getTranslation(language: string, key: string): string {
    const translationsForLamguage = this.translations[language] || {};
    return (
      translationsForLamguage[key] || `Translation not found for key: ${key}`
    );
  }
}
