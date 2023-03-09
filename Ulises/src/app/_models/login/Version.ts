import { FileItem } from "../commons/FileItem";

export class Version {
    file!: FileItem[];
    version!: string;
    subversion!: string;
    date!: string;
    nodejsversion!: string;
    mysqlversion!: string;
    R16Mode!: boolean;
    filef!: FileItem[];
}