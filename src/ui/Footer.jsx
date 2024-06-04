function Footer() {
  return (
    <footer className="mt-10 flex w-full  flex-row items-center justify-between bg-text px-12 py-12 text-background">
      <p>
        © 2024 | <b className="tracking-widest text-accent">StylGen</b>
      </p>
      <div>
        Author:{" "}
        <a
          className="transition-all duration-200 ease-in-out hover:text-accent "
          href="https://github.com/LukaszManiak"
        >
          Łukasz Maniak
        </a>
      </div>
    </footer>
  );
}

export default Footer;
