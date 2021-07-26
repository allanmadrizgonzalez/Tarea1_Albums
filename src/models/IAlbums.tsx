import IFoto from "./IFoto";

export default interface IAlbums{
    userId: number;
    id: number;
    title: string;
    photo:IFoto[]
}