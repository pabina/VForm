import React from "react";
import { Form, Button ,Container,Row,Col} from "react-bootstrap";
import { useForm } from "react-hook-form";
import CallApi from "../service/Api";

type FormData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  gender: string;
  qualification: string;
  dob: string;
  preferedmodofcontact: string;
  nationality:string

};

const Api=new CallApi();

export const MyForm = () => {
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm<FormData>();


let WatchAllFields = watch()


  const onSubmit = (data: FormData) => {
    console.log(WatchAllFields);
   let res= Api.storeData("/contact",WatchAllFields);
   reset();
  };

  return (


<Container>
    <h1 className="text-center">TEST FORM</h1>

    <Form onSubmit={handleSubmit(onSubmit)} className="border p-4">
   
     
<Row >
    <Col>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" {...register("name", { required: true })} />
        {errors.name && <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>
<Col>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
        {errors.email && <span className="text-danger">This field is required</span>}
      </Form.Group>
</Col>
      </Row>



<Row className="mt-3">
    <Col>
      <Form.Group controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter your phone number" {...register("phone", { required: true })} />
        {errors.phone && <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>


      <Col>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" {...register("address", { required: true })} />
        {errors.address && <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>
      </Row>


<Row className="mt-3">
    <Col>
      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check inline type="radio" label="Male" {...register("gender", { required: true })} value="male" />
          <Form.Check inline type="radio" label="Female" {...register("gender", { required: true })} value="female" />
        </div>
        {errors.gender && <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>

    <Col>
      <Form.Group controlId="dob">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" placeholder="Enter BirthDate" {...register("dob", { required: true })} />
        {errors.dob && <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>
      </Row>
      

      <Row className="mt-3">
        <Col>
      <Form.Group controlId="Qualification">
        <Form.Label>Qualification</Form.Label>
        <Form.Control as="select" {...register("qualification", { required: true })}>
          <option value="">Select Qualification</option>
          <option value="highschool">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
        </Form.Control>
        {errors. qualification&& <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>


  <Col>
      <Form.Group controlId="nationality">
        <Form.Label>Nationality</Form.Label>
        <Form.Control as="select" {...register("nationality", { required: true })}>
          <option value="">Select Nationality</option>
          <option value="nepali">Nepali</option>
          <option value="Indian">Indian</option>
          <option value="American">American</option>
        </Form.Control>
        {errors.nationality&& <span className="text-danger">This field is required</span>}
      </Form.Group>
      </Col>
      </Row>


      <Form.Group controlId="preferedmodofcontact">
        <Form.Label>PreferedModofContact</Form.Label>
        <div>
          <Form.Check inline type="radio" label="Number" {...register("phone", { required: true })} value="phone" />
          <Form.Check inline type="radio" label="Email" {...register("email", { required: true })} value="email" />
        </div>
        {errors.preferedmodofcontact && <span className="text-danger">This field is required</span>}
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
};