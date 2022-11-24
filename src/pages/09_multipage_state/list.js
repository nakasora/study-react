import { useAppContext } from "../../context/AppContext"
import List from '../../components/list'

export default function PageList() {
  const [ list, setList ] = useAppContext();
  
  return <List list={list} />
}