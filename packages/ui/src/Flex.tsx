export interface FlexProps {
  children: React.ReactNode;
}

export const Flex = ({ children }: FlexProps) => {
  return <div>{children}</div>;
};
