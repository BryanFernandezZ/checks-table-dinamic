import { GrupoPartida } from "./model/data.model";

export const PARTIDAS_DATA: Array<GrupoPartida> =
    [
        {
            id: 1,
            descripcion: "Carpinteria y Cristales",
            partidas: [
                {
                    id: 6,
                    descripcion: "Lorem, ipsum dolor sit amet consectetur",
                    unidadMedida: "m2",
                    esHabilitado: false,
                },
                {
                    id: 7,
                    descripcion: "Lorem, ipsum dolor sit adipisicing elit. Quibusdam,?",
                    unidadMedida: "glb",
                    esHabilitado: false,
                },
                {
                    id: 8,
                    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium?",
                    unidadMedida: "glb",
                    esHabilitado: false,
                }
            ],
            subGrupoPartidas: [
                {
                    id: 1,
                    descripcion: "Carpinteria de Madera",
                    partidas: [
                        {
                            id: 1,
                            descripcion: "Lorem, ipsum dolor sit amet consectetur praesentium?",
                            unidadMedida: "m2",
                            esHabilitado: false,
                        },
                        {
                            id: 2,
                            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium?",
                            unidadMedida: "glb",
                            esHabilitado: false,
                        }
                    ],
                    esHabilitado: false
                },
                {
                    id: 2,
                    descripcion: "Carpinteria de Cristales",
                    partidas: [
                        {
                            id: 3,
                            descripcion: "Lorem, sit amet consectetur adipisicing elit. Quibusdam?",
                            unidadMedida: "m2",
                            esHabilitado: false,
                        },
                        {
                            id: 4,
                            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
                            unidadMedida: "glb",
                            esHabilitado: false,
                        },
                        {
                            id: 5,
                            descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, praesentium?",
                            unidadMedida: "glb",
                            esHabilitado: false,
                        }
                    ],
                    esHabilitado: false
                }
            ]
        }
    ]