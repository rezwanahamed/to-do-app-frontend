export default function MidSectionBentoLayout() {
  return (
    <>
      <section className="bento-layout w-full items-center justify-between gap-2 space-y-2 px-4 py-20 md:flex md:w-[70rem] md:space-y-0 md:px-0">
        <div className="md:grid-row-2 grid gap-2">
          <div className="h-[15rem] w-full rounded-lg bg-[url('https://cdn.dribbble.com/userupload/14204715/file/original-e64a3775ffa1b9133739774908aadda7.jpg?resize=1504x941&vertical=center')] bg-cover bg-center bg-no-repeat md:w-[35rem]"></div>
          <div className="h-[15rem] w-full rounded-lg bg-[url('https://cdn.dribbble.com/userupload/14281050/file/original-6838cb6a8800981aa20047b069c0b740.jpg?resize=1504x1128&vertical=center')] bg-cover bg-center bg-no-repeat md:w-[35rem]"></div>
        </div>
        <div className="h-[15rem] w-full rounded-lg bg-[url('https://cdn.dribbble.com/userupload/14281057/file/original-29e907f29da71d419a3e6b05fc7b7f79.jpg?resize=1504x881&vertical=center')] bg-cover bg-center bg-no-repeat md:h-[30.5rem] md:w-full"></div>
      </section>
    </>
  );
}
