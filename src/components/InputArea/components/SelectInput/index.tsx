import * as C from './styles'

type Props = {
  name: string,
  categories?: string[],
  onChange: (value: any) => void,
}
export const SelectInput = ({name, categories, onChange}: Props) => {
  return (
    <C.Container>
      <C.Label>
        {name}
      </C.Label>
      <C.Select onChange={e => onChange(e.target.value)}>
          <option></option>
          {categories!.map((item, index) => ( 
            <option key={index} value={item}> {item} </option>
          
            )
          )}
      </C.Select>
    </C.Container>
  )
}
