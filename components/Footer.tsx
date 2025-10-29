export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='container mx-auto px-4 py-6'>
        <div className='flex flex-col items-center justify-center gap-2 text-center'>
          <p className='text-sm text-muted-foreground'>
            © {currentYear} Rifki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
