export type Category = {
  id: string;
  name: string;
  slug?: string;
};

export type InitialCategory = Omit<Category, "id">;

export type Task = {
  id: string;
  title: string;
  date?: string;
  description?: string;
  user?: string;
  category?: string;
  state?: "pending" | "doing" | "done";
};

export type User = {
  name: string;
  email?: string;
  password?: string;
};
