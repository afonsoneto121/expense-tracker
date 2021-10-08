import { Item } from '../../types'
import { TableItem } from '../TableItem'
import * as C from './styles'

type Props = {
  list: Item[]
}
export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
          <C.TableHeadColumn width={110} >Categoria</C.TableHeadColumn>
          <C.TableHeadColumn>Título</C.TableHeadColumn>
          <C.TableHeadColumn width={150} >Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {
          list.map((value, index) => (
            <TableItem key={index} item={value}/>
          ))
        }
      </tbody>
    </C.Table>
  )
}
