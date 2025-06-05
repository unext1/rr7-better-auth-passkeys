import { href, Link } from 'react-router';

import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';

const Index = () => {
  return (
    <div className="p-6 flex-1 flex flex-col">
      <section className="flex-1 flex items-center overflow-hidden relative">
        <div className="container px-4 md:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge
              className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-br from-background to-muted border-muted"
              variant="secondary"
            >
              <span className="text-xs">🔐</span> Passkeys
            </Badge>
            <h1 className="text-4xl md:text-5xl pb-2 lg:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Better Auth.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full text-sm px-8" asChild>
                <Link to={href('/signin')}>Sign in</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-sm px-8" asChild>
                <Link to={href('/signup')}>Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
