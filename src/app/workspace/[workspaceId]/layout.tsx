interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}

import { Toolbar } from "./toolbar";

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
  
  <div className="h-full">
    <Toolbar/>
    {children}
</div>
  );
};

export default WorkspaceIdLayout;
