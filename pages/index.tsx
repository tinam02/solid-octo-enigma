import { PageHeader } from '@/components/organisms/PageHeader';
import { Projects } from '@/components/organisms/Projects';
import { useStyle } from '@/hooks/StyleProvider';

export default function Home() {
  const { fonts } = useStyle();

  return (
    <main className={`  min-h-screen    `}>
      <PageHeader />

      <Projects />
      {/* <div className=" grid text-center   lg:grid-cols-4  ">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={` text-2xl  `}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 ">
              -&gt;
            </span>
          </h2>
        </a>
      </div> */}
    </main>
  );
}
