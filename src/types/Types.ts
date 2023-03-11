export interface BonusRow {
  bonusKey: number;
  bonusWorker: number;
  bonusType: string;
  comment: string;
}

export interface ChiefRow {
  chiefKey: number;
  fioChief: string;
  base: string;
}

export interface DepotRow {
  depotKey: number;
  isExternal: boolean;
  bankExternal: string;
  innExternal: number;
  adressExternal: string;
}

export interface LocomotiveRow {
  locomotiveKey: number;
  regNumber: number;
  kindValue: string;
  typeValue: string;
  typeYear: number;
  picture: boolean;
  regName: string;
}

export interface RepairRow {
  repairKey: number;
  dateStart: Date;
  dateStop: Date;
  reasonValue: string;
  typeRepair: string;
  bonus: boolean;
  money: number;
  bonusPercent: number;
}

export interface WorkerRow {
  workerKey: number;
  fioWorker: string;
  baseWorker: string;
  specialtyWorker: string;
  yearWorker: number;
}

export interface Response {
  count: number;
  rows: Array<BonusRow | ChiefRow | DepotRow | LocomotiveRow | RepairRow | WorkerRow>;
}

export enum PositionsList {
  homeMenu = 'homeMenu',
  tablesList = 'tablesList',
  table = 'table',
  adddingModal = 'adddingModal',
  deletingModal = 'deletingModal',
}

export enum ChoosenTable {
  bonus = 'Bonus',
  repair = 'Repair',
  worker = 'Worker',
  chief = 'Chief',
  locomotive = 'Locomotive',
  depot = 'Depot',
}

export interface TableData {
  id: number;
  title: ChoosenTable.bonus;
  columnNamesRu: Array<string>;
  columnNames: Array<string>;
  pKey: string;
}
