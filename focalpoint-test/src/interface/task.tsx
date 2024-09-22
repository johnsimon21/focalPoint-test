export interface Task {
  id: string;
  name: string;
  checked: boolean;
}

export interface ModalCreateTaskProps {
  setIsModalOpen: (open: boolean) => void;
  setNewTaskTitle: (title: string) => void;
  handleAddTask: () => void;
  confirm_content: string;
  confirm_background: string;
  modalType: string
}
