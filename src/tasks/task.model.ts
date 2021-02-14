// kompilasi dari semua tipedata yang ada di tasks

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus, 
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}