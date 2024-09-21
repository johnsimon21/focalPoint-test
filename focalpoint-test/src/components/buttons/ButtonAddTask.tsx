import styles from './ButtonAddTask.module.scss';

export const ButtonAddTask: React.FC<{ setIsModalOpen: (open: boolean) => void }> = ({ setIsModalOpen }) => {
    return (
        <button
            className={`${styles.button} m-auto`}
            onClick={() => setIsModalOpen(true)}  
        >
            Adicionar nova tarefa
        </button>
    );
}
