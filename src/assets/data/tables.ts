import { ChoosenTable, TableData } from '../../types/Types';

export default [
  {
    id: 0,
    title: ChoosenTable.bonus,
    columnNamesRu: ['Величина премии (р.)', 'Тип премии', 'Комментарий', 'id Работника'],
    columnNames: ['bonusWorker', 'bonusType', 'comment', 'WorkerWorkerKey'],
    pKey: 'bonusKey',
  },
  {
    id: 1,
    title: ChoosenTable.repair,
    columnNamesRu: [
      'Дата начала ремонта',
      'Дата окончания',
      'Причина',
      'Тип ремонта (плановый/внеплановый)',
      'Премия (полагается / нет)',
      'Стоимость',
      'Процент премиальных',
      'id Бригадира',
      'id Локомотива',
    ],
    columnNames: [
      'dateStart',
      'dateStop',
      'reasonValue',
      'typeRepair',
      'bonus',
      'money',
      'bonusPercent',
      'ChiefChiefKey',
      'LocomotiveLocomotiveKey',
    ],
    pKey: 'repairKey',
  },
  {
    id: 2,
    title: ChoosenTable.worker,
    columnNamesRu: [
      'ФИО работника',
      'Образование',
      'Специальность',
      'Стаж (лет)',
      'id Бригадира',
    ],
    columnNames: [
      'fioWorker',
      'baseWorker',
      'specialtyWorker',
      'yearWorker',
      'ChiefChiefKey',
    ],
    pKey: 'workerKey',
  },
  {
    id: 3,
    title: ChoosenTable.chief,
    columnNamesRu: ['ФИО бригадира', 'Образование'],
    columnNames: ['fioChief', 'base'],
    pKey: 'chiefKey',
  },
  {
    id: 4,
    title: ChoosenTable.locomotive,
    columnNamesRu: [
      'Рег. номер',
      'Марка',
      'Тип (груз, пасс. и т. д.)',
      'Год выпуска',
      'Изображение (true / false)',
      'Приписка к депо',
      'id Депо',
    ],
    columnNames: [
      'regNumber',
      'kindValue',
      'typeValue',
      'typeYear',
      'picture',
      'regName',
      'DepotDepotKey',
    ],
    pKey: 'locomotiveKey',
  },
  {
    id: 5,
    title: ChoosenTable.depot,
    columnNamesRu: ['Внешний (true / false)', 'Банк', 'ИНН', 'Адрес'],
    columnNames: ['isExternal', 'bankExternal', 'innExternal', 'adressExternal'],
    pKey: 'depotKey',
  },
] as Array<TableData>;