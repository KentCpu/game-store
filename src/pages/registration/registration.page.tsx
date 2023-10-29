import { AuthContainer } from 'features/auth';
import { RegistrationForm } from 'features/auth/ui/registration-form.component';

const RegistrationPage = () => {
  return (
    <AuthContainer>
      <RegistrationForm />
    </AuthContainer>
  );
};

export default RegistrationPage;
