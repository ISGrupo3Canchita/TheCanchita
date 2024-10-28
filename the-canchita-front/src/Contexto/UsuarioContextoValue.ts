import { UsuarioTipo } from "../Modelo/UsuarioTipo"
export type UsuarioContextoValue = {
    usuario:UsuarioTipo,
    setUsuario:(usuarioNuevo:UsuarioTipo)=>void,
}