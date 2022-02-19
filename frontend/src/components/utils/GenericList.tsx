import { ReactElement } from 'react'
import Spinner from 'components/utils/Spinner'

interface IGenericListProps {
  list: any
  loadingUI?: ReactElement
  emptyListUI?: ReactElement
  children: ReactElement
}

const GenericList: React.FC<IGenericListProps> = ({ list, loadingUI, emptyListUI, children }) => {
  if (!list) {
    if (loadingUI) {
      return loadingUI
    }
    return <Spinner />
  }

  if (list.length === 0) {
    if (emptyListUI) {
      return emptyListUI
    }
    return <>There are no elements to display</>
  }

  return children
}

export default GenericList
