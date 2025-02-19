import { initTRPC } from '@trpc/server'

const products = [
  {
    groupName: 'Гвозди',
    nomenclatureNumber: '12345',
    constructionMark: 'CM-001',
    name: 'Гвоздь строительный',
    strengthClass: 'C5',
    diameter: '5 мм',
    length: '50 мм',
    coating: 'Цинковое',
    coatingColor: 'Серебристый',
    coatingThickness: '15 мкм',
    threadLength: null,
    threadTolerance: null,
  },
  {
    groupName: 'Болты',
    nomenclatureNumber: '23456',
    constructionMark: 'CM-002',
    name: 'Болт с шестигранной головкой',
    strengthClass: 'C4',
    diameter: '10 мм',
    length: '70 мм',
    coating: 'Гальванизация',
    coatingColor: 'Желтый',
    coatingThickness: '25 мкм',
    threadLength: '35 мм',
    threadTolerance: 'H2',
  },
  {
    groupName: 'Винты',
    nomenclatureNumber: '34567',
    constructionMark: 'CM-003',
    name: 'Винт с потайной головкой',
    strengthClass: 'C6',
    diameter: '4 мм',
    length: '20 мм',
    coating: 'Оксидирование',
    coatingColor: 'Черный',
    coatingThickness: '12 мкм',
    threadLength: '15 мм',
    threadTolerance: 'H1',
  },
  {
    groupName: 'Гвозди',
    nomenclatureNumber: '45678',
    constructionMark: 'CM-004',
    name: 'Гвоздь с резьбой',
    strengthClass: 'C7',
    diameter: '6 мм',
    length: '60 мм',
    coating: 'Эпоксидное покрытие',
    coatingColor: 'Красный',
    coatingThickness: '20 мкм',
    threadLength: null,
    threadTolerance: null,
  },
  {
    groupName: 'Болты',
    nomenclatureNumber: '56789',
    constructionMark: 'CM-005',
    name: 'Болт для металла',
    strengthClass: 'C8',
    diameter: '8 мм',
    length: '80 мм',
    coating: 'Антикоррозийное покрытие',
    coatingColor: 'Золотистый',
    coatingThickness: '18 мкм',
    threadLength: '40 мм',
    threadTolerance: 'H3',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getAllProducts: trpc.procedure.query(() => {
    return { products }
  }),
})

export type TrpcRouter = typeof trpcRouter
