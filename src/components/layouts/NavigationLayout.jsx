function NavigationLayout({ children }) {
  return (
    <section className="w-screen h-screen grid grid-rows-[100px_1fr] bg-light">
      <header className="flex justify-between items-center p-5">
        <div className="w-16 h-16 bg-dark">
          <img alt="eyssautier-real-estates-logo" />
        </div>
        <div className="w-16 h-16 border border-luxury"></div>
      </header>
      <main className="">{children}</main>
    </section>
  );
}

export default NavigationLayout;
