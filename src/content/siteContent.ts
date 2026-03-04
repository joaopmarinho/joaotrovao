export interface SetItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
  tags: string[];
}

export interface VenueItem {
  id: string;
  name: string;
  location: string;
  events: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string;
}

export interface RitualStage {
  id: string;
  name: string;
  description: string;
}

export interface SiteContent {
  profile: {
    name: string;
    subtitle: string;
    city: string;
    bio: string;
    bioShort: string;
    presskitUrl: string;
    instagramUrl: string;
    soundcloudUrl: string;
    emailUrl: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    featuredSets: SetItem[];
    venues: VenueItem[];
  };
  openFormat: {
    heroTitle: string;
    heroText: string;
    styles: { title: string; description: string }[];
    experiences: ExperienceItem[];
    venues: VenueItem[];
    privateEvents: string;
    production: string;
  };
  artist: {
    heroTitle: string;
    heroText: string;
    ritual: RitualStage[];
    sets: SetItem[];
    gallery: GalleryItem[];
  };
}

export const defaultContent: SiteContent = {
  profile: {
    name: "JOÃO TROVÃO",
    subtitle: "DJ • OPEN FORMAT • ELECTRONIC",
    city: "Recife, PE",
    bio: "DJ recifense com atuação em festas de pop, brasilidades, latin e eletrônico. Criador do projeto artístico Ritual do Trovão.",
    bioShort: "DJ • Produtor • Recife",
    presskitUrl: "https://drive.google.com/drive/u/0/folders/1BzS6SpwHsszBmb65U__fy1RNGn0sUnWK",
    instagramUrl: "https://instagram.com",
    soundcloudUrl: "https://soundcloud.com/jo-o-pedro-887",
    emailUrl: "mailto:contato@joaotrovao.com",
  },
  home: {
    heroTitle: "JOÃO TROVÃO",
    heroSubtitle: "DJ • OPEN FORMAT • ELECTRONIC",
    featuredSets: [
      { id: "s1", title: "Set Supernova Vol. 1", description: "Pop internacional energético", embedUrl: "", tags: ["pop", "dance"] },
      { id: "s2", title: "Clubber Dje Favela Mix", description: "Funk, electro e rave", embedUrl: "", tags: ["funk", "electro", "rave"] },
      { id: "s3", title: "Ritual do Trovão — Live", description: "Techno atmosférico ao vivo", embedUrl: "", tags: ["techno", "live"] },
    ],
    venues: [
      { id: "v1", name: "Iraq", location: "Santo Amaro, Recife", events: ["Discotèque Club", "Supernova", "A Última Indie do Ano"] },
      { id: "v2", name: "Quintal do Sossego", location: "Santo Amaro, Recife", events: ["Clubber 99", "Clubber dje favela"] },
      { id: "v3", name: "Marcela Pub", location: "Recife", events: ["Bailão da Vilko"] },
    ],
  },
  openFormat: {
    heroTitle: "Open Format DJ",
    heroText: "Sets energéticos para manter a pista cheia, transitando entre pop, brasilidades, latinidades e influências eletrônicas.",
    styles: [
      { title: "Pop & Dancefloor", description: "Hits internacionais e nacionais que fazem a pista explodir." },
      { title: "Latin & Brasilidades", description: "Funk, forró, pagode e reggaeton com energia contagiante." },
      { title: "Electronic Club", description: "House, techno e EDM para os momentos de pico da noite." },
    ],
    experiences: [
      { id: "e1", title: "Supernova", description: "Pop internacional: Ariana Grande, Rihanna, Madonna", tags: ["pop", "dance", "internacional"] },
      { id: "e2", title: "Discotèque Club", description: "Lady Gaga + pop/house/dance", tags: ["pop", "house", "dance"] },
      { id: "e3", title: "A Última Indie do Ano", description: "IRAQ Recife: indie/rock/emo/grunge", tags: ["indie", "rock", "emo"] },
      { id: "e4", title: "Clubber dje favela & Clubber 99", description: "Funk/electro/rave/latin club/techno/hard techno/hard dance/bounce/EDM", tags: ["funk", "electro", "rave", "techno"] },
    ],
    venues: [
      { id: "v1", name: "Iraq", location: "Santo Amaro, Recife", events: ["Discotèque Club", "Supernova", "A Última Indie do Ano"] },
      { id: "v2", name: "Quintal do Sossego", location: "Santo Amaro, Recife", events: ["Clubber 99", "Clubber dje favela (after Nbomb)"] },
      { id: "v3", name: "Marcela Pub", location: "Recife", events: ["Bailão da Vilko"] },
    ],
    privateEvents: "Sets personalizados para aniversários e eventos particulares.",
    production: "Atuação como técnico de som e coprodutor em diversas edições da Clubber dje favela, idealizada pela artista Aysha Diablo.",
  },
  artist: {
    heroTitle: "João Trovão — Projeto Artístico",
    heroText: "Techno, electro e trance com narrativa ritualística e atmosférica. Uma jornada sonora do crepúsculo ao renascimento.",
    ritual: [
      { id: "r1", name: "Crepúsculo", description: "O início. Ambient e texturas que preparam o ritual." },
      { id: "r2", name: "Ascensão", description: "A energia cresce. Batidas progressivas e hipnóticas." },
      { id: "r3", name: "Contato", description: "O momento de conexão. Drops intensos e atmosfera elétrica." },
      { id: "r4", name: "Catarse", description: "O clímax. Peak time com máxima intensidade." },
      { id: "r5", name: "Renascimento", description: "O retorno. Melodias etéreas e encerramento transcendental." },
    ],
    sets: [
      { id: "as1", title: "Ritual do Trovão — Capítulo I", description: "Techno progressivo e atmosférico", embedUrl: "", tags: ["techno", "progressive"] },
      { id: "as2", title: "Electro Trance Session", description: "Exploração sonora em trance e electro", embedUrl: "", tags: ["trance", "electro"] },
    ],
    gallery: [
      { id: "g1", imageUrl: "", caption: "Live @ Iraq — Ritual do Trovão" },
      { id: "g2", imageUrl: "", caption: "Setup — Clubber dje favela" },
      { id: "g3", imageUrl: "", caption: "Visual concept art" },
      { id: "g4", imageUrl: "", caption: "Behind the scenes" },
    ],
  },
};
