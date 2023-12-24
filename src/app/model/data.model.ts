export interface Partida {
  id: number;
  descripcion: string;
  unidadMedida: string;
  esHabilitado: boolean;
}

export interface SubGrupoPartida {
  id: number;
  descripcion: string;
  partidas: Array<Partida>;
  esHabilitado: boolean;
}

export interface GrupoPartida {
  id: number;
  descripcion: string;
  partidas: Array<Partida>;
  subGrupoPartidas: Array<SubGrupoPartida>
}



/***  PARTIDA PROYECTO  ***/
export interface PartidaProyecto {
  partidaId: number;
  esHabilitado: boolean;
} 