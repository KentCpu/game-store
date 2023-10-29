import React, { ReactNode, useMemo } from 'react';
import { PathsPage, Role } from 'shared/const';
import { useSelector } from 'react-redux';
import { getUserIsInit } from 'entities/user';
import { useLocation, Navigate } from 'react-router-dom';
import { getUserRoles } from 'entities/user/model/selectors/get-roles/get-roles.selector';

interface PrivateRouterProps {
  children: ReactNode;
  roles: Role[];
}

export const PrivateRouter = ({ roles, children }: PrivateRouterProps) => {
  const userRoles = useSelector(getUserRoles);
  const isInitUser = useSelector(getUserIsInit);
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!hasRequiredRoles && isInitUser) {
    return <Navigate to={PathsPage.FORBIDDEN} state={{ from: location }} replace />;
  }

  return children;
};
