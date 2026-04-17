'use client'

import { useState } from 'react'

export type Language = 'es' | 'en' | 'pt' | 'fr' | 'zh' | 'ko'

export const translations = {
  es: {
    aboutMe: 'Acerca de Mí',
    supportMe: 'Apóyame con Solana',
    versesBoard: 'Tablón de Versos',
    videoHighlight: 'Video destacado',
    playlist: 'Mi nueva playlist de 4 canciones increíbles de mi puño y letra, Astroemociones',
    viewPlaylist: 'Ver playlist completa en YouTube',
    poweredBy: 'Powered by sol.site',
    copyButton: 'Copiar omnipresente.sol',
    copyEth: 'Copiar dirección ETH',
    copied: '¡Copiado!',
    owlPoet: 'El poeta buho escribiendo versos a la luz de las velas',
  },
  en: {
    aboutMe: 'About Me',
    supportMe: 'Support Me with Solana',
    versesBoard: 'Verses Board',
    videoHighlight: 'Featured Video',
    playlist: 'My new playlist of 4 incredible songs of my own making, Astroemociones',
    viewPlaylist: 'View full playlist on YouTube',
    poweredBy: 'Powered by sol.site',
    copyButton: 'Copy omnipresente.sol',
    copyEth: 'Copy ETH address',
    copied: 'Copied!',
    owlPoet: 'The poet owl writing verses in candlelight',
  },
  pt: {
    aboutMe: 'Sobre Mim',
    supportMe: 'Apoie-me com Solana',
    versesBoard: 'Quadro de Versos',
    videoHighlight: 'Vídeo em Destaque',
    playlist: 'Minha nova playlist de 4 músicas incríveis de minha própria autoria, Astroemociones',
    viewPlaylist: 'Ver playlist completa no YouTube',
    poweredBy: 'Alimentado por sol.site',
    copyButton: 'Copiar omnipresente.sol',
    copyEth: 'Copiar endereço ETH',
    copied: 'Copiado!',
    owlPoet: 'A coruja poeta escrevendo versos à luz das velas',
  },
  fr: {
    aboutMe: 'À Propos de Moi',
    supportMe: 'Soutenez-moi avec Solana',
    versesBoard: 'Tableau des Vers',
    videoHighlight: 'Vidéo en Vedette',
    playlist: 'Ma nouvelle playlist de 4 chansons incroyables de mon cru, Astroemociones',
    viewPlaylist: 'Voir la playlist complète sur YouTube',
    poweredBy: 'Alimenté par sol.site',
    copyButton: 'Copier omnipresente.sol',
    copyEth: 'Copier l\'adresse ETH',
    copied: 'Copié !',
    owlPoet: 'La chouette poète écrivant des vers à la lueur des bougies',
  },
  zh: {
    aboutMe: '关于我',
    supportMe: '用Solana支持我',
    versesBoard: '诗句板',
    videoHighlight: '精选视频',
    playlist: '我的新播放列表，4首不可思议的原创歌曲，Astroemociones',
    viewPlaylist: '在YouTube上查看完整播放列表',
    poweredBy: '由 sol.site 提供支持',
    copyButton: '复制 omnipresente.sol',
    copyEth: '复制 ETH 地址',
    copied: '已复制!',
    owlPoet: '诗人猫头鹰在烛光下写诗',
  },
  ko: {
    aboutMe: '나에 대해',
    supportMe: 'Solana로 나를 지원하세요',
    versesBoard: '시 게시판',
    videoHighlight: '추천 비디오',
    playlist: '내 새로운 재생목록, 4곡의 놀라운 원곡, Astroemociones',
    viewPlaylist: 'YouTube에서 전체 재생목록 보기',
    poweredBy: 'sol.site에서 제공',
    copyButton: 'omnipresente.sol 복사',
    copyEth: 'ETH 주소 복사',
    copied: '복사됨!',
    owlPoet: '촛불 속에서 시를 쓰는 시인 올빼미',
  },
}

export function useTranslation(language: Language) {
  return translations[language]
}
