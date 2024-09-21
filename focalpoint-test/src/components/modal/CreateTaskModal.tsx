import { ModalCreateTaskProps } from '@/interface/task';
import styles from './CreateTaskModal.module.scss';

export const ModalCreateTask: React.FC<ModalCreateTaskProps> = ({ setIsModalOpen, setNewTaskTitle, handleAddTask }) => {
    
    return (
        <div className={`${styles.modal_create} d-flex`}>
            <div className={`${styles.modal} d-flex flex-column`}>
                <div className={`${styles.modal_title}`}>Nova tarefa</div>

                <fieldset className={`${styles.inputs} d-flex flex-column`}>
                    <label htmlFor='task_title' className={`${styles.task_title}`}>Título</label>
                    <input
                        type='text'
                        placeholder='Digite'
                        id='task_title'
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                    />
                </fieldset>

                <fieldset className={`${styles.buttons} d-flex`}>
                    <button
                        className={`${styles.cancel} d-flex`}
                        onClick={() => setIsModalOpen(false)}
                    >
                        Cancelar
                    </button>
                    <button
                        className={`${styles.add} d-flex`}
                        onClick={handleAddTask}
                    >
                        Adicionar
                    </button>
                </fieldset>
            </div>
        </div>
    )
};
