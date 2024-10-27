import { UsuarioTipo } from "../Modelo/UsuarioTipo"
export type UsuarioContextoTipo = {
    usuario:UsuarioTipo,
    codigoRespuesta:number,
    setUsuario:(usuarioNuevo:UsuarioTipo)=>void
}