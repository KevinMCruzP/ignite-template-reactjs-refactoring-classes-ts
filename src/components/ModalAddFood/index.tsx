import { FiCheckSquare } from "react-icons/fi";

import { useRef } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { Form } from "./styles";

function ModalAddFood(props) {
  const { isOpen, setIsOpen } = props;
  let formRef = useRef(null);

  async function handleSubmit(data) {
    const { setIsOpen, handleAddFood } = props;

    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

        <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined} />
        <Input name="price" placeholder="Ex: 19.90" icon={undefined} />

        <Input name="description" placeholder="Descrição" icon={undefined} />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
