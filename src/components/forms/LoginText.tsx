import { Typography } from 'antd/lib';
import Link from 'next/link';

const { Text } = Typography;

function LoginText() {
  return (
    <Text style={{ display: 'block', fontSize: '10px' }}>
      By logging in, you agree to our{' '}
      <Link href="/terms" passHref>
        <Text
          style={{
            fontWeight: 'bold',
            textDecoration: 'underline',
            fontSize: '10px',
          }}
        >
          Terms and Conditions
        </Text>
      </Link>
      .
    </Text>
  );
}

export default LoginText;
