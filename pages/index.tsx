import { PageHeader } from '@/components/organisms/PageHeader';
import { Projects } from '@/components/organisms/Projects';
import { useStyle } from '@/hooks/StyleProvider';

export default function Home() {
  const { fonts } = useStyle();

  return (
    <main className={`min-h-screen`}>
      <PageHeader />
      <Projects />
    </main>
  );
}
