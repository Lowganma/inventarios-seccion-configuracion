import { create } from "zustand";
import { contarusuariosXempresa, MostrarEmpresa, supabase } from "../index";

export const useEmpresaStore = create((set, get) => ({
  contadorusuarios: 0,
  dataempresa: {},
  mostrarEmpresa: async (p) => {
    const response = await MostrarEmpresa(p);
    set({ dataempresa: response});
    return response;
  },
  contarusuariosXempresa: async (p) => {
    const response = await contarusuariosXempresa(p);
    set({ contadorusuarios: response });
    return response;

  },
}));
