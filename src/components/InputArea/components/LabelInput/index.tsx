import * as C from './styles'

type Props = {
  name: string,
  placeholder?: string,
  value?: any,
  onChange: (value: any) => void,
  type?: string,
}
export const LabelInput = ({ name, value, placeholder, onChange, type }: Props) => {
  return (
    <C.Input>
      <C.Label>
        {name}

      </C.Label>
      <C.Value>
        <input type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)} value={value}/>
      </C.Value>
    </C.Input>
  )
}
