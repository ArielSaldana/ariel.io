import { BlogPosts } from "@/app/components/posts";
import Logo from "./components/logo";

export default function Page() {
  return (
    <section>
      <div className="max-w-36 mb-6">
        <Logo />
      </div>
      <p className="mb-4">
        {`Hi! I'm Ariel, a full-stack Software Engineer and Computer Scientist based in NYC. With over a decade of experience in FinTech, I'm passionate about leveraging technology to create a positive impact. Currently, I'm diving into the exciting worlds of Decentralized Finance (DeFi) and Artificial Intelligence (AI), exploring innovative ways to make the world a better place.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
