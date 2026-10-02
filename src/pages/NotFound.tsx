import { Link } from 'react-router';
import SplitText from '../components/SplitText';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Not found');
  return (
    <div className="page">
      <div className="container" style={{ textAlign: 'center', paddingBlock: '6rem' }}>
        <span className="eyebrow">404</span>
        <SplitText as="h1" text="Nothing here" variant="random" />
        <p style={{ marginBottom: '2.5rem' }}>The page you are looking for has moved or never existed.</p>
        <Link to="/shop" className="btn btn-dark">
          Back to the shop
        </Link>
      </div>
    </div>
  );
}
