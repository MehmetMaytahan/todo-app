import React from "react";
import { Formik, Form, Field } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/TodoContext";

const NewTodoForm = () => {
  const { AddTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        AddTodo(values.text);
        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          id="text"
          name="text"
          placeholder="What needs to be done?"
          autoFocus
        />
      </Form>
    </Formik>
  );
};

export default NewTodoForm;
