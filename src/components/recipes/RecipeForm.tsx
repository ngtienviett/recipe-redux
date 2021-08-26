import React from 'react';
import { ErrorMessage, FastField, FieldArray, Form, Formik, FormikProps } from 'formik';
import * as Yup from "yup";
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state_managenment/reducers';
import { addRecipe, updateActiveID, updateRecipe } from '../../state_managenment/actions/action_creators';

type Params = {
  id: string
}

const validationSchma = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  imageURL: Yup.string().url("ImageURL must be a valid URL").required("Image URL is required"),
  description: Yup.string().required("Description is required"),
  ingredients: Yup.array(Yup.object({
    name: Yup.string().required("Ingredient name is required"),
    amount: Yup.number().min(1, "Quantity must be greater than or equal to 1").required("Ingredient quantity is required")
  }))
})
const RecipeForm = () => {
  const initialValue: Recipe = {
    id: Math.floor(Math.random()*1000),
    name: "",
    imageURL: "",
    description: "",
    ingredients: []
  }

  const { recipeList } = useSelector((state: RootState)=> state.recipeReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<Params>();

  const handleClickCancel = () => {
    dispatch(updateActiveID(-1));
    history.push("/recipes");
  }

  let value = initialValue;
  
  // edit recipe
  var id = parseInt(params.id);
  if(!isNaN(id)){
    let recipe = recipeList.find(item => item.id === id);
    if(recipe === undefined){
      history.replace("/recipes/form");
    }else {
      value = recipe;
    }
  }

  return (
    <Formik
      initialValues={value}
      validationSchema={validationSchma}
      onSubmit={(values) => {
        setTimeout(() => {
          // add new recipe
          if(value.id === initialValue.id) {
            dispatch(addRecipe(values));
          }
          //update recipe
          else {
            dispatch(updateRecipe(values));
          }
          dispatch(updateActiveID(-1));
          history.push("/recipes");
        }, 500);
      }}
    >
      {(form : FormikProps<Recipe>) => (
        <Form>
          <div className="my-4">
            <button disabled={!(form.isValid && form.dirty)} type="submit" className="btn btn-success mr-2">Save</button>
            <button type="button" className="btn btn-danger" onClick={handleClickCancel}>Cancel</button>
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Name</label>
            <FastField name="name" placeholder="Name" className="form-control"/>
            <div className="mt-2 text-danger small">
              <ErrorMessage name="name"/>
            </div>
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Image URL</label>
            <FastField name="imageURL" placeholder="Image URL" className="form-control"/>
            <div className="mt-2 text-danger small">
              <ErrorMessage name="imageURL"/>
            </div>
            {!form.errors.imageURL && (form.values.imageURL) && 
              (<img
                src={form.values.imageURL}
                className="text-danger small"
                alt="This image can not found by this URL"
              />
            )}
          </div>
          <div className="form-group">
            <label className="font-weight-bold">Description</label>
            <FastField as="textarea" name="description" placeholder="Description" className="form-control" />
            <div className="mt-2 text-danger small">
              <ErrorMessage name="description"/>
            </div>
          </div>
          <FieldArray name="ingredients">
            {(props) => {
              const { push, remove } = props;
              const { ingredients } = form.values;
              
              return (
                <div className="form-group mt-2">
                  {ingredients.map((item: Ingredient, index: number) => (
                    <div key={index} className="mt-2">
                      <div className="row">
                        <div className="col-8">
                          <FastField
                            placeholder="Ingredient name"
                            name={`ingredients[${index}].name`}
                            className="form-control"
                          />
                        </div>
                        <div className="col-2">
                          <FastField
                            name={`ingredients[${index}].amount`}
                            className="form-control"
                            type="number"
                          />
                        </div>
                        <div className="col-1">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>{ remove(index)}}
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <div className="row px-3">
                        <div className="text-danger small">
                          <ErrorMessage name={`ingredients[${index}].name`}/> 
                        </div>
                      </div>
                      <div className="row px-3">
                        <div className="text-danger small">
                          <ErrorMessage name={`ingredients[${index}].amount`}/>
                        </div>
                      </div>
                      
                    </div>
                  ))}

                  <button
                    type="button"
                    className="btn btn-success mt-5"
                    onClick={() => push({id: Math.floor(Math.random()*10000), name: "", amount: 1 })
                    }
                  >
                    Add Ingredient
                  </button>
                </div>
              );
            }}
          </FieldArray>
        </Form>
  )}
    </Formik>
  )
}

export default RecipeForm
