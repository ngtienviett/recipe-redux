import { ErrorMessage, FastField, Field, FieldProps, Form, Formik, FormikProps, FormikState } from "formik";
import * as Yup from "yup";
import { RootState } from '../../state_managenment/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, deleteIngredient, updateIngredient, updateMode } from "../../state_managenment/actions/action_creators";

const validationSchma = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  amount: Yup.number()
    .min(1, "Quantity must be greater than or equal to 1")
    .required("Quantity is required"),
})
const IngredientForm = () => {
  const { ingredientList, id } = useSelector((state : RootState) => state.shoppingListReducer);
  const dispatch = useDispatch();


  const initialValue: Ingredient = {
    id: Math.floor(Math.random()*10000),
    name: "",
    amount: 1
  }
  var value: Ingredient | undefined = (id === -1) ? initialValue : 
  ingredientList.find(item => item.id === id);

  const handleDeleteIngredient = (id: number) =>{
    dispatch(deleteIngredient(id));
  }
  return (
    <Formik
      enableReinitialize
      initialValues={value || initialValue}
      validationSchema={validationSchma}
      onSubmit={(values, {resetForm}) => {
        // setTimeout(() => {
          if(id === -1){
            dispatch(addIngredient(values));
            resetForm();
          }else {
            dispatch(updateIngredient(values));
            dispatch(updateMode(-1));
            resetForm();
          }
        // }, 500);
      }}
    >
      {(form : FormikProps<Ingredient>) => (
        <Form>
          <div className="row mx-0">
            <div className="form-group col-6 pl-0">
              <label className="font-weight-bold">
                Name
              </label>
              <FastField name="name" placeholder="Ingredient name" className="form-control" />
              <div className="text-danger small">
                <ErrorMessage name="name"/>
              </div>
            </div>
            <div className="form-group col-6">
              <label className="font-weight-bold">
                Amount
              </label>
              <FastField name="amount" placeholder="" className="form-control col-3" type="number"/>
              <div className="text-danger small">
                <ErrorMessage name="amount"/>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            {(id !== -1) ? 
              <>
                <button disabled={!(form.isValid && form.dirty)} type="submit" className="btn btn-success mr-2">
                  Update
                </button>  
                <button 
                  onClick={() => {
                    dispatch(deleteIngredient(id)); 
                    dispatch(updateMode(-1)); 
                    form.resetForm();
                  }} 
                  type="button" className="btn btn-danger mr-2">
                Delete
                </button>
              </> : 
                <button disabled={!(form.isValid && form.dirty)} type="submit" className="btn btn-success mr-2">
                  Add
                </button>
            }
            
            <button 
              onClick={() =>{
                if(id === -1){
                  form.resetForm();
                }else {
                  form.resetForm({values : {id: id,name: "",amount: 1}});
                }
              }} 
              type="reset" className="btn btn-primary">
              Clear
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default IngredientForm
