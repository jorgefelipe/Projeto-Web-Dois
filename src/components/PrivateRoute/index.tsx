import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import { userLogout } from 'store/user';

interface PrivateRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...otherProps
}) => {
  const { addToast } = useToasts();
  const token = localStorage.getItem('@reactjsToken');
  const dispatch = useDispatch();

  if (!token) {
    dispatch(userLogout());
    addToast('Acesso não autorizado', { appearance: 'error' });
  }

  return (
    <Route
      {...otherProps}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
