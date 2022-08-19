export type Category = {
  name?: string;
  slug?: string;
};

export type Task = {
  title?: string;
  date?: string;
  description?: string;
  user?: string;
  category?: string;
  state?: "pending" | "doing" | "done";
  idDB?: string;
};

export type User = {
  name?: string;
  email?: string;
  password?: string;
};
