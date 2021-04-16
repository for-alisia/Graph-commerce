import useForm from '../lib/useForm';
import Form from './styles/Form';

function CreateProduct() {
  const { inputs, handleChange, clearForm } = useForm({ name: '', price: '', description: '' });

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
        }}
      >
        <fieldset>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="price">
            Price:
            <input
              type="number"
              name="price"
              id="price"
              placeholder="price"
              value={inputs.price}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="description">
            Description:
            <textarea
              name="description"
              id="description"
              placeholder="description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="image">
            Image:
            <input type="file" name="image" id="image" onChange={handleChange} />
          </label>
        </fieldset>

        <button type="submit">+ Add Product</button>
      </Form>
    </div>
  );
}

export default CreateProduct;
