import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom';
import { updateActiveID } from '../../state_managenment/actions/action_creators';
import { RootState } from '../../state_managenment/reducers'

const RecipeList = () => {
  const {recipeList,activeID} = useSelector((state: RootState) => state.recipeReducer);
  const history = useHistory();
  const dispatch = useDispatch();
  const match =  useRouteMatch();
  const handleClickDetail = (id: number) =>{
    dispatch(updateActiveID(id));
    history.push(`${match.path}/detail/${id}`);
  }
  return (
    <ul className="list-group">
      {recipeList.map((item: Recipe) => {
        return (
          <li key={item.id} className="list-group-item border-0 p-0 my-1" onClick={ ()=>handleClickDetail(item.id)}>
            <div className={`card ${((activeID === item.id))? "active-item": ""}`}>
              <div className="card-body row justify-content-between align-items-center">
                <div className="card-text col-8">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-img col-2">
                  <img
                    src={item.imageURL}
                    alt="This browser can support to display this image"
                  />
                </div>
              </div>
            </div>
          </li>
        )
      }) }
    </ul>
  )
}

export default RecipeList
