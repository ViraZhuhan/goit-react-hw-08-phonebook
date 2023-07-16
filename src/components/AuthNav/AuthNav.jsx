import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

 const AuthNav = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to="/register">
          Register
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={Link} to="/login">
          Log In
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default AuthNav;