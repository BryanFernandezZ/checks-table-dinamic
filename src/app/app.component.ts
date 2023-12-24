import { Component, OnInit } from '@angular/core';
import { GrupoPartida, Partida, PartidaProyecto, SubGrupoPartida } from './model/data.model';
import { PARTIDAS_DATA } from './data.dummy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  grupoPartida: Array<GrupoPartida> = Array()
  partidasProyecto: Array<PartidaProyecto> = Array()

  isHabilitarChecked: boolean = false

  ngOnInit(): void {
    this.initVariables()
    this.initPartidasProyecto()
  }

  initVariables() {
    this.grupoPartida = PARTIDAS_DATA
  }

  initPartidasProyecto() {
    //  TODO: NOT YET IMPLEMENTED
  }

  onHabilitarChange(checked: boolean) {
    this.isHabilitarChecked = checked

    this.grupoPartida = [...this.grupoPartida.map(gp => {
      gp.partidas.map(p => p.esHabilitado = checked)
      gp.subGrupoPartidas.map(sgp => {
        sgp.esHabilitado = checked
        sgp.partidas.map(p => p.esHabilitado = checked)
        return sgp
      })
      return gp
    })]
  }

  onSubGrupoHabilitarChange(subGrupoPartidaId: number, checked: boolean) {
    this.grupoPartida = [...this.grupoPartida.map(gp => {
      const subGrupoPartida = gp.subGrupoPartidas.find(sgp => sgp.id === subGrupoPartidaId)

      if(subGrupoPartida !== undefined) {
        subGrupoPartida.partidas.map(p => p.esHabilitado = checked)
      }

      this.checkSubPartidasHabilitado(subGrupoPartida)
      this.checkPartidasHabilitado()

      return gp
    })]
  }

  onPartidaHabilitarChange(partidaId: number, checked: boolean, subGrupoPartida?: SubGrupoPartida) {
    if (subGrupoPartida !== undefined) {
      const partida = subGrupoPartida.partidas.find(p => p.id === partidaId)
      if (partida !== undefined) partida.esHabilitado = checked
    } else {
      const partida = this.grupoPartida[0].partidas.find(p => p.id === partidaId)
      if (partida !== undefined) partida.esHabilitado = checked
    }

    this.checkSubPartidasHabilitado(subGrupoPartida)
    this.checkPartidasHabilitado()
  }

  checkPartidasHabilitado() {
    const partidasCantidadDehabilitados = this.grupoPartida[0].partidas.filter(p => !p.esHabilitado).length
    let subPartidasCantidadDehabilitados = 0

    this.grupoPartida[0].subGrupoPartidas.forEach(sgp => {
      sgp.partidas.forEach(p => {
        if(!p.esHabilitado) subPartidasCantidadDehabilitados++
      })
    })

    if (partidasCantidadDehabilitados > 0 || subPartidasCantidadDehabilitados > 0) this.isHabilitarChecked = false      
    else this.isHabilitarChecked = true
  }

  checkSubPartidasHabilitado(subGrupoPartida?: SubGrupoPartida) {    
    if(subGrupoPartida !== undefined) {
      const subPartidasCantidadDehabilitados = subGrupoPartida.partidas.filter(p => !p.esHabilitado).length

      if(subPartidasCantidadDehabilitados >  0) subGrupoPartida.esHabilitado = false
      else subGrupoPartida.esHabilitado = true
    }
  }
}