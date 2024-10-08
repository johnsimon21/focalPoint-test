"use client"
import { useEffect, useState } from 'react';
import styles from './TasksList.module.scss'
import { TaskService } from '@/services/TaskService';
import { Task } from '@/interface/task';
import { ListTasksByCheckStatus } from '@/utils/ListTasks';
import TrashIcon from '@/assets/Trash';
import { ButtonAddTask } from '@/components/buttons/ButtonAddTask';
import { ModalTask } from '@/components/modal/ModalTask';

export default function TasksList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalType, setModalType] = useState<string>("");
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const [deleteTask, setDeleteTask] = useState<string>("");


    const saveTasksToLocalStorage = (tasks: Task[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getTasksFromLocalStorage = (): Task[] => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    };


    useEffect(() => {
        const storedTasks = getTasksFromLocalStorage();
        setTasks(storedTasks);
    }, []);


    useEffect(() => {
        saveTasksToLocalStorage(tasks);
    }, [tasks]);

    const handleCheckboxChange = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, checked: !task.checked } : task
            )
        );
    };

    const handleAddTask = () => {
        if (newTaskTitle.trim()) {
            const newTask: Task = {
                id: (tasks.length + 1).toString(),
                name: newTaskTitle,
                checked: false,
            };
            setTasks([...tasks, newTask]);
            setIsModalOpen(false);
            setNewTaskTitle("");
        }
    };

    const handleDeleteTask = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        setIsModalOpen(false);
    };


    return (
        <div className={`${styles.list_tasks} d-flex flex-column`}>
            <div className={`${styles.my_tasks} m-auto d-flex flex-column`}>
                <div className={styles.tasks_title}>
                    Suas tarefas de hoje
                </div>

                <ul className={`${styles.tasks_items}`}>
                    {ListTasksByCheckStatus(tasks, false).map((task: Task) => (
                        <li key={task.id} >
                            <label className={`${styles.customCheckbox} d-flex flex-row ${styles.task_item}`}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(task.id)}
                                    checked={task.checked}
                                />
                                <span className={styles.checkmark}></span>
                                <span className={styles.text}>{task.name} </span>
                                <div className={`${styles.trash_area} d-flex flex-row`}>
                                    <TrashIcon
                                        trash={`${styles.trash} d-flex`}
                                        setIsModalOpen={setIsModalOpen}
                                        setModalType={setModalType}
                                        setDeleteTask={setDeleteTask}
                                        taskId={task.id}
                                    />
                                </div>
                            </label>
                        </li>
                    ))}
                    {ListTasksByCheckStatus(tasks, true).map((task: Task, index: number) => (
                        <>
                            {index === 0 ? (
                                <>
                                    <li className={styles.finished_task}>Tarefas finalizadas</li>
                                    <li key={task.id} >
                                        <label className={`${styles.customCheckbox} d-flex flex-row ${styles.task_item}`}>
                                            <input
                                                type="checkbox"
                                                onChange={() => handleCheckboxChange(task.id)}
                                                checked={task.checked}
                                            />
                                            <span className={styles.checkmark}></span>
                                            <span className={styles.text_through_line}>{task.name} </span>
                                            <div className={`${styles.trash_area} d-flex flex-row`}>
                                                <TrashIcon
                                                    trash={`${styles.trash} d-flex`}
                                                    setIsModalOpen={setIsModalOpen}
                                                    setModalType={setModalType}
                                                    setDeleteTask={setDeleteTask}
                                                    taskId={task.id}
                                                />
                                            </div>

                                        </label>
                                    </li>
                                </>
                            ) : <li key={task.id} >
                                <label className={`d-flex flex-row ${styles.task_item}`}>
                                    <input
                                        type="checkbox"
                                        onChange={() => handleCheckboxChange(task.id)}
                                        checked={task.checked}
                                    />
                                    <span className={styles.checkmark}></span>
                                    <span className={styles.text_through_line}>{task.name}</span>
                                    <div className={`${styles.trash_area} d-flex flex-row`}>
                                        <TrashIcon
                                            trash={`${styles.trash} d-flex`}
                                            setIsModalOpen={setIsModalOpen}
                                            setModalType={setModalType}
                                            setDeleteTask={setDeleteTask}
                                            taskId={task.id}
                                        />
                                    </div>

                                </label>
                            </li>
                            }
                        </>
                    ))}
                </ul>

            </div>

            < ButtonAddTask setIsModalOpen={setIsModalOpen} setModalType={setModalType} />

            {isModalOpen && (<>
                modalType === "add" ? (
                <ModalTask
                    setIsModalOpen={setIsModalOpen}
                    setNewTaskTitle={setNewTaskTitle}
                    handleAddTask={handleAddTask}
                    handleDeleteTask={handleDeleteTask}
                    taskId={deleteTask}
                    modalType={modalType}
                />
                ): (modalType === "delete" && (
                <ModalTask
                    setIsModalOpen={setIsModalOpen}
                    setNewTaskTitle={setNewTaskTitle}
                    handleAddTask={handleAddTask}
                    handleDeleteTask={handleDeleteTask}
                    taskId={deleteTask}
                    modalType={modalType}
                />
                ))

            </>)}
        </div>
    );
}
