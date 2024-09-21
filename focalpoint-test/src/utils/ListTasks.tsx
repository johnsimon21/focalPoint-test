import { Task } from "@/interface/task";


export function ListTasksByCheckStatus(tasks: Task[], checked: boolean): Task[] {
    const newTasks = tasks.filter(task => task.checked === checked)

    console.log(newTasks)

    return newTasks
}