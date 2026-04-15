export type Message = {
  name: string;
  content: string;
  date: Date;
};

export type Section =
  | "welcome"
  | "intro"
  | "mempelai"
  | "acara"
  | "ucapan"
  | "gift"
  | "penutup";
