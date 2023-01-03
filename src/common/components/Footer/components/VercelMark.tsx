import VercelLogo from '../../misc/VercelLogo';

function VercelMark() {
  return (
    <div className="flex justify-start text-sm md:justify-center whitespace-nowrap sm:block">
      <a
        href="https://www.vercel.com/?utm_source=align-items.center&amp;utm_campaign=oss"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-sm dark:text-white/70 dark:hover:text-white focus-visible:ariakit-outline hover:no-underline"
      >
        Powered by <VercelLogo />
      </a>
    </div>
  );
}

export default VercelMark;
