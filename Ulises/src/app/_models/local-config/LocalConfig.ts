import { FileItem } from "../commons/FileItem";

export class LocalConfig {

    BackupServiceDomain!: string;
    Date!: string;
    Files!: FileItem[];
    HistoricsDeep!: number;
    LoadIndexControlEnabled!: boolean;
    LoginSystemTrace!: boolean;
    LoginTimeOut!: number;
    MySQL!: string;
    NodeJS!: string;
    R16Mode!: boolean;
    Region!: string;
    SubVersion!: string;
    Version!: string;
    dbdatabase!: string;
    dbhost!: string;
    dbpassword!: string;
    dbport!: string;
    dbuser!: string;
    log2con!: string;
    log2file!: string;
    logfile_maxfiles!: number;
    logfile_path!: string;
    logfile_sizefile!: number;
    maxCycleTime!: number;
    morgan!: boolean;
    refreshTime!: number;
    timeout!: number;
    ntpDefault !: string;
}