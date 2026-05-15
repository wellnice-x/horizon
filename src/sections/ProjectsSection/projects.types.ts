export type StackItem = {
  source: string;
  title: string;
  alt?: string;
};

export type ProjectActionIconName = "goToSite" | "gitHub";

export type ProjectAction = {
  label?: string;
  href: string;
  iconName?: ProjectActionIconName;
  iconTitle?: string;
};

export type Project = {
  id: string;
  title: string;
  imagePreview: string;
  imageFull: string;
  stackItems?: StackItem[];
  actions?: ProjectAction[];
};
