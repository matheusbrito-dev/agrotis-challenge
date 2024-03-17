import { Form, Header } from '@/components';
import { FormBox, LandingBox } from './styles';

function Landing() {
  return (
    <LandingBox>
      <Header />
      <FormBox>
        <Form />
      </FormBox>
    </LandingBox>
  );
}

export default Landing;
