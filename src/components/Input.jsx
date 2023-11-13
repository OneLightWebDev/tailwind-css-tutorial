const Input = () => {
  return (
    <div className="mx-auto mt-8 w-screen-sm">
      <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg">
        <input
          className="peer bg-slate-50 dark:bg-transparent w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 dark:text-white placeholder-slate-400  dark:placeholder-slate-700 transition-colors duration-300 focus:border-sky-400 focus:outline-none"
          type="text"
          name="domain"
          id="domain"
          placeholder="domain.dev"
        />
        <label
          className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 dark:bg-transparent px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white"
          htmlFor="domain"
        >
          https://
        </label>
      </div>
    </div>
  );
};
export default Input;
