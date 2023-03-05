import { Form } from 'react-bootstrap';

function SearchBar(props) {
  const { searchQuery, setSearchQuery, handlecheckStock } = props;

  return (
    <div>
      <Form className="w-75 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="search">Search</Form.Label>
          <Form.Control
            type="text"
            name="search"
            placeholder="Search product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center align-items-center">
          <Form.Check
            type="checkbox"
            id="showStock"
            label="Only show products in Stock"
            onChange={() => handlecheckStock()}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchBar;
