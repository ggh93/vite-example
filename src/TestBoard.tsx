export default function TestBoard() {
  return (
    <div className="flex flex-col justify-center h-screen text-center">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        죄송합니다. 페이지를 찾을 수 없습니다.
      </p>
      <div className="flex items-center justify-center mt-10 gap-x-6">
        <a
          href="board"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </a>
        <a
          href="https://www.naver.com"
          className="text-sm font-semibold text-gray-900"
        >
          Contact support <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
