export type Task = {
    title: string,
    date: string,
    description: string,
    user: string,
    category: string,
    state: "pending" | "doing" | "done" 
    idDB: string,
}