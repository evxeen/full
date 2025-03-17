// import { trpc } from '../../../lib/trpc.tsx'
// import { TableBodyElement } from '../../components/TableBodyElement'
// import { TableHeadElement } from '../../components/TableHeadElement'

export const AllProducts = () => {
  // const { data, error, isLoading, isFetching, isError } = trpc.getAllProducts.useQuery()
  // const tableHeadElements = [
  //   'Вид продукции',
  //   'Название',
  //   'Диаметр',
  //   'Длина',
  //   'Покрытие',
  //   'Толщина покрытия',
  //   'Класс прочности',
  //   'Шаг резьбы',
  //   'Длина резьбы',
  //   'Допуск резьбы',
  //   'Тип шлица',
  //   'Исполнение',
  //   'Тип упаковки',
  //   'Конструкционное обозначение',
  //   'Заказ',
  //   'Заказано, кг',
  //   'Отгружено, кг',
  //   'Свободная продажа, кг',
  // ]

  // if (isLoading || isFetching) {
  //   return <div>Loading...</div>
  // }
  // if (isError) {
  //   return <div>Error: {error.message}</div>
  // }

  return (
    <table>
      <thead>
        <tr>
          {/* {tableHeadElements.map((el) => ( */}
          {/*  <TableHeadElement el={el} /> */}
          {/* ))} */}
        </tr>
      </thead>
      <tbody>
        {/* {data.products.map((el) => ( */}
        {/*  <TableBodyElement el={el} /> */}
        {/* ))} */}
      </tbody>
    </table>
    // <div>
    //   <h1 className={css.title}>Каталог</h1>
    //   <div className={css.ideas}>
    //     {data.products.map((product) => (
    //       <div className={css.idea} key={product.nNumber}>
    //         <h2 className={css.ideaName}>
    //           <Link className={css.ideaLink} to={getViewProductRoute({ productName: product.name })}>
    //             {product.name}
    //           </Link>
    //         </h2>
    //         <p className={css.ideaDescription}>{product.groupName}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  )
}
