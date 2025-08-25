export interface IPet {
    _id: number;
    nome: string;
    tipo: string;
    sexo: string;
    idade: number;
    idadeUnidade: string;
    porte: string;
    isCastrado: boolean | null;
    isVacinado: boolean | null;
    isVermifugado: boolean | null;
    descricao: string;
    fotoUrl: string
}