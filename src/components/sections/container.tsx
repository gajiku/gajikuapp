import { ReactNode } from 'react';

type ContainerProps = {
  children?: ReactNode;
};

export default function Container(props: ContainerProps) {
  return <div className="grid gap-16">{props.children}</div>;
}
