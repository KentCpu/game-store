import React from 'react';

interface ConditionProps {
  match: boolean;
  children: React.ReactNode;
}

export const Condition = ({ match, children }: ConditionProps) => {
  if (!match) return null;

  return children;
};
