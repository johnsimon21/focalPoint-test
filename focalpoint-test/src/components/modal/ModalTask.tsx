import { ModalCreateTaskProps } from '@/interface/task';
import styles from './ModalTask.module.scss';

export const ModalTask: React.FC<ModalCreateTaskProps> = ({ setIsModalOpen, setNewTaskTitle, handleAddTask, handleDeleteTask, modalType, taskId }) => {

    return (
        <div className={`${styles.modal_create} d-flex`}>
            <div className={`${styles.modal} d-flex flex-column`}>

                <fieldset className={`${styles.inputs} d-flex flex-column`}>
                    {modalType === "add" ? (<>
                        <div className={`${styles.modal_title}`}>Nova tarefa</div>
                        <label htmlFor='task_title' className={`${styles.task_title}`}></label>
                        <input
                            type='text'
                            placeholder='Digite'
                            id='task_title'
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                        />
                    </>) : (modalType === "delete" && (<>
                        <div className={`${styles.modal_title}`}>Deletar tarefa</div>
                        <div className={`${styles.ask_to_delelte}`}>Tem certeza que você deseja deletar essa tarefa?</div>
                    </>))}
                </fieldset>

                <fieldset className={`${styles.buttons} d-flex`}>
                    <button
                        className={`${styles.cancel} d-flex`}
                        onClick={() => setIsModalOpen(false)}
                    >
                        Cancelar
                    </button>

                    {modalType === "add" ? (
                        <button
                            className={`${styles.confirm} ${styles.add} d-flex`}
                            onClick={handleAddTask}
                        >
                            Adicionar
                        </button>
                    ) : (modalType === "delete" && (
                        <button
                            className={`${styles.confirm} ${styles.delete} d-flex`}
                            onClick={() => handleDeleteTask(taskId)}
                        >
                            Deletar
                        </button>
                    ))}
                </fieldset>
            </div>
        </div>
    )
};
