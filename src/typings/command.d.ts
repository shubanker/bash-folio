interface Command {
  command: string;
  typeWritterText?: string;
  typeWritterOptions?: any;
  component?: React.FC<{ next: () => void }>;
  componentProps?: any;
}
