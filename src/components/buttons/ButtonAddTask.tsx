import styles from './ButtonAddTask.module.scss';

export const ButtonAddTask: React.FC<{ setIsModalOpen: (open: boolean) => void, setModalType: (modalType: string) => void }> = ({ setIsModalOpen, setModalType }) => {

    const handleClickAddNewTask = () => {
        setModalType("add")
        setIsModalOpen(true)
    }

    return (
        <button
            className={`${styles.button} m-auto`}
            onClick={handleClickAddNewTask}
        >
            Adicionar nova tarefa
        </button>
    );
}
