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

export type Item = {
  label: string;
  description?: string;
  icon?: string;
}

export type Link = Item & {
  to: string;
}

export type Button = Item & {
  onClick: () => void;
}

export type DropdownItem = Item & {
  to?: string;
  click?: () => void;
}