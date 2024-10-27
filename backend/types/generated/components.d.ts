import type { Schema, Attribute } from '@strapi/strapi';

export interface WebComponentsTracking extends Schema.Component {
  collectionName: 'components_web_components_trackings';
  info: {
    displayName: 'Tracking';
    icon: 'question';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    primaryButton: Attribute.Component<'web-components.button', true>;
    orderCode: Attribute.Password;
  };
}

export interface WebComponentsNavbar extends Schema.Component {
  collectionName: 'components_web_components_navbars';
  info: {
    displayName: 'Navbar';
    icon: 'bulletList';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    primaryButton: Attribute.Component<'web-components.button', true>;
    secondaryButton: Attribute.Component<'web-components.button', true>;
  };
}

export interface WebComponentsHero extends Schema.Component {
  collectionName: 'components_landing_page_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Placeholder: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface WebComponentsButton extends Schema.Component {
  collectionName: 'components_web_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    buttonText: Attribute.String;
    icon: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'web-components.tracking': WebComponentsTracking;
      'web-components.navbar': WebComponentsNavbar;
      'web-components.hero': WebComponentsHero;
      'web-components.button': WebComponentsButton;
    }
  }
}
