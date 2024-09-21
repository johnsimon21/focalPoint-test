import { Task } from "@/interface/task";

  
  export class TaskService {
    private tasks: Task[] = [
      { id: "1", name: "Lavar as mãos", checked: false },
      { id: "2", name: "Fazer um bolo", checked: false },
      { id: "3", name: "Lavar a louça", checked: false },
      { id: "4", name: "Levar o lixo para fora", checked: true },
      { id: "5", name: "Levar o lixo para fora", checked: true },
    ];
  
    getTasks(): Task[] {
      return this.tasks;
    }
  }