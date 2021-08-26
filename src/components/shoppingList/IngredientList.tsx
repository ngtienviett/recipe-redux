
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { updateMode } from '../../state_managenment/actions/action_creators';
import { RootState } from '../../state_managenment/reducers'

const IngredientList = () => {
  const { ingredientList } = useSelector((state : RootState) => state.shoppingListReducer);
  const dispatch = useDispatch();
  const handleClickDetail = (id : number) => {
    dispatch(updateMode(id));
  }
  return (
    <ul className="list-group">
      {ingredientList.map((item) => {
        return (
          <li key={item.id} className="list-group-item" onClick={() => handleClickDetail(item.id)}>{item.name} ({item.amount})</li>
        )
      })}
    </ul>
  )
}

export default IngredientList
