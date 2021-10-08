import { useEffect, useState } from 'react'
import { categories, items } from '../../data'
import { Item } from '../../types'
import { LabelInput } from './components/LabelInput'
import { SelectInput } from './components/SelectInput'
import * as C from './styles'

type Props = {
  onAdd: (item: Item) => void,
}
export const InputArea = ({onAdd}: Props) => {

  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);

  const [categoriesList, setCategoriesList] = useState<string[]>([])
  
  useEffect(() => {
    let categoryKeys: string[] = Object.keys(categories);
    
    setCategoriesList(categoryKeys)
  },[])


  const handleDateValueChange = (value: Date) => {
    setDate(new Date(value));
  }
  const handleCategoryValueChange = (value: string) => {
    setCategory(value);
  }
  const handleTitleValueChange = (value: string) => {
    setTitle(value);
  }
  const handleValueChange = (value: string) => {
    let convert = parseFloat(value);
    setValue(convert);
  }
  
  const handleSubmit = () => {
    let item: Item = {
      date: date,
      category: category,
      title: title,
      value: value,
    }
    onAdd(item);
  }
  return (
    <C.Container>
        <C.FormGroup>
          <LabelInput name="Data"
            type="date"
            placeholder="dd-mm-yyyy"
            onChange={handleDateValueChange}

          />

          <SelectInput name="Categoria"
                       onChange={handleCategoryValueChange}
                       categories={categoriesList}
                        />

          <LabelInput name="Titulo"
                      type="text"
                      onChange={handleTitleValueChange}

          />
          <LabelInput name="Valor"
                      type="number"
                      onChange={handleValueChange}

          />

          <button type="submit" onClick={handleSubmit} >Adicionar Item</button>
          
        </C.FormGroup>
    </C.Container>
  )
}
