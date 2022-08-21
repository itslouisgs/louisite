import MailFillIcon from "remixicon-react/MailFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";

export default function Hero() {
  return (
    <div className="h-[85vh]">
      <div className="container flex h-5/6 flex-col justify-center gap-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl">I'm Louis Gustavo</h2>
        <h1 className="break-words text-4xl font-bold sm:text-6xl md:text-7xl">
          A <span className="text-highlight">fullstack developer</span> and a{" "}
          <span className="text-highlight">Computer Science</span>{" "}
          undergraduate.
        </h1>
        <div className="mt-3 flex list-none items-center gap-2">
          <li>
            <a
              href="mailto:louis.gustavo@binus.ac.id"
              className="hover:opacity-80"
            >
              <MailFillIcon color="#e5e7eb" size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/louis-gustavo"
              className="hover:opacity-80"
            >
              <LinkedinFillIcon color="#e5e7eb" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/itslouisgs"
              className="hover:opacity-80"
            >
              <GithubFillIcon color="#e5e7eb" size={24} />
            </a>
          </li>
        </div>
      </div>
      <a href="#portfolio" className="btn h-1/6 justify-center">
        <ArrowDownSLineIcon color="#fff" />
        <p>View portfolio</p>
      </a>
    </div>
  );
}
