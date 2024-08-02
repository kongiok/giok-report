export type Doc = {
  title: string;
  description: string;
  slug: string;
  series: string;
  category: string;
  tags: string[];
  draft: boolean;
  createdAt: string;
  updatedAt: string;
  content: string;
}

export type Link = {
  title: string;
  url: string;
  description?: string;
  icon?: string;
}